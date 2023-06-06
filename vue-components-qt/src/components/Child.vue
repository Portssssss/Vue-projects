<template>
    <h3>Child</h3>
    <!-- 使用插值表达式来 -->
    <p>{{ title }}</p>
    <P>{{ title1 }}</P>
    <P>{{ age }}</P>
    <ul>
        <li v-for="(item,index) of array" :key="index">{{ item }} {{ index }}</li>
    </ul>
    <p>{{ array }}</p>
    <!-- 异步加载：如果在父组件中获取userInfo对象的方式是异步的（例如从后端API获取数据），那么在初始渲染阶段，userInfo对象可能尚未被完全加载。在这种情况下，直接使用userInfo.name和userInfo.age可能会导致属性访问错误。通过使用短路逻辑，可以在对象加载完成之前避免访问不存在的属性 -->
    <p>{{ userInfo && userInfo.name }}</p>
    <p>{{ userInfo && userInfo.age }}</p>
    <!-- 直接使用{{ userInfo.name可能会因为异步加载而读取不到对象的属性 }} -->


</template>

<script>
export default{
    data(){
        return{
            //当data和props同属性的时候，props优先级更高
            title:"子组件数据"
        }
    },
    //props里面要以字符串的形式传递数据
    props:["title","title1","array","age","userInfo"]
}

</script>

<style>

</style>