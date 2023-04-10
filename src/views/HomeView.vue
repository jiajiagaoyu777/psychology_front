<template>
  <div class="home">
    <!--头部-->
		<header class="header">
			<!-- <img src="images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统</b></span>
		</header>
		<!--主体-->
		<div class="container mycontent">
			<!--透明层 -->
			<div class="inputDiv">
				<p>请选择要浏览的页面</p>
				<ul>
					<!-- <li>
            <router-link class="btn btn-sm btn-info" to="/index">网站首页</router-link>
          </li> -->
          <li>
            <router-link class="btn btn-sm btn-info" to="/login">登录页面</router-link>
          </li>
          <li>
            <router-link class="btn btn-sm btn-info" to="/register">注册页面</router-link>
          </li>
					<!-- <li><a class="btn btn-sm btn-info" href="web/404.html">404页面</a></li>
					<li><a class="btn btn-sm btn-info" href="web/500.html">500页面 </a></li> -->
				</ul>
			</div>
		</div>
		<!--页脚开始-->
		<footer class="footer">
			<!-- 品质保障，私人定制等-->
			<!-- <div class="text-center rights container">
				<div class="col-md-offset-2 col-md-2">
					<span class="fa fa-thumbs-o-up"></span>
					<p>品质保障</p>
				</div>
				<div class="col-md-2">
					<span class="fa fa-address-card-o"></span>
					<p>私人订制</p>
				</div>
				<div class="col-md-2">
					<span class="fa fa-graduation-cap"></span>
					<p>学生特供</p>
				</div>
				<div class="col-md-2">
					<span class="fa fa-bitcoin"></span>
					<p>专属特权</p>
				</div>
			</div> -->
			<!--联系我们、下载客户端等-->
			<!-- <div class="container beforeBottom">
				<div class="col-md-offset-1 col-md-3">
					<div><img src="images/index/stumalllogo.png" alt="" class="footLogo" /></div>
					<div><img src="images/index/footerFont.png" alt="" /></div>
				</div>
				<div class="col-md-4 callus text-center">
					<div class="col-md-4">
						<ul>
							<li><a href="#"><p>买家帮助</p></a></li>
							<li><a href="#">新手指南</a></li>
							<li><a href="#">服务保障</a></li>
							<li><a href="#">常见问题</a></li>
						</ul>
					</div>
					<div class="col-md-4">
						<ul>
							<li><a href="#"><p>商家帮助</p></a></li>
							<li><a href="#">商家入驻</a></li>
							<li><a href="#">商家后台</a></li>
						</ul>
					</div>
					<div class="col-md-4">
						<ul>
							<li><a href="#"><p>关于我们</p></a></li>
							<li><a href="#">联系我们</a></li>
							<li>
								<span class="fa fa-wechat"></span>
								<span class="fa fa-weibo"></span>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-4">
					<div class="col-md-5">
						<p>电脑商城客户端</p>
						<img src="images/index/ios.png" class="lf">
						<img src="images/index/android.png" alt="" class="lf" />
					</div>
				</div>
			</div> -->
		</footer>
		<!--页脚结束-->
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
