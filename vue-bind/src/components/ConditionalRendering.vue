<template>
    <h3>条件渲染</h3>
    <div v-if="flag">v-if可变显示</div>
    <div v-else>上面不显示则这条显示，上面显示则此条不显示</div>
    <!-- v-if/v-else -->
    <div v-if="tyep == 'A'">第A条显示</div>
    <div v-else-if="type == 'B'">第B条显示</div>
    <div v-else-if="type == 'C'">第C条显示</div>
    <div v-else-if="type == 'D'">第D条显示</div>
    <!-- ==用于比较两者是否相同，会自动转换数据类型
        ===用于严格比较两者是否相同，除了判断值是否相同外，还会判断数据类型是否相等
        v-if中只能使用===-->
    <div v-show="flag">只能判定自己这条是否显示</div>
    <!-- 频繁切换使用v-show（初始化开销较大，切换开销小） -->
</template>

<script>
    export default {
        data() {
            return{
                flag:true,
                type:"D",
            }
        }
    }
</script>