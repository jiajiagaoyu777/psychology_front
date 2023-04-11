<template>
    <div class="scaleManage">
        <el-button type="text" @click="dialogVisible = true">新建量表</el-button>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="60%"
            :before-close="handleClose">

            <span>请填写量表基本信息</span>


					<div class="form-group">
						<label for="scale_name" class="col-md-3 control-label" >量表标题：</label>
						<div class="col-md-8">
							<input name="username" type="text" class="form-control" id="scale_name"  placeholder="请输入量表标题" v-model="scale_name">
						</div>
					</div>
					
					<div class="form-group">
						<label for="brief" class="col-md-3 control-label"> 量表简介：</label>
						<div class="col-md-8">
							<input name="password" type="text" class="form-control" id="brief"  placeholder="请输入量表简介" v-model="brief">
						</div>
					</div>

          <div class="col-md-12">
            <div class="col-md-3">量表类型: 【{{ scaleType }}】</div>
            <input type="radio" id="one" value="1" v-model="scaleType" />
            <label for="one">【1】焦虑SAS</label>
            <input type="radio" id="two" value="2" v-model="scaleType" />
            <label for="two">【2】抑郁SDS</label>
            <input type="radio" id="three" value="3" v-model="scaleType" />
            <label for="two">【3】MBTI十六型人格</label>
          </div>

          <div class="col-md-12">
            <div class="col-md-3">是否可跳题: 【{{ scale_settings.jumpable }}】</div>
            <input type="radio" id="one" value="1" v-model="scale_settings.jumpable" />
            <label for="one">【0】不可跳</label>
            <input type="radio" id="two" value="2" v-model="scale_settings.jumpable" />
            <label for="two">【1】可跳</label>
          </div>          

          <div class="col-md-12">  
            <div class="col-md-3">量表权限: 【{{ scale_authority }}】</div>
            <input type="radio" id="one" value="1" v-model="scale_authority" />
            <label for="one">【0】私用</label>
            <input type="radio" id="two" value="2" v-model="scale_authority" />
            <label for="two">【1】公用</label>	
          </div>		


            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="clickBtn()">确认新建</el-button>
            </span>
        </el-dialog>

        <el-table
          :data="list"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="scale_name"
            label="量表名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="breif"
            label="简介"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="量表类型"
            width="90">
          </el-table-column>
          <!-- <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column> -->
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button @click="editScale(scope.row)" type="text" size="small">题目管理</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

    </div>

</template>

<script>
// import { onMounted } from 'vue';
// const qs=require("qs")
  export default {
    name: "ScaleManageView",
    data() {
      return {
        dialogVisible: false,
        scale_name:'',
        brief:'',
        scaleType: '1',
        scale_settings:{
          jumpable:'0',
        },        
        scale_authority:'0',
        list:[],
      };
    },
    methods: {
      editScale(row){
        console.log(row)
        this.$router.push({
            path:'/questionManage',
            query:{scale_id:row.scale_id}
          })
      },
      clickBtn(){
        this.dialogVisible = false
        if(this.scale_name==""){
          alert("量表名不能为空")
        }else if(this.scaleType==""){
          alert("量表类型不能为空")
        }else if(this.scale_authority==""){
          alert("请选择量表权限")
        }
        else{
          this.doAddScale();
        }
      },
      doAddScale(){
        this.axios({
          url:"/api/scale/create",
          method:"POST",
          headers:{'content-Type':"application/json"},
          // headers:{'content-Type':"application/x-www-form-urlencoded"},
          data:
            JSON.stringify({
              scale_name:this.scale_name,
              type:this.scaleType,
              brief:this.brief,
              scale_settings:JSON.stringify(this.scale_settings),
              scale_authority:this.scale_authority,
            })
          }
        ).then((response)=>{
          console.log(response.data);
          if(response.data.code==200){
            alert("新建量表成功");
            // localStorage.setItem("scaleInfo",JSON.stringify(response.data.data))//把登录的用户数据保存到浏览器的f12里的application里的LocalStorage里面
            // this.$router.push('/adminIndex');        
          }else{
            alert(response.data.message)
          }
        });
      },
      handleClick(row) {
          console.log(row);
        }
    },
    created(){
      this.axios({
				url:"/api/scale/getAllScale",
				method:"GET",
        headers:{'content-Type':"application/json"},
			}).then((response)=>{
				console.log(response.data);
				if(response.data.code==200){
					this.list=response.data.data      
				}else{
					alert(response.data.message)
				}
			});
		},
  };
</script>

<style>

</style>