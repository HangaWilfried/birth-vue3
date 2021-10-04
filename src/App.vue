<template>
    <main>
        <Header :totalOfBirth="someOfBirth" />
        <Main @addBirthDay="addToBirthDayList" />
        <Footer :items="listOfBirthDay" />
    </main>
</template>

<script>
    import Header from "./components/Header.vue";
    import Main from "./components/Main.vue";
    import Footer from "./components/Footer.vue";
    import { computed,ref } from 'vue'
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
            }
            
            const someOfBirth = computed(()=>{
                return listOfBirthDay.value.length;
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
