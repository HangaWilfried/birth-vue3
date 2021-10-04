<template>
    <main>
        <Header :totalOfBirth="someOfBirth" />
        <Main @addBirthDay="addToBirthDayList" />
        <Footer :items="Births" />
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
        setup(prop) {
            const Births = ref([])
            function addToBirthDayList(obj){
                Births.value.push(obj)
                console.log(Births.value);
            }
            const someOfBirth = computed(()=>{
                return Births.value.length;
            })
            return{
                Births,
                addToBirthDayList,
                someOfBirth
            }
        }
    }
</script>
