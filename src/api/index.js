import http from '../utils/request';

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
};

// const baseUrl = "172.20.10.6:5050";
const baseUrl = "10.208.118.63:5050";

// 登录
export const validateLogin = (data) => {
    return http.post(`http://${baseUrl}/login`,
        data,
        config
    ).then(response => {
        return response;
    });
}

// 注册
export const register = (data) => {
    return http.post(`http://${baseUrl}/register`,
        data,
        config
    );
}

// 添加图书
export const uploadBook = (data) => {
    return http.post(`http://${baseUrl}/addbook`,
    data,
        config
    );
}

// 获取图书
export const getBookList = () => {
    return http.get(`http://${baseUrl}/booklist`,
        config
    );
}

// 删除图书
export const deleteBook = (data) => {
    return http.delete(`http://${baseUrl}/deletebook/${data}`,
        data,
        config
    );
}

// 获取用户列表
export const getUserList = () => {
    return http.get(`http://${baseUrl}/userlist`,
        config
    );
}

//删除用户
export const deleteUser = (data) => {
    return http.delete(`http://10.208.118.63:5050/deleteuser/${data}`,
        config
    );
}

// 添加图书类型
export const addBookType = (data) => {
    return http.post(`http://${baseUrl}/addbooktype`,
        data,
        config
    );
}

// 获取图书类型
export const getBookTypeList = () => {
    return http.get(`http://${baseUrl}/booktypelist`,
        config
    );
}

// 添加反馈
export const addFeedBack = (data) => {
    console.log(data);
    const newData = {
        feedbackId: 0,
        ...data
    }
    return http.post(`http://${baseUrl}/addfeedback`,
        newData,
        config
    );
}

// 获取反馈列表
export const getFeedBackList = () => {
    return http.get(`http://${baseUrl}/feedbacklist`,
        config
    );
}
