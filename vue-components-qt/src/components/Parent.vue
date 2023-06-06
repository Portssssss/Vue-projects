<template>
    <h3>Parent</h3>
    <!-- 父组件可以传递数据给子组件（不能子传父）参数不限制格式，静态绑定传参 -->
    <Child title="Parent传递数据"/>
    <!-- 动态绑定传参,注意data和props用的动态传参参数可能不一样data为msg，而子组件的props为title1 -->
    <Child :title1="msg" :age="age1" :array="arr" :userInfo="userInfo"/>
</template>

<script>
import Child from './Child.vue';
export default{
    data(){
        return{
            msg:"动态Parent传递参数",
            age1:20,
            arr:[1,"kkk"],
            userInfo:{
                name:"ikun",
                age:20
            }
        }
    },
    components:{
        Child
    },
    mounted() {
  console.log(this.userInfo);
}
}
</script>

<style>

</style>