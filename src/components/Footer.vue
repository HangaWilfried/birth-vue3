<template>
    <article v-for="(item, index) in items" :key="index" v-bind:style="{backgroundColor: item.randColor, color: '#fff'}">
        <div class="info">
            <p class="important">{{item.lastname}} {{item.firstname}}</p>
            <p><span>next Birth day:</span> <span class="important">{{`${item.birth.date} ${item.birth.month} ${new Date().getFullYear()+1}`}}</span></p>
            <p class="important">less than {{item.deadline}} Days.</p>
        </div>
        <div>
            <p class="delete"><span @click="deleteFromItem(index)">x</span></p>
        </div>
    </article>
</template>

<script>
    import { toRefs } from 'vue'
    export default {
        name: "Footer",
        props: {
            items: Array
        },
        setup(props){
            const { items } = toRefs(props)
            function  deleteFromItem(index) {
                items.value.splice(index, 1);
            }
            return{
                items,
                deleteFromItem
            }
        }
    }
</script>

<style scoped>
    article{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        margin-bottom: 1px;
    }
    .info{
        padding: 20px;
        box-shadow: 1px 1px 10px #000;
    }
    .important{
        padding: 5px 10px;
        color: #000;
        background-color: #fff;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
    }
    .delete span{
        font-size: 30px;
        font-family: 'Poppins', sans-serif;
    }
    .delete span:hover{
        cursor: pointer;
    }
</style>