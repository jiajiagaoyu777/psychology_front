<template>
  <div class="register">
    <!--头部-->
		<header class="header">
			<!-- <img src="../images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统</b></span>
		</header>
		<!--主体-->
		<div class="container mycontent text-left">
			<!--透明层 -->
			<div class="regDiv">
				<p>新用户注册</p>
				<!--表单开始-->
				<form id="form-reg" class="form-horizontal" role="form">

					<div class="col-md-3">身份: 【{{ picked }}】</div>
					<input type="radio" id="one" value="1" v-model="picked" />
					<label for="one">【1】患者</label>
					<input type="radio" id="two" value="2" v-model="picked" />
					<label for="two">【2】医生</label>
					<input type="radio" id="three" value="3" v-model="picked" disabled/>
					<label for="two">【3】管理员</label>

					<!--用户名-->
					<div class="form-group">
						<label class="col-md-3 control-label">名字：</label>
						<div class="col-md-8">
							<input name="username" type="text" class="form-control" placeholder="请输入用户名" v-model="username">
						</div>
					</div>					
					<!--密码-->
					<div class="form-group">
						<label class="col-md-3 control-label"> 密码：</label>
						<div class="col-md-8">
							<input name="password" type="password" class="form-control" placeholder="请输入密码" v-model="pwd">
						</div>
					</div>
					<!--确认密码-->
					<div class="form-group">
						<label class="col-md-3 control-label"> 确认密码：</label>
						<div class="col-md-8">
							<input type="password" class="form-control" placeholder="请再次输入密码" v-model="confirm_pwd">
						</div>
					</div>
					<!--医师资格证编号输入-->
					<div class="form-group">
						<label class="col-md-3 control-label" v-if="picked==2"> 医师资格证号：</label>
						<div class="col-md-8">
							<input type="number" class="form-control" placeholder="请输入资格证编号" v-model="certificate" v-if="picked==2">
						</div>
					</div>
					<!--提交按钮-->
					<div class="form-group">
						<label class="col-md-3 control-label"></label>
						<div class="col-md-8">
							<input id="btn-reg" class="btn btn-primary" type="button" value="立即注册" @click="clickBtn()"/>
							<span class="pull-right"><small>已经有账号？</small><router-link to="/login">登录</router-link></span>
						</div>
					</div>
				</form>
			</div>
		</div>
		
  </div>
</template>

<script>
export default {
    name: "RegisterView",
    methods:{
        doDoctorReg(){
            this.axios.post("/api/doctor/reg",{
                doctor_name:this.username,
                doctor_pwd:this.pwd,
				certificate:this.certificate,
				is_doctor:0,
            }).then((response)=>{
                console.log(response.data);
                if(response.data.code==200){
                alert("注册成功！")
				this.$router.push('/login');
                }else{
                    alert(response.data.message)
                }
            });            
        },
		doPatientReg(){
            this.axios.post("/api/patient/reg",{
                patient_name:this.username,
                patient_pwd:this.pwd,				
            }).then((response)=>{
                console.log(response.data);
                if(response.data.code==200){
                alert("注册成功！")
				this.$router.push('/login');
                }else{
                    alert(response.data.message)
                }
            });            
        },
        clickBtn(){
            if(this.username==""){
                alert("用户名不能为空")
            }else if(this.pwd==""){
                alert("密码不能为空")
            }else if(this.confirm_pwd==""){
                alert("必须确认密码")
            }else if(this.pwd!=this.confirm_pwd){
                alert("新旧密码必须保持一致")
            }
			else if(this.picked==1){
				this.doPatientReg();  
			}
			else if(this.picked==2){
				if(this.certificate==""){
					alert("请输入医师资格证编号")
				}else{
					if(this.certificate/100000<=0 || this.certificate/100000>=10){//之前先在输入框中限制了只能输入数字，这里做这个判断是为了判断输入的数字是否为6位整数
						alert("输入的资格证编号不为6位整数,请重新输入")
					}else{
						this.doDoctorReg();
					}					
				}				
			}
                      
        }
    },
    data(){
        return{
            username:'',
            pwd:'',
            confirm_pwd:'',
			certificate:'',
			picked: '1',
        }
        
    }
}
</script>

<style>

</style>