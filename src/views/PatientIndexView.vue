<template>
  <div class="patientIndex">
    <!--头部-->
		<header class="header">
			<!-- <img src="images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统-患者子系统</b></span>
      
        <div >
          <!--头部-->
          <header class="header">
            <!--电脑商城logo-->
            <div class="row">
              <div class="col-md-3">
                <a href="index.html">
                  <!-- <img src="../assets/images/index/stumalllogo.png" /> -->
                </a>
              </div>
              <!--快捷选项-->
              <div class="col-md-9 top-item">
                <ul class="list-inline pull-right">
                  <!-- <li>
                    <router-link to="/order"
                      ><span class="fa fa-file-text"></span>&nbsp;订单</router-link
                    >
                  </li>
                  <li class="li-split">|</li>
                  <li>
                    <router-link to="/cart"
                      ><span class="fa fa-cart-plus"></span
                      >&nbsp;购物车</router-link
                    >
                  </li>
                  <li class="li-split">|</li> -->
                  <li>
                    <!--下列列表按钮 ：管理-->
                    <!-- 使用vue的动态绑定类名来完成下拉菜单的显示隐藏 -->
                    <div
                      class="btn-group"
                      :class="flag ? 'open' : ''"
                      @click="flag = !flag"
                    >
                      <button
                        type="button"
                        class="btn btn-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span id="top-dropdown-btn"
                          ><span class="fa fa-gears"></span>&nbsp;管理
                          <span class="caret"></span
                        ></span>
                      </button>
                      <ul class="dropdown-menu top-dropdown-ul" role="menu">
                        <li
                          :class="index == $store.state.tabIndex ? 'active' : ''"
                          v-for="(item, index) in tabList"
                          :key="index"
                          @click="clickTab(index, item.path)"
                        >
                          <a href="javascript:void(0)">{{ item.text }}</a>
                        </li>
                      </ul>
                      <!-- 调用公共组件 -->
                      <PatientTabCom classData="dropdown-menu top-dropdown-ul"/>
                    </div>
                  </li>
                  <li class="li-split">|</li>
                  <li>
                    <router-link to="/login"
                      ><span class="fa fa-user"></span>&nbsp;退出</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </header>
          
          <!--导航 -->
          <!--分割导航和顶部-->
          <div class="row top-nav">
            <div class="col-md-6">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"></a>
                </li>
                <li class="active">
                  <router-link to="/patientIndex"><span class="fa fa-home">子系统首页</span></router-link>
                </li>
                
              </ul>
            </div>
          </div>
          <!--导航结束-->
        </div>

		</header>

    <!-- 主体 -->
    <div class="col-md-12">

      <div class="container bg-light">
        <div class="col-md-12 text-center">
            <!-- <button type="button" class="btn btn-primary">题目管理</button>
            <button type="button" class="btn btn-warning">量表管理</button>
            <button type="button" class="btn btn-primary">查看自辖患者测评结果</button>
            <button type="button" class="btn btn-warning">回复咨询</button> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PatientTabCom from "..//components/PatientTabCom"
export default {
  name: "PatientIndexView",
  components: {
    PatientTabCom
  },
  data() {
    return {
      flag: false
    };
  },
};
</script>

<style>
</style>