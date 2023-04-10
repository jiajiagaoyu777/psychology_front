<template>
<!-- 封装动态的类名 -->
  <ul :class="classData">
    <li :class="index == $store.state.tabIndex ? 'active' : ''" v-for="(item, index) in tabList" :key="index" @click="clickTab(index,item.path)">
        <a href="javascript:void(0)">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TabCom",
  props: ["classData"],
  data() {
    return {
      tabList: [
        {
          path: "/doctorChangePwd",
          text: "修改密码"
        },
        // {
        //   path: "/doctorData",
        //   text: "个人资料",
        // },
        {
          path: "/doctorUploadAvatar",
          text: "上传头像",
        },
      ]
    };
  },
  methods: {
    clickTab(index, path){
        console.log(index, path)
    //    提交修改vuex中tabIndex数据
        this.$store.commit("mutationsTabIndex", index)
        // 路由跳转
        this.$router.push({path: path})
    }
  }
  
};
</script>

<style>
</style>