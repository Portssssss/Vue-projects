<template>
    <h3>事件监听</h3>
    <p>{{ msg }}</p>
    <button @click="changeData">修改数据</button>
</template>

<script>
    export default {
        data(){
            return{
                msg:"ikun"
            }
        },
        methods:{
            changeData(){
                this.msg = "你干嘛~嗨嗨呀"
            }
        },
        //侦听器，监视响应式数据的改变，可以在每次响应式数据发生改变的时候触发一个函数
        watch:{
            //函数名必须与侦听的对象保持一致
            msg(newValue,oldValue){
                //改变前后的响应式数据都可以获取
                console.log(newValue,oldValue);
            }
        }
    }
</script>
