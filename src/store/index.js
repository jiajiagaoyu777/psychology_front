import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    orderMenu: false,
    infoMenu: false,
    baseUrl:"http://localhost:8080"
  },
  getters: {
  },
  mutations: {
    // 保存修改tab组件切换的下标
    mutationsTabIndex(state, index){
      state.tabIndex = index
    },
    // // 菜单切换显示隐藏标识
    // mutationsOrderMenu(state){
    //   state.orderMenu = !state.orderMenu
    // },
    // mutationsInfoMenu(state){
    //   state.infoMenu = !state.infoMenu
    // }
  },
  actions: {
  },
  modules: {
  }
})
