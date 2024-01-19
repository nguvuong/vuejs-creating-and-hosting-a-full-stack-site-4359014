import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUwVw64TVHiG5JN-c3H1QTHYifnCElyww",
  authDomain: "vue-site-test-486c6.firebaseapp.com",
  projectId: "vue-site-test-486c6",
  storageBucket: "vue-site-test-486c6.appspot.com",
  messagingSenderId: "378235590581",
  appId: "1:378235590581:web:c2c06d4934fe2d45cbebfc"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/',
    redirect: '/products',
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
