import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import ProductList from "../views/ProductList.vue";
import CreateProduct from "../views/CreateProduct.vue";
import UserInfo from "../views/UserInfo.vue";
import ApiFetchTest from "../views/ApiFetchTest.vue";
import PracticePostCode1 from "../views/practice/PracticePostCode1.vue";
import PracticePostCode2 from "../views/practice/PracticePostCode2.vue";
import ToDoList from "../views/practice/ToDoList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/homepage",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/productList",
    name: "productlist",
    component: ProductList,
  },
  {
    path: "/createProduct",
    name: "createproduct",
    component: CreateProduct,
  },
  {
    path: "/userInfo",
    name: "userinfo",
    component: UserInfo,
  },
  {
    path: "/Api-test",
    name: "apitest",
    component: ApiFetchTest,
  },
  {
    path: "/postCode1",
    name: "postcode1",
    component: PracticePostCode1,
  },
  {
    path: "/postCode2",
    name: "postcode2",
    component: PracticePostCode2,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
