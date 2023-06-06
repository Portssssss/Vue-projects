<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model.lazy="msg">
        <!-- .lazy修饰符，在失去焦点的时候才会更新数据，可以避免每次输入都检索引起的资源浪费 -->
        <!-- .number修饰符只接收数字类型；.trim修饰符去掉前后空格 -->
        <p>{{ msg }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <!-- 所有需要用户输入的都可以绑定v-model -->
    </form>

    <div ref="container" class="container">{{ content }}</div>
    <button @click="getElementHandle">获取元素</button>
    
</template>

<script>
    export default {
        data(){
            return {
                msg:"",
                checked:false,
                content:"内容"
            }
        },
        methods:{
            getElementHandle(){
                console.log(this.$refs.container.innerHTML = "ikun");
            }
        }
    }
</script>
