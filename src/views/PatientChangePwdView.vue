<template>
  <div class="patientChangePwd">

    <header class="header">
			<!-- <img src="images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统-患者子系统</b></span>
    </header>

    <div class="container"> 
        <!-- 公共左侧导航菜单 -->
        <!-- <div class="col-md-2">       
            <LeftMenu />
        </div> -->

        <div class="row top-nav">
            <div class="col-md-6">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"></a>
                </li>
                <li class="active">
                  <router-link to="/patientIndex"><span class="fa fa-home">子系统首页</span></router-link>
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

      <div class="col-md-10">
        <div class="panel panel-default">

          

          <!-- 公共组件tab切换 -->
          <!-- 直接在父组件给子组件上传递字符串时，不需要v-bind绑定 -->
          <PatientTabCom classData="nav nav-tabs" />
          <div class="panel-body">
            <!--修改密码表单开始-->
            <form id="form-change-password" class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-md-2 control-label">原密码：</label>
                <div class="col-md-8">
                  <input
                    name="oldPassword"
                    type="text"
                    class="form-control"
                    placeholder="请输入原密码"
                    v-model="oldPwd"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-label">新密码：</label>
                <div class="col-md-8">
                  <input
                    name="newPassword"
                    type="text"
                    class="form-control"
                    placeholder="请输入新密码"
                    v-model="newPwd"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-label">确认密码：</label>
                <div class="col-md-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="请再次输入新密码"
                    v-model="newPwdCon"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <input
                    id="btn-change-password"
                    type="button"
                    class="btn btn-primary"
                    value="修改"
                    @click="clickBtn()"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import PatientTabCom from "..//components/PatientTabCom"
const qs=require("qs")
export default {
    name: "PatientChangePwdView",
    methods:{		
        clickBtn(){
          if(this.oldPwd==""){
            alert("原密码不能为空")
          }else if(this.newPwd==""){
            alert("新密码不能为空")
          }else if(this.newPwdCon==""){
            alert("确认密码不能为空")
          }else if(this.newPwd!=this.newPwdCon){
            alert("确认密码与新密码不一致")
          }
          else{        
              var patientInfo=JSON.parse(localStorage.getItem("patientInfo")) //取出之前存在缓存中的用户信息,把之前转成字符串的JSON对象再由字符串转回JSON
              
              this.axios({
                url:"/api/patient/changePwd",
                method:"PUT",
                headers:{'content-Type':"application/x-www-form-urlencoded"},
                data:qs.stringify({
                    patient_id:patientInfo.patient_id,
                    oldPwd:this.oldPwd,
                    newPwd:this.newPwd,
                    patient_name:patientInfo.patient_name
                  })
                }
              ).then((response)=>{
                console.log(response.data);
                if(response.data.code==200){
                  alert("修改密码成功");
                  
                  this.$router.push('/login');
                }else{
                  alert(response.data.message)
                }
              });
          }          
        },	
    },
    data(){
      return{
        oldPwd:'',
        newPwd:'',
        newPwdCon: '',
      }
    },
    components: {
        // LeftMenu,
        PatientTabCom
    },
    created(){
        console.log(this.$store.state.tabIndex)
    }
};
</script>

<style>
</style>