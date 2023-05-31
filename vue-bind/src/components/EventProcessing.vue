<template>
    <h3>内联事件处理器</h3>
    <button v-on:click="count1++" style="width:50px">Add</button>
    <button @click="count1--" style="width:50px">minus</button>
    <!-- v-on:可以简写为@ -->
    <p>{{ count1 }}</p>

    <h3>方法事件处理器</h3>
    <button v-on:click="addCount" style="width:50px">Add</button>
    <button @click="minusCount" style="width:50px">minus</button>
    <!-- v-on:可以简写为@ -->
    <p>{{ count2 }}</p>

    <h3>事件传参</h3>
    <p @click="getNameHandler(item,$event)" v-for="(item,index) in names" :key="index">{{ item }} {{ index }}</p>
    <!-- 把item当成参数传给事件，如果想继续传event参数则加上$符号 -->

    <h3>事件修饰符阻止默认事件发生</h3>
    <a @click.prevent="clickHandle" href="https://github.com/Portssssss/Vue-projects">Portsss的Vue项目</a>
    <!-- click.prevent事件修饰符代替函数里面的e.preventDefault -->

    <h3>事件修饰符阻止冒泡事件发生</h3>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡事件</p>
        <!-- click.stop事件修饰符阻止冒泡事件发生 -->
    </div>
</template>

<script>
    export default {
        data(){     
            return{
                count1:0,
                count2:0,
                names:["ikun","ime","idan"],
                citys:["小樽","札幌","熊本"]
            }
        },
        //所有的函数和方法都放methods里面
        methods:{
            addCount(e){
                console.log(e.target);
                //通过event对象获取button按钮
                e.target.innerHTML = "Add" + this.count2;
                //通过event对象实现对button按钮值得更改,innerHTML属性允许更改html元素的内容（innerText不识别html标签,去除空格和换行，innerHTML保留html标签同时包括空格和换行）
                this.count2 += 1;
                //所有写在return里面的数据都可以通过this获取
            },
            minusCount(){
                this.count2 -=1;
            },
            getNameHandler(name,e){
                console.log(name);
                console.log(e);
            },
            clickHandle(e){
                //通过event参数获取事件本身，并阻止a标签的默认事件（即网页跳转）
                //e.preventDefault();
                console.log("点击了");
            },
            clickDiv(){
                console.log("DIV");
            },
            clickP(e){
                //阻止冒泡事件
                //e.stopPropagation();
                console.log("P");
            }
            //1.prevent：阻止默认事件
            //2.stop：阻止事件冒泡（常用）
            //3.once：事件只触发一次（常用）
            //4.capture：使用事件的捕获模式；
            //5.self：只有event.target是当前操作的元素时才触发事件
            //6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕

        }
    }
</script>