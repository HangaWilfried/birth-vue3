<template>
    <main>
        <Header :totalOfBirth="someOfBirth" />
        <Main @addBirthDay="addToBirthDayList" />
        <section>
            <article v-for="(item, index) in listOfBirthDay" :key="index" v-bind:style="{backgroundColor: item.randColor, color: '#fff'}">
                <Footer :items="listOfBirthDay" :index="index" :fullname="item.fullname"
                 :deadline="item.deadline" :date="item.birth.date" :month="item.birth.month"/>
            </article>
        </section>
    </main>
</template>

<script>
    import Header from "./components/Header.vue";
    import Main from "./components/Main.vue";
    import Footer from "./components/Footer.vue";
    import { computed,ref,onBeforeMount } from 'vue'
    export default {
        name: 'App',
        components: {
            Header,
            Main,
            Footer,
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
            return{
                listOfBirthDay,
                addToBirthDayList,
                someOfBirth,
                flag
            }
        }
    }
</script>

<style scoped>
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