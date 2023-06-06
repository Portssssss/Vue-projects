<template>
  <!-- 显示组件 -->
  <MyComponents/>
  <!-- 使用单词拆分也可以实现相同效果，但不推荐 -->
  <my-components></my-components>
</template>

<script>
//引入组件
import MyComponents from "./components/mycomponents.vue"
//注入组件
export default{
  components :{
    MyComponents
  }
}
</script>

<style>

</style>