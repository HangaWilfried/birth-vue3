<template>
    <main>
        <Header>
            <h5>added - {{countBirthdays}}</h5>
        </Header>
        <Form @addBirthday="addNewBirthday" />
        <section>
            <article v-for="(birthday, index) in birthdays" :key="index" v-bind:style="{backgroundColor: birthday.randColor, color: '#fff'}">
                <Birth>
                    <template #bibliography>
                        <p class="important">{{birthday.fullName}}</p>
                        <p>
                            <span>next Birth day:</span>
                            <span class="important">{{`${birthday.birth.date} ${birthday.birth.month} ${currentYear}`}}</span>
                        </p>
                        <p class="important">less than {{birthday.remaining}} Days.</p>
                    </template>
                    
                    <template #clear>
                        <p class="delete">
                            <span>
                                <ion-icon name="close-outline" @click="deleteBirthday(index)"></ion-icon>
                            </span>
                        </p>
                    </template>
                </Birth>
            </article>
        </section>

        <!--<teleport to='body'/>
            you can join <a href="mailto:wilfriedhanga5@gmail.com">wilfried hanga</a> here...
        </teleport>  --> 
    </main>
</template>

<script>
    import Header from "./components/Header.vue";
    import Form from "./components/Form.vue";
    import Birth from "./components/Birth.vue";
    import { computed, ref, onBeforeMount } from 'vue'
    import getCurrentYear from './composable/reusableYear.js'
    export default {
        name: 'App',
        components: {
            Header,
            Form,
            Birth,
        },
        setup() {
            const {currentYear} = getCurrentYear()
            const birthdays = ref([])
            let alreadyAdded = ref(false);
            const addNewBirthday = obj => {
                alreadyAdded.value = birthdays.value.some( item => item.fullName == obj.fullName);  
                if( typeof obj.fullName == 'undefined' || typeof obj.birth.date == 'null' || typeof obj.birth.month == 'undefined') {
                    alert('veuillez remplir les champs incomplets')
                }
                else if(alreadyAdded.value == true){
                    alert('deja renseigne')
                }
                else{
                    birthdays.value.push(obj)
                }

                localStorage.setItem('value', JSON.stringify(birthdays.value))
            }
            
            const countBirthdays = computed(()=>{
                return birthdays.value.length;
            })
            onBeforeMount(()=>{
                  if(localStorage.getItem('value'))
                    birthdays.value = JSON.parse(localStorage.getItem('value'))
            })
            const deleteBirthday = index =>{
                birthdays.value.splice(index, 1);
                localStorage.setItem('value',JSON.stringify(birthdays.value));
            } 
            return{
                birthdays,
                addNewBirthday,
                countBirthdays,
                alreadyAdded,
                deleteBirthday,
                currentYear
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