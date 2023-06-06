<script setup>
// 可以在引入一个 components的时候，无需关心在setup方法返回的值，不使用就必须使用setup函数注册并返回return
import HelloWorld from './components/HelloWorld.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import listRendering from './components/listRendering.vue';
import EventProcessing from './components/EventProcessing.vue';
import ArrayListAndComputed from './components/ArrayListAndComputed.vue';
import ClassAndStyleDemo from './components/ClassAndStyleDemo.vue';
import WatchDemo from './components/WatchDemo.vue';
import FormBinding from './components/FormBinding.vue';
// 可以在此引入一个页面样式，顺序是从上到下
</script>

<template>
  <!-- <HelloWorld/>
  <ConditionalRendering/>
  <listRendering/> -->
  <!-- <EventProcessing/> -->
  <!-- <ArrayListAndComputed/> -->
  <!-- <ClassAndStyleDemo/> -->
  <!-- <WatchDemo/> -->
  <FormBinding/>
  <!-- 引入后需要在此注册 -->
</template>


