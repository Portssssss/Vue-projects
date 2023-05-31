<template>
<h3>模板语法</h3>
<p>{{ msg }}</p>
<p>{{ num + 1 }}</p>
<p>{{ ok ? 'True' : 'False' }}</p>
<p>{{ split.split('').reverse().join('') }}</p>
<!-- split函数分割字符串，reverse函数倒置，join函数拼接 -->
<p>{{ rawHtml }}</p>
<!-- 网址直接使用原始html标签会显示成字符串 -->
<p v-html="rawHtml"></p>
</template>

<script>
  export default {
    data(){
      return{
        msg:"插值表达式",
        num:"num",
        ok:true,
        split:"大家好",
        rawHtml:"<a href='https://github.com/Portssssss/Vue-projects'>Ports的github</a>"
      }
    }
  }
</script>



