"use strict"

import App from "./App.vue";
import Login from "./components/Login.vue";
import LoggedIn from "./components/LoggedIn.vue";
import Home from "./components/Home.vue";
import AddItem from "./components/AddItem.vue";
import CreateGroceryList from "./components/CreateGroceryList.vue";
import ListofGroceryLists from "./components/ListofGroceryLists.vue";
import MasterList from "./components/MasterList.vue";
import UpdateGroceryList from "./components/UpdateGroceryList.vue";
import UpdateItem from "./components/UpdateItem.vue";
import ViewGroceryList from "./components/ViewGroceryList.vue";
import VueRouter from "vue-router";

const router = new VueRouter ({
  mode:"history", /*Allows us to hit back arrow*/
  routes: [
    {path:"/", component:Login},
    {path:"/loggedin", component:Home},
    {path:"/home", component:Home},
    {path:"/masterlist/:id", component:MasterList},
    {path:"/additem", component:AddItem},
    {path:"/creategrocerylist", component:CreateGroceryList},
    {path:"/listofgrocerylists/:id", component:ListofGroceryLists},
    {path:"/viewgrocerylist/:id", component:ViewGroceryList},
    {path:"/updategrocerylist/:id", component:UpdateGroceryList},
    {path:"/updateitem/:id", component:UpdateItem}
  ]
})
export default router;
