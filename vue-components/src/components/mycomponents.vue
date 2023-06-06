<template>
  <div class="container">{{ message }}</div>
</template>

<script>
    export default {
        data(){
            return{
                message:"组件基础组成"
            }
        }
    }
</script>

<!-- 让当前样式只在当前组件中生效（局部样式，不加就是全局样式可以在所有组件中引用） -->
<style scoped>
.container{
    font-size: 30px;
    color: red;
}
</style>