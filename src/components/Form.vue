<template>
    <div>
        <input type="text" placeholder="last name" v-model="lastName">
        <input type="text" placeholder="first name" v-model="firstName">
        <input type="date" v-model="dateOfBirth">
        <button @click.prevent="add">complete</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: "Form",
        setup(props, context){
            const lastName = ref('')
            const firstName = ref('')
            const dateOfBirth = ref('')
            const months = ref(['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'])
            const dayOfWeek = ref(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'])
            const availableColors = ref(['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80'])
            
            const getRandomColor = () => availableColors.value[ Math.floor( Math.random() * 11 ) ]
        
            const getRemaining = ()=> {
                const CONVERT_TO_DAYS = 86400000
                const guessDate = new Date(`${dateOfBirth.value}`);
                const refereeTime = new Date();
                
                refereeTime.setDate(guessDate.getDate())
                refereeTime.setMonth(guessDate.getMonth())
                refereeTime.setFullYear(new Date().getFullYear()+1)
                
                const guessDay =  refereeTime.getDate()
                const guessMonth =  refereeTime.getMonth()
                const guessYear =  refereeTime.getFullYear()
                const now = new Date();
                const today = new Date(`${now.getFullYear()},${now.getMonth()},${now.getDate()}`)
                const nextBirthday = new Date(`${guessYear},${guessMonth},${guessDay}`)
                
                return Math.floor(( nextBirthday - today ) / CONVERT_TO_DAYS);
            }
            
            const add = () => {
                context.emit('addBirthday', {
                    fullName: `${lastName.value} ${firstName.value}`,
                    birth: {
                        day: dayOfWeek.value[new Date(`${dateOfBirth.value}`).getDay()],
                        date: new Date(`${dateOfBirth.value}`).getDate(),
                        month: months.value[new Date(`${dateOfBirth.value}`).getMonth()],
                        year: new Date(`${dateOfBirth.value}`).getFullYear()
                    },
                    randColor: getRandomColor(),
                    remaining: getRemaining()
                })
            }

            return{
                getRandomColor,
                getRemaining,
                add,
                lastName,
                firstName,
                dateOfBirth,
                dayOfWeek,
                months,
                availableColors
            }
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: #a3a3e5;
        padding: 50px 30px;
        align-items: center;
    }
    div input{
        width: 300px;
        height: 30px;
        border-radius: 3px;
        border: none;
        color: #3f3fab;
        padding: 7px;
        font-size: 12px;
    }
    div input:focus{
        outline: none;
        color: #000;
        font-size: 16px;
        font-family: 'poppins';
        border: none;
    }
    button{
        font-size: 14px;
        width: 200px;
        height: 35px;
        border-radius: 3px;
        border: 1px solid rgb(233, 228, 228);
        background-color: rgb(223, 228, 228);
        color: #fff;
        padding: 5px 10px;
    }
    button:hover{  
        border: 1px solid #ccc;
        background-color: #ccc;
    }
</style>