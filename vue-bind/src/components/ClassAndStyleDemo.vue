<template>
    <p :class="{ 'active':isActive,'text-danger':hasError }">Class样式绑定1</p>
    <!-- vue对class样式进行了增强，不仅限于字符串，也可以插入数组和对象,例子中为传入两个对象, -->
    <p :class="classObject">Class样式绑定2</p>
    <!-- 多个对象绑定class样式可以一起绑定 -->
    <p :class="[arrActive,arrHasError]">Class样式绑定3</p>
    <!-- 绑定对象也可以是数组 -->
    <p :class="[isActive ? 'active text-danger' : '']">Class样式绑定4</p>
    <!-- 可以使用三元运算符来绑定,同时绑定active和text-danger -->
    <p :class="[isActive ? 'active' : '',{'text-danger':hasError}]">Class样式绑定5</p>
    <!-- 也可以使用数组和三元运算符来绑定，尽量避免 -->

    <p :style="{color:activeColor,fontSize:fontSize + 'px'}">Style绑定1</p>
    <!-- 不加px单位无法实现字体大小变化 -->
    <p :style="styleObject">Style绑定2</p>
    <!-- 绑定对象来实现style绑定 -->
    <p :style="[styleObject]">Style绑定3</p>
    <!-- 绑定数组来实现style绑定，本质还是绑定对象 -->
</template>

<script>
    export default {
        data(){
            return{
                isActive:true,
                hasError:true,
                classObject:{
                    'active':true,
                    'text-danger':true
                },
                arrActive:"active",
                arrHasError:"text-danger",
                //vue使用rgb色号格式
                activeColor:'rgb(197, 175, 192)',
                fontSize:30,
                styleObject:{
                    color:'rgb(197, 175, 192)',
                    fontSize:"30px",
                }
            }
        }
    }
</script>

<style>
.active{
    font-size: 20px;
}

.text-danger{
    color: red;
}
</style>