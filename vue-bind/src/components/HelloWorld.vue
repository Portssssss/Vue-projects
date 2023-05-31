<template>
  <div v-bind:id="DynamicId" v-bind:class="DynamicClass">
    {{ msg }}
  </div>
  <!-- 使用v-bing解决插值表达式不能直接作用在标签属性上的问题,直接动态绑定 -->
  <button :disabled="isButtonDisabled">Button</button>
  <!-- v-bind:id = :id 简写-->
  <div v-bind="objectOfAttrs">多值绑定</div>
  <!-- 一次绑定多个属性 -->
</template>

<script>
  export default {
    data(){
      return{
        msg:"Hello World",
        DynamicClass:"appclass",
        DynamicId:"appID",
        isButtonDisabled:true,
        objectOfAttrs: {
          class:"appclass",
          id:"appID",
          //也可以自定义属性
          DynamicTitle:"appTitle"
        }
        
      }
    }
  }
</script>

<style>
.appclass{
  color: red;
  font: 30px;
}
</style>