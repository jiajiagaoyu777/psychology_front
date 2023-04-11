<template>
    <div class="questionManage">
        <el-button type="primary" @click="factorDialogVisible = true">新建因子</el-button>
        <el-button type="primary" @click="questionDialogVisible = true">新建题目</el-button>

        <el-dialog title="新建因子"  :visible.sync="factorDialogVisible"  width="60%"  :before-close="handleClose">

            <span>请添加因子</span>

					<div class="form-group">
						<label for="factor_name" class="col-md-3 control-label" >因子名：</label>
						<div class="col-md-8">
							<input name="factor_name" type="text" class="form-control" id="factor_name"  placeholder="请输入因子名" v-model="factor_name">
						</div>
					</div>
					
            <span slot="footer" class="dialog-footer">
                <el-button @click="factorDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFactor()">确认新建</el-button>
            </span>
        </el-dialog>

        <el-dialog title="新建题目"  :visible.sync="questionDialogVisible"  width="60%"  :before-close="handleClose">

            <span>请输入题目</span>

					<div class="form-group">
						<label for="question_content" class="col-md-3 control-label" >题干：</label>
						<div class="col-md-8">
							<input name="question_content" type="text" class="form-control" id="question_content"  placeholder="请输入因子名" v-model="question_content">
						</div>
					</div>
					
                    <div class="form-group">
						<label for="options" class="col-md-3 control-label" >选项设置：</label>
						<div class="col-md-8">
							<input name="options" type="text" class="form-control" id="options"  placeholder="请输入选项（还没做好）" v-model="options">
						</div>
					</div>

<el-form>
<el-form-item label="扩展参数:">
  <div>
    <el-button size="mini" type="text" icon="el-icon-plus" @click="addExtraInput">添加一行</el-button>
    <el-popover
        placement="top-start"
        title=""
        width="500"
        trigger="hover">
      <el-alert
          title="打开APP相关操作指南"
          type="info"
          :closable="false">
        <template slot='title'>
					<!--这里面是对不同场景下扩展参数的自定义说明-->
        </template>
      </el-alert>
      <i slot="reference" style="margin-left: 5px" class="el-icon-info"></i>
    </el-popover>
  </div>
  <div v-if="extraList && extraList.length > 0">
    <el-alert title="" type="info" :closable="false" :show-icon="false">
      <template slot='title'>
				<!--遍历数组，根据不同的结构，展现表单样式、一行单个或者多个输入框，具体看自己实现，这里是一行对应一个键值对-->
        <div v-for="(item,index) in extraList" :key="index" style="margin-top: 5px">
          <el-input style="width: 218px" v-model="item.key" placeholder="key"></el-input>
          <el-input style="width: 218px" v-model="item.value" placeholder="value"></el-input>
          <el-button size="mini" type="text" icon="el-icon-delete" style="color: #F56C6C"
                     @click="delExtraInput(index)">删除
          </el-button>
        </div>
      </template>
    </el-alert>
  </div>
</el-form-item>

</el-form>



            <span slot="footer" class="dialog-footer">
                <el-button @click="questionDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addQuestion()">确认新建</el-button>
            </span>
        </el-dialog>


        <el-table
          :data="factorList"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="factor_name"
            label="因子名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="scale_id"
            label="所属量表id"
            width="120">
          </el-table-column>
                    
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <!-- <el-button @click="editScale(scope.row)" type="text" size="small">题目管理</el-button> -->
              <el-button type="text" size="small" @click="deleteFactor(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-table
          :data="questionList"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="question_content"
            label="题干"
            width="150">
          </el-table-column>
          <el-table-column
            prop="scale_id"
            label="所属量表id"
            width="120">
          </el-table-column>
                    
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button @click="editScale(scope.row)" type="text" size="small">题目管理</el-button> 
              <el-button type="text" size="small" @click="deleteQuestion(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

    </div>

</template>

<script>
// import { onMounted } from 'vue';
// const qs=require("qs")
  export default {
    name: "QuestionManageView",
    data() {
      return {
        
        factorDialogVisible:false,
        questionDialogVisible:false,

        factor_name:'',
        scale_id:'',
        factorList:[],

        question_content:'',
        options:'',
        questionList:[],
        extraList:[],
        // scale_settings:{
        //   jumpable:'0',
        // },        
        

      };
    },
    methods: {      
        addFactor(){
            this.factorDialogVisible = false
            if(this.factor_name==""){
                alert("因子名不能为空")
            }else{
                    this.axios({
                    url:"/api/factor/create",
                    method:"POST",
                    headers:{'content-Type':"application/json"},
                    // headers:{'content-Type':"application/x-www-form-urlencoded"},
                    data:
                        JSON.stringify({
                        factor_name:this.factor_name,
                        scale_id:this.scale_id,
                        })                                        
                    }
                    ).then((response)=>{
                    console.log(response.data);
                    if(response.data.code==200){
                        alert("新建因子成功");  
                    }else{
                        alert(response.data.message)
                    }
                    });
            }
        },
        // deleteFactor(row){

        // },
        addQuestion(){
            this.questionDialogVisible = false
            if(this.question_content==""){
                alert("题干不能为空")
            }else{
                    this.axios({
                    url:"/api/question/create",
                    method:"POST",
                    headers:{'content-Type':"application/json"},
                    // headers:{'content-Type':"application/x-www-form-urlencoded"},
                    data:
                        JSON.stringify({
                        question_content:this.question_content,
                        options:'',//这里后需要改成数组
                        scale_id:this.scale_id,
                        })                                        
                    }
                    ).then((response)=>{
                    console.log(response.data);
                    if(response.data.code==200){
                        alert("新建题目成功");  
                    }else{
                        alert(response.data.message)
                    }
                    });
            }
        },
        // deleteQuestion(row){

        // },
                /** 添加一行键值对 */
        addExtraInput() {
          this.extraList.push({ 'key': '', 'value': '' })
        },

        /** 根据数组索引删除一行键值对 */
        delExtraInput(index) {
          this.extraList.splice(index, 1)
        },

        /** 将参数列表提取出来 转换为对象形式 */
        extraListToData() {
          let extraList = this.extraList
          if (!extraList || extraList.length < 1) {
            return {}
          }
          let extraData = {}
          for (let item of extraList) {
            let key = item.key
            let value = item.value
            if (key && value) {
              extraData[key] = value
            }
          }
          return extraData
        },


    //   clickBtn(){
    //     this.dialogVisible = false
    //     if(this.factor_name==""){
    //       alert("因子名不能为空")
    //     }else if(this.scaleType==""){
    //       alert("量表类型不能为空")
    //     }else if(this.scale_authority==""){
    //       alert("请选择量表权限")
    //     }
    //     else{
    //       this.doAddScale();
    //     }
    //   },
    //   doAddScale(){
    //     this.axios({
    //       url:"http://localhost:8080/scale/create",
    //       method:"POST",
    //       headers:{'content-Type':"application/json"},
    //       // headers:{'content-Type':"application/x-www-form-urlencoded"},
    //       data:
    //         JSON.stringify({
    //           scale_name:this.scale_name,
    //           type:this.scaleType,
    //           brief:this.brief,
    //           scale_settings:JSON.stringify(this.scale_settings),
    //           scale_authority:this.scale_authority,
    //         })
            
    //       }
    //     ).then((response)=>{
    //       console.log(response.data);
    //       if(response.data.code==200){
    //         alert("新建量表成功");  
    //       }else{
    //         alert(response.data.message)
    //       }
    //     });
    //   },
      handleClick(row) {
          console.log(row);
        }
    },
    created(){
            this.scale_id=this.$route.query.scale_id
            console.log(this.scale_id)

            this.axios({
				url:"/api/factor/getAllFactor",
				method:"GET",
                headers:{'content-Type':"application/json"},
			}).then((response)=>{
				console.log(response.data);
				if(response.data.code==200){
					this.factorList=response.data.data      
				}else{
					alert(response.data.message)
				}
			});

            this.axios({
				url:"/api/question/getAllQuestion",
				method:"GET",
                headers:{'content-Type':"application/json"},
			}).then((response)=>{
				console.log(response.data);
				if(response.data.code==200){
					this.questionList=response.data.data      
				}else{
					alert(response.data.message)
				}
			});
	},
    
  };
</script>

<style>

</style>