import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/cart.vue'
import cartoes from '../views/cartoes.vue'
import entregador from '../views/entregador.vue'
import loginEntregador from '../views/loginEntregador.vue'
import paginaEntregador from '../views/paginaEntregador.vue'
import modificarEntregador from '../views/modificarEntregador.vue'
import entregas from '../views/entregas.vue'
import entregaEntregador from '../views/entregaEntregador.vue'
import meuscartoes from '../views/meuscartoes.vue'
import login from '../views/login.vue'
import cadastro from '../views/cadastro.vue'
import mockpagloja from '../views/mockpagloja.vue'
import parcerias from '../views/parcerias.vue'
import admparcerias from '../views/admparcerias.vue'
import loginadm from '../views/loginadmparcerias.vue'
import review from '../views/review.vue' 
import submit_review from '../views/submit_review.vue'


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
            path: '/cartoes',
            name: 'cartoes',
            component: cartoes
        },
        {
            path: '/entregador',
            name: 'entregador',
            component: entregador
        },
        {
            path: '/loginEntregador',
            name: 'loginEntregador',
            component: loginEntregador
        },
        {
            path: '/paginaEntregador/:email',
            name: 'paginaEntregador',
            component: paginaEntregador,
        },
        {
            path: '/modificarEntregador/:email',
            name: 'modificarEntregador',
            component: modificarEntregador,
        },
        {
            path: '/entregas',
            name: 'entregas',
            component: entregas
        },
        {
            path: '/entregaEntregador/:email',
            name: 'entregaEntregador',
            component: entregaEntregador,
        },
        {
            path: '/meuscartoes',
            name: 'meuscartoes',
            component: meuscartoes
        },
        {
            path: '/parcerias',
            name: 'parcerias',
            component: parcerias
        },
        {
            path: '/loginadm',
            name: 'loginadm',
            component: loginadm

        },
        {
            path: '/admparcerias',
            name: 'admparcerias',
            component: admparcerias
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
        {
            path: '/review',
            name: 'review',
            component: review
        },
        {
            path: '/submit_review',
            name: 'submit_review',
            component: submit_review
        },
        
    ]
})

export default router
