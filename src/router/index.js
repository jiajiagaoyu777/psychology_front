import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/adminIndex',
    name: 'adminIndex',
    component: () => import('../views/AdminIndexView.vue')
  },
  {
    path: '/adminChangePwd',
    name: 'adminChangePwd',
    component: () => import('../views/AdminChangePwdView.vue')
  },
  {
    path: '/adminUploadAvatar',
    name: 'adminUploadAvatar',
    component: () => import('../views/AdminUploadAvatarView.vue')
  },
  {
    path: '/doctorIndex',
    name: 'doctorIndex',
    component: () => import('../views/DoctorIndexView.vue')
  },
  {
    path: '/doctorChangePwd',
    name: 'doctorChangePwd',
    component: () => import('../views/DoctorChangePwdView.vue')
  },
  {
    path: '/doctorUploadAvatar',
    name: 'doctorUploadAvatar',
    component: () => import('../views/DoctorUploadAvatarView.vue')
  },
  {
    path: '/patientIndex',
    name: 'patientIndex',
    component: () => import('../views/PatientIndexView.vue')
  },
  {
    path: '/patientChangePwd',
    name: 'patientChangePwd',
    component: () => import('../views/PatientChangePwdView.vue')
  },
  {
    path: '/patientUploadAvatar',
    name: 'patientUploadAvatar',
    component: () => import('../views/PatientUploadAvatarView.vue')
  },
  {
    path: '/scaleManage',
    name: 'scaleManage',
    component: () => import('../views/ScaleManageView.vue')
  },
  {
    path: '/questionManage',
    name: 'questionManage',
    component: () => import('../views/QuestionManageView.vue')
  },
  {
    path: '/draft',
    name: 'draft',
    component: () => import('../views/DraftView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
