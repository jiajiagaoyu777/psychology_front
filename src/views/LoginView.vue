<template>
  <div class="login">
    <!--头部-->
		<header class="header">
			<!-- <img src="../images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统</b></span>
		</header>
		<!--主体-->
		<div class="container mycontent text-left">
			<!--透明层 -->
			<div class="loginDiv">
				<p>用户登录</p>
				<!--表单开始-->
				<form id="form-login" action="index.html"  class="form-horizontal" role="form">

					<div class="col-md-3">身份: 【{{ picked }}】</div>
					<input type="radio" id="one" value="1" v-model="picked" />
					<label for="one">【1】患者</label>
					<input type="radio" id="two" value="2" v-model="picked" />
					<label for="two">【2】医生</label>
					<input type="radio" id="three" value="3" v-model="picked" />
					<label for="two">【3】管理员</label>


					<!--用户名-->
					<div class="form-group">
						<label for="username" class="col-md-3 control-label" >名字：</label>
						<div class="col-md-8">
							<input name="username" type="text" class="form-control" id="username"  placeholder="请输入用户名" v-model="username">
						</div>
					</div>
					<!--密码-->
					<div class="form-group">
						<label for="password" class="col-md-3 control-label"> 密码：</label>
						<div class="col-md-8">
							<input name="password" type="password" class="form-control" id="password"  placeholder="请输入密码" v-model="pwd">
						</div>
					</div>
					<!-- 记住我-->
					<div class="form-group">
						<div class="col-md-offset-3 col-md-6">
							<div class="checkbox">
								<label>
									<input type="checkbox" id="auto">自动登录
								</label>
							</div>
						</div>
					</div>
					<!--提交按钮-->
					<div class="form-group">
						<label class="col-md-3 control-label"></label>
						<div class="col-md-8">
							<input id="btn-login" class="btn btn-primary" type="button" value="登录" @click="clickBtn()"/>
							<span class="pull-right"><small>还没有账号？</small><router-link to="/register">注册</router-link></span>
						</div>
					</div>
				</form>
			</div>
		</div>
		
  </div>
</template>

<script>
const qs=require("qs")
export default {
    name: "LoginView",
	methods:{		
		clickBtn(){
			if(this.username==""){
				alert("用户名不能为空")
			}else if(this.pwd==""){
				alert("密码不能为空")
			}else if(this.picked==""){
				alert("请选择身份信息")
			}
			else if(this.picked==1){
				this.doPatientLogin();
			}
			else if(this.picked==2){
				this.doDoctorLogin();
			}
			else if(this.picked==3){
				this.doAdminLogin();
			}
			
		},
		doAdminLogin(){
			this.axios({
				url:"/api/admin/login",
				method:"POST",
				headers:{'content-Type':"application/x-www-form-urlencoded"},
				data:qs.stringify({
						admin_name:this.username,
						admin_pwd:this.pwd,
					})
				}
			).then((response)=>{
				console.log(response.data);
				if(response.data.code==200){
					alert("登录成功");
					localStorage.setItem("adminInfo",JSON.stringify(response.data.data))//把登录的用户数据保存到浏览器的f12里的application里的LocalStorage里面
					
					this.$router.push('/adminIndex');
				}else{
					alert(response.data.message)
				}
			});
		},
		doDoctorLogin(){
			this.axios({
				url:"/api/doctor/login",
				method:"POST",
				headers:{'content-Type':"application/x-www-form-urlencoded"},
				data:qs.stringify({
						doctor_name:this.username,
						doctor_pwd:this.pwd,
					})
				}
			).then((response)=>{
				console.log(response.data);
				if(response.data.code==207){
					alert("医生身份尚未审核通过，请等待身份认证成功后再重新登陆")
					this.$router.push('/login');
				}else if(response.data.code==200){
					alert("登录成功");
					localStorage.setItem("doctorInfo",JSON.stringify(response.data.data))//把登录的用户数据保存到浏览器的f12里的application里的LocalStorage里面
					this.$router.push('/doctorIndex');
				}else{
					alert(response.data.message)
				}
			});
		},
		doPatientLogin(){
			this.axios({
				url:"/api/patient/login",
				method:"POST",
				headers:{'content-Type':"application/x-www-form-urlencoded"},
				data:qs.stringify({
						patient_name:this.username,
						patient_pwd:this.pwd,
					})
				}
			).then((response)=>{
				console.log(response.data);
				if(response.data.code==200){
					alert("登录成功");
					localStorage.setItem("patientInfo",JSON.stringify(response.data.data))//把登录的用户数据保存到浏览器的f12里的application里的LocalStorage里面
					
					this.$router.push('/patientIndex');
				}else{
					alert(response.data.message)
				}
			});
		},
	},
	data(){
		return{
			username:'',
			pwd:'',
			picked: '1',
		}
	}
}
</script>

<style>

</style>