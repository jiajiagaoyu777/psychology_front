<template>
  <div class="doctorUploadAvatar">

    <header class="header">
			<!-- <img src="images/index/stumalllogo.png" alt="" /> -->
			<span class="pull-right"><small>欢迎访问</small><b>云心理测评系统-医生子系统</b></span>
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
                  <router-link to="/doctorIndex"><span class="fa fa-home">子系统首页</span></router-link>
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
          <!-- 公共tab切换 -->
          <DoctorTabCom classData="nav nav-tabs"/>
          <div class="panel-body">
            <!--上传头像表单开始-->
            <!-- action="http://localhost:8080/admin/changeAvatar"
            method="POST"
            enctype="multipart/form-data" -->
            <form class="form-horizontal" role="form"
            
            >
              <div class="form-group">
                <label class="col-md-2 control-label">选择头像:</label>
                <div class="col-md-5">
                  <img
                    id="img-avatar"
                    :src="imgAvatar"
                    class="img-responsive"
                  />
                </div>
                <div class="clearfix"></div>
                <div class="col-md-offset-2 col-md-4">
                  <input type="file" name="file" @change="changeFile"/>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <input type="submit" class="btn btn-primary" value="上传" @click="uploadDoctorAvatar()" />
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
// import LeftMenu from "../components/LeftmenuCom.vue"
import DoctorTabCom from "..//components/DoctorTabCom"
//const qs=require("qs")
export default {
    name: "DoctorUploadAvatarView",
    components: {
        //LeftMenu,
        DoctorTabCom
    },
    data(){
      return{
        fileObj:null,
        imgAvatar:""
      }
    },
    methods:{
      //选择文件
      changeFile(e){
        // console.log(e)
        console.log(e.target.files[0])
        var obj=e.target.files[0]
        var formData=new FormData()
        formData.append('doctor_id',JSON.parse(localStorage.getItem("doctorInfo")).doctor_id)
        formData.append('doctor_name',JSON.parse(localStorage.getItem("doctorInfo")).doctor_name)
        formData.append('file',obj)
        this.fileObj=formData
      },
      uploadDoctorAvatar(){
        this.axios({
          url:"/api"+"/doctor/changeAvatar",
          method:"POST",
          data:
            this.fileObj
          ,
          headers:{
            "Content-Type":"multipart/form-data"
          },
        }).then((res)=>{
          console.log(res.data)
          if(res.data.code==200){
            this.imgAvatar= "/api"+ res.data.data
            //取出缓存中的头像
            var obj=JSON.parse(localStorage.getItem("doctorInfo"))
            obj.doctor_avatar=res.data.data
            localStorage.setItem("doctorInfo",JSON.stringify(obj))
          }else{
            alert(res.data.message)
          }
        })
      }
    },
    created(){
      //下面是个三元式：如果缓存里的头像存在就用缓存里的头像，否则就用默认的头像
      this.imgAvatar= JSON.parse(localStorage.getItem("doctorInfo")).doctor_avatar 
      ? "/api"+JSON.parse(localStorage.getItem("doctorInfo")).doctor_avatar 
      : require("../assets/images/index/user.jpg")
    }
};
</script>

<style>
</style>