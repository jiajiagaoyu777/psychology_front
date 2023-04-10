<template>
  <div class="adminIndex">
    <!--头部-->
		<header class="header">
			<!-- <img src="images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统-管理员子系统</b></span>
      
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
                      <AdminTabCom classData="dropdown-menu top-dropdown-ul"/>
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
                  <router-link to="/adminIndex"><span class="fa fa-home">子系统首页</span></router-link>
                </li>
                <!-- <li><a href="#">秒杀</a></li>
                <li><a href="#">优惠券</a></li>
                <li><a href="#">电脑VIP</a></li>
                <li><a href="#">外卖</a></li>
                <li><a href="#">超市</a></li> -->
              </ul>
            </div>
          </div>
          <!--导航结束-->
        </div>

		</header>

    <!-- 主体 -->
    <div class="container">
      
      <div class="row">
        <div class="col-md-2" id="indexMenu">
          <!-- <ul class="index-menu">
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
            <li class="second-menu-li">图书音像</li>
          </ul> -->
          <div id="showIndex">
            <ul class="second-menu">
              <li class="second-menu-li">####</li>
            </ul>
          </div>
          <div id="showSecond">
            <ul class="third-menu"></ul>
          </div>
        </div>
        <div class="col-md-10">
          <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <!-- <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol> -->
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner" align="center">
              <!-- <div class="item active">
                <img src="../assets/images/index/index_banner1.png" />
              </div>
              <div class="item">
                <img src="../assets/images/index/index_banner2.png" />
              </div>
              <div class="item">
                <img src="../assets/images/index/index_banner3.png" />
              </div>
              <div class="item">
                <img src="../assets/images/index/index_banner4.png" />
              </div>
              <div class="item">
                <img src="../assets/images/index/index_banner5.png" />
              </div> -->
            </div>
            <!-- 轮播（Carousel）导航 -->
            <!-- <a
              class="left carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a> -->
          </div>
        </div>
      </div>

      <!--推荐栏目-->
      <div class="row">
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <p class="panel-title">患者信息管理</p>
            </div>
            <!-- <div class="panel-body panel-item">
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >齐心（COMIX）C5902 A5优品商务笔记本子记事本日记本122张</router-link>
                </div>
                <div class="col-md-2">¥18</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/02COMIXC5902A5122blue/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >得力（deli）1548A商务办公桌面计算器 太阳能双电源</router-link>
                </div>
                <div class="col-md-2">¥50</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/002calculator1548A/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product">戴尔(DELL)XPS13-9360-R1609 13.3</router-link>
                </div>
                <div class="col-md-2">¥6299</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/12(DELL)XPS13gold/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product">联想（Lenovo）IdeaPad310高配版</router-link>
                </div>
                <div class="col-md-2">¥5298</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/13LenovoIdeaPad310_black/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
            </div> -->
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <p class="panel-title">医生身份审核</p>
            </div>
            <!-- <div id="hot-list" class="panel-body panel-item">
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >广博(GuangBo)10本装40张A5牛皮纸记事本子日记本办公软抄本GBR0731</router-link>
                </div>
                <div class="col-md-2">¥23</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/00GuangBo1040A5GBR0731/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >齐心（COMIX）C5902 A5优品商务笔记本子记事本日记本122张</router-link>
                </div>
                <div class="col-md-2">¥18</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/02COMIXC5902A5122blue/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >广博(GuangBo)皮面日程本子 计划记事本效率手册米色FB60322</router-link>
                </div>
                <div class="col-md-2">¥28</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/001GuangBo)FB60322/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product">戴尔Dell 燃700R1605银色</router-link>
                </div>
                <div class="col-md-2">¥3799</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/11DELLran7000R1605Ssilvery/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <p class="panel-title">量表宏观管理</p>
            </div>
            <!-- <div id="hot-list" class="panel-body panel-item">
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >广博(GuangBo)10本装40张A5牛皮纸记事本子日记本办公软抄本GBR0731</router-link>
                </div>
                <div class="col-md-2">¥23</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/00GuangBo1040A5GBR0731/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >齐心（COMIX）C5902 A5优品商务笔记本子记事本日记本122张</router-link>
                </div>
                <div class="col-md-2">¥18</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/02COMIXC5902A5122blue/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product"
                    >广博(GuangBo)皮面日程本子 计划记事本效率手册米色FB60322</router-link>
                </div>
                <div class="col-md-2">¥28</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/001GuangBo)FB60322/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="col-md-7 text-row-2">
                  <router-link to="/product">戴尔Dell 燃700R1605银色</router-link>
                </div>
                <div class="col-md-2">¥3799</div>
                <div class="col-md-3">
                  <img
                    src="../assets/images/portal/11DELLran7000R1605Ssilvery/collect.png"
                    class="img-responsive"
                  />
                </div>
              </div>
            </div> -->
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import AdminTabCom from "..//components/AdminTabCom.vue"
export default {
  name: "AdminIndexView",
  components: {
    AdminTabCom
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