<template> 
    <div class="info">
        <slot name='bibliography'></slot>
    </div>
    <div>
        <slot name='clear'></slot>
    </div>
</template>

<script>
    export default {
        name: "Birth",
    }
</script>

<style scoped>
    .info{
        padding: 20px;
        box-shadow: 1px 1px 10px #000;
    }
    .important{
        padding: 10px 7px 5px 7px;
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