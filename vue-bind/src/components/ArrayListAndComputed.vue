<template>
    <h3>数组变化侦听</h3>
    <button @click="addListHandle">添加一条数据</button>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>

    <h3>计算属性数组是否为空  {{ citys.city }}</h3>
    <p>{{ isnotNone }}</p>
    <!-- 计算属性不是函数不需要载isnotNone后面加（） -->
</template>

<script>
import { computed } from '@vue/reactivity';

    export default {
        data(){
            return{
                names:["ikun","idan","iwen"],
                citys:{
                    city:"日本地方",
                    content:["仙台","名古屋","广岛"]
                }
            }
        },
        methods:{
            addListHandle(){
                //变更方法会引起UI自动更新,如：push() pop() shift() unshift() splice() sort() reverse()
                //this.names.push("igang");
                //合并数组不会引起UI自动更新,打印可以发现数组已经更新,如: filter() concat() slice()
                //this.names.concat(["igang"]);
                //console.log(this.names.concat(["igang"]));
                //如果想要使用合并数组方法并且引起UI更新，可以重新赋值给names即可
                this.names=this.names.concat(["igang"]);
            }
        },
        //将模板语句里面的复杂计算内容放到计算属性下面，计算属性只会在计算语句改变的时候重新计算，也就是多次引用仅仅只一次开销；
        //而函数时加载的时候就进行一次渲染，多次调用多次渲染
        computed:{
            isnotNone(){
                return this.citys.content.length > 0 ? "Yes" : "No";
            }
        }
    }
</script>