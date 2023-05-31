<template>
    <h3>列表渲染</h3>
    <p v-for="item in citys">{{ item }}</p>
    <p v-for="(item,index) in citys">{{ item }} {{ index }}</p>
    <!-- 数组下标也显示出来 -->
    <p v-for="item of info">{{ item }}</p>
    <!-- 遍历单个对象用in，数组中有多条用for -->
    <p v-for="(item,key,index) of info">{{ item }}-{{ key }}-{{ index }}</p>
    <!-- v-for遍历,三个参数位置不能修改 -->
    <div v-for="item in result">
        <p>{{ item.city }}</p>
        <!-- item代表一个完整的对象，在result中即一个{}中的所有元素，city表示选中item中的city元素 -->
        <img :src="item.avator" alt="" style=" height:300px; width:500px">
        <!-- :src动态绑定，否则avator就是个字符串 -->
    </div>
    <h3>Key属性添加到v-for中</h3>
    <p v-for="(item,index) in citys" :key="index">{{ item }}</p>
    <!-- 防止就地更新，节省开销，代码效果上没有区别 -->
    <div v-for="item in result" :key="item.id">
        <p>{{ item.city }}</p>
        <img :src="item.avator" alt="" style=" height:300px; width:500px">
    </div>
    <!-- 常见的数据格式可以使用唯一索引id来防止就低更新，数据库中的数据都有唯一索引 -->
</template>

<script>
    export default {
        data(){
            return{
                citys:["大连","沈阳","洛阳","郑州"],
                result:[{
                    "id":123,
                    "city":"札幌雪景｜一封来自北海道的情书",
                    "avator":"https://p0.ifengimg.com/pmop/2017/1227/CD163398D24B0C6D0D71C41CB0E497110ECCD7D3_size242_w1280_h853.jpeg",
                },
                {
                    "id":124,
                    "city":"京都清水寺|一个足以代表京都千年古韵的寺院",
                    "avator":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcca58fed-225e-4a00-b504-0b954554b017%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687938722&t=9adb5cfabe1c11e944057ae1b55ba55c",
                },        
                ],
                info:{
                    name:"ikun",
                    age:20,
                    sex:"男"
                },

                    

                
            }
        }
    }
</script>