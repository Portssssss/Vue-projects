<template>
    <div class="aside">
        <h3>Aside</h3>
        <Item/>
        <Item/>
        <Item/>
    </div>
</template>

<script>
import Item from './Item.vue';
    export default{
        components:{
            Item
        }
    }
</script>

<style scoped>
.aside{
    float: right;
    width: 30%;
    height: 400px;
    border: 5px solid #999;
    box-sizing: border-box;
    /* border-box怪异盒模型，width=border*2+padding*2+内容区，内容区自适应，设置的width是整个盒子的大小 */
    /* content-box正常盒模型，整个盒子大小=width+border*2+padding*2 */
    text-align: center;
    line-height: 50px;
}
</style>