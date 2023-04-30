import VueRouter from 'vue-router';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Buy from '../pages/Buy';
import Upload from '../pages/Upload';
import ManageUser from '../pages/ManageUser';
import AddBook from '../pages/AddBook';
import Complaint from '../pages/Complaint';
import ViewFeedback from '../pages/ViewFeedback';

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: '/home',
            name: 'main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/buy',
                    name: 'buy',
                    component: Buy
                },
                {
                    path: "/upload",
                    name: "upload",
                    component: Upload
                },
                {
                    path: "/addbook",
                    name: "addbook",
                    component: AddBook
                },
                {
                    path: "/manageuser",
                    name: "manageuser",
                    component: ManageUser
                },
                {
                    path: '/complaint',
                    name: "complaint",
                    component: Complaint
                },
                {
                    path: '/viewfeedback',
                    name: "viewfeedback",
                    component: ViewFeedback
                },

            ],
        },
    ]
})