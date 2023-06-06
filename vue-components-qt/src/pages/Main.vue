<template>
    <div class="main">
        <h3>Main</h3>
        <Article />
        <Article />
    </div>
</template>

<script>
import Article from './Article.vue';
    export default{
        components:{
            Article
        }
    }
</script>

<style scoped>
.main{
    float: left;
    width: 70%;
    height: 400px;
    border: 5px solid #999;
    box-sizing: border-box;
    /* border-box怪异盒模型，width=border*2+padding*2+内容区，内容区自适应，设置的width是整个盒子的大小 */
    /* content-box正常盒模型，整个盒子大小=width+border*2+padding*2 */
    text-align: center;
    line-height: 50px;
}
</style>