import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/cart.vue'
import testAPI from '../views/testAPI.vue'
import cartoes from '../views/cartoes.vue'
import meuscartoes from '../views/meuscartoes.vue'
import login from '../views/login.vue'
import cadastro from '../views/cadastro.vue'
import mockpagloja from '../views/mockpagloja.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cart',
            name: 'Cart',
            component: cart
        },
        {
            path: '/test',
            name: 'test',
            component: testAPI
        },
        {
            path: '/cartoes',
            name: 'cartoes',
            component: cartoes
        },
        {
            path: '/meuscartoes',
            name: 'meuscartoes',
            component: meuscartoes
        },
        {
            path: '/lojas',
            name: 'cadastro de lojas',
            component: cadastro
        },
        {
            path: '/loginlojas',
            name: 'login de lojas',
            component: login
        },
        {
            path: '/minhaloja',
            name: 'pagloja',
            component: mockpagloja
        },
    ]
})

export default router
