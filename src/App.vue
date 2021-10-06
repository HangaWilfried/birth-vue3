<template>
    <main>
        <Header :totalOfBirth="someOfBirth" />
        <Form @addBirthDay="addToBirthDayList" />
        <section>
            <article v-for="(item, index) in listOfBirthDay" :key="index" v-bind:style="{backgroundColor: item.randColor, color: '#fff'}">
                <Birth :fullname="item.fullname" :deadline="item.deadline" :date="item.birth.date" :month="item.birth.month" @remove="deleteFromItem(index)"/>
            </article>
        </section>

        <div>
            you can join <a href="mailto:wilfriedhanga5@gmail.com">wilfried hanga</a> here...
        </div>   
    </main>
</template>

<script>
    import Header from "./components/Header.vue";
    import Form from "./components/Form.vue";
    import Birth from "./components/Birth.vue";
    import { computed,ref,onBeforeMount } from 'vue'
    export default {
        name: 'App',
        components: {
            Header,
            Form,
            Birth,
        },
        setup() {
            const listOfBirthDay = ref([])
            let flag = ref(false);
            function addToBirthDayList(obj){
                listOfBirthDay.value.some(item => flag.value = item.fullname == obj.fullname); 
                if(flag.value == false){
                   listOfBirthDay.value.push(obj); 
                }    
                else{
                    alert('deja renseigne')
                }
                localStorage.setItem('value', JSON.stringify(listOfBirthDay.value))
            }
            
            const someOfBirth = computed(()=>{
                return listOfBirthDay.value.length;
            })
            onBeforeMount(()=>{
                  if(localStorage.getItem('value'))
                    listOfBirthDay.value = JSON.parse(localStorage.getItem('value'))
            })
            const deleteFromItem = index =>{
                listOfBirthDay.value.splice(index, 1);
                localStorage.setItem('value',JSON.stringify(listOfBirthDay.value));
            } 
            return{
                listOfBirthDay,
                addToBirthDayList,
                someOfBirth,
                flag,
                deleteFromItem
            }
        }
    }
</script>

<style scoped>
    div{
        margin-top: 30px;
        color: rgb(247, 156, 52);
    }
    div a{
        text-decoration: underline;
        color: rgb(218, 150, 5);
    }
    section{
        display: block;
    }
    article{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        margin-bottom: 1px;
    } 
    @media only screen and (min-width: 925px) {
        section{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 2px;
            padding: 30px;
            justify-content: space-between;
        }
        article{
            display: block;
            margin: 2px;
            padding: 20px;
            gap: 10px 50px;
        }
    }
</style>