import { uploadBook, getBookList, addBookType, deleteBook, getBookTypeList } from "../api";
export default {
    namespaced: true,
    state: {
        bookList: [
        ],
        bookTypeList: [
        ]
    },
    actions: {
        // 添加图书类型
        addBookType(context, value) {
            const newData = {
                bookTypeId: Math.random()*1000%10,
                typeName: value
            }
            addBookType(newData);
            context.commit("ADD_BOOKTYPE", newData);
        },
        // 添加图书
        addBook(context, value) {
            const newData = {
                bookId: Math.random()*1000%10,
                uploadUser: value.uploadUser,
                uploadTime: value.uploadTime,
                bookName: value.bookName,
                bookPrice: value.bookPrice,
                author: value.author,
                description: value.description,
                bookType: value.bookType.typeName,
            };
            uploadBook(newData);
            context.commit("ADD_BOOK", newData);
        },
        // 获取图书列表
        getBooks(context) {
            getBookList().then(val => {
                context.commit("GET_BOOKS", val.data);
            })
        },
        // 获取图书类型列表
        getBookType(context) {
            getBookTypeList().then(val => {
                context.commit("GET_BOOK_TYPE", val.data);
            });
        },
        // 删除图书（收到图书 id）
        deleteBook(context, value) {
            deleteBook(value);
            context.commit("DELETE_BOOK", value);
        }
    },
    mutations: {
        ADD_BOOKTYPE(state, value) {
            state.bookTypeList.push(value);
        },
        ADD_BOOK(state, value) {
            state.bookList.push(value);
        },
        GET_BOOKS(state, value) {
            state.bookList = value;
        },
        GET_BOOK_TYPE(state, value) {
            state.bookTypeList = value;
        },
        DELETE_BOOK(state, value) {
            state.bookList = state.bookList.filter(item => item.bookId !== value);
        }
    }

}