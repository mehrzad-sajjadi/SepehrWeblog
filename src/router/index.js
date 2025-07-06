import {createRouter ,createWebHistory} from "vue-router";
import AddArticleView from "@/views/AddArticleView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ArticleView from "@/views/ArticleView.vue";
import UserView from "@/views/UserView.vue";
import AboutView from "@/views/AboutView.vue";


const routes=[
    {
        path:"/",
        component : HomeView
    },
    {
        path:"/login",
        component : LoginView
    },
    {
        path:"/add_article",
        component : AddArticleView
    },
    {
        path:"/article/:id",
        component : ArticleView
    },
    {
        path:"/about", 
        component : AboutView
    },
    {
        path:"/users",
        component : UserView
    }
];
const router = createRouter({
    history : createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    const name = localStorage.getItem("name");
    if(!name && to.path!="/login"){
        router.push("/login");
    }else{
        next();
    }
})
export default router;