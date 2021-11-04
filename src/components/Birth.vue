<template> 
    <div class="info">
        <slot name='bibliography'></slot>
        <!--<p class="important">{{fullname}}</p>
        <p><span>next Birth day:</span> <span class="important">{{`${date} ${month} ${new Date().getFullYear()+1}`}}</span></p>
        <p class="important">less than {{deadline}} Days.</p>-->
    </div>
    <div>
        <slot name='clear'></slot>
        <!--<p class="delete"><span><ion-icon name="close-outline" @click="$emit('remove')"></ion-icon></span></p>-->
    </div>
</template>

<script>
    export default {
        name: "Birth",
        //props: ['fullname','deadline','date','month'],
        //emits:['remove']
    }
</script>

<style scoped>
    /* article{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        margin-bottom: 1px;
    } */
    .info{
        padding: 20px;
        box-shadow: 1px 1px 10px #000;
    }
    .important{
        /* padding: 5px 10px; */
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