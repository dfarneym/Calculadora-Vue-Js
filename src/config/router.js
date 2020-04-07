// Arquivo de configuração de rotas entre os componentes

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

// Registrando rotas...
const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name:'adminPages',
    path: '/admin',
    component: AdminPages
}]

// Instanciando e exportando o Vue Router
export default new VueRouter({
    mode: 'history',
    routes
})

