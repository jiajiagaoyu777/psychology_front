<template>
  <div>
    <el-button @click="addChoice" >添加选项</el-button>
    <el-button @click="showJSON" >输出</el-button>
      <el-table
        :data=settingsList
        style="width: 100%"
      >
      <el-table-column
          type="index"
          label="序号"
          :index="indexMethod"
      />
      <el-table-column label="选项文本" >
        <template slot-scope="scope">
          <el-form>
            <el-form-item>
              <el-input v-model="settingsList[scope.$index].choiceText"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
<!--            <el-input-number v-model="num" controls-position="right" :min="1" :max="10" name="因子1"/>-->
              <el-input placeholder="请输入内容" v-model="settingsList[scope.$index].factorList[0].num" class="input-with-select">
                <el-button slot="prepend" >因子1</el-button>
                <el-button slot="prepend"  class="el-icon-plus "></el-button>
              </el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button @click="delRow(scope.$index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    <br/>
  </div>
</template>

<script>
export default {
    name: 'DraftView',
    data(){
      return{
        settingsList:[],
        words:["A","B","C","D","E","F","G","H"],
        settingItem:{
        choiceText:"",
          factorList:[]
      },
        factorItem:{
          isMinus:false,
          num:"",
        },
        num:1,

      }
    },
  methods:{
    addChoice(){
      if(this.settingsList.length< 8){
        let settingItem = JSON.parse(JSON.stringify(this.settingItem))
        let factorItem = JSON.parse(JSON.stringify(this.factorItem))
        settingItem.factorList.push(factorItem)
        this.settingsList.push(settingItem)
      }
      else {
        this.$message('最多支持8个选项哦');
      }
    },
    showJSON(){
      console.log(JSON.stringify(this.settingsList))
    },
    indexMethod(index) {
      return this.words[index];
    },
    delRow(rowIndex){
      this.settingsList.splice(rowIndex,1)
    }
  },
}
</script>

<style>

</style>