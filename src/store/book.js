import { nanoid } from "nanoid";

export default {
    namespaced: true,
    state: {
        bookTypeList: [
            "任意类型",
            "马克思主义著作",
            "哲学",
            "社会科学",
            "自然科学",
            "综合性图书",
        ],
    },
    mutations: {
        ADD_BOOKTYPELIST(state, value) {
            state.bookTypeList.push(value);
        },
    }

}