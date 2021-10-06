<template>
    <div>
        <input type="text" placeholder="last name" v-model="lastname">
        <input type="text" placeholder="first name" v-model="firstname">
        <input type="date" v-model="fullbirth">
        <button @click.prevent="saveBirthInfo">complete</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: "Form",
        setup(props, context){
            let lastname = ref(''),
            firstname = ref(''),
            fullbirth = ref(''),
            month = ref(['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']),
            day = ref(['Sun','Mon','Tue','Wed','Thu','Fri','Sat']),
            colors = ref(['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80']);
            
            function getRandomColor() {
                return colors.value[Math.floor(Math.random() * (11 - 0)) + 0]
            }
            function getDeadLine(){
                let givenDate = new Date(`${fullbirth.value}`);
                let time1 = new Date();
                time1.setDate(givenDate.getDate());
                time1.setMonth(givenDate.getMonth());
                time1.setFullYear(new Date().getFullYear()+1);
                let givenDay = time1.getDate(),
                      givenMonth = time1.getMonth(),
                      givenYear = time1.getFullYear();
        
        
                let time2 = new Date();
                let currentDate = new Date(`${time2.getFullYear()},${time2.getMonth()},${time2.getDate()}`)
        
                let futureBirth = new Date(`${givenYear},${givenMonth},${givenDay}`)
                let deadline =  futureBirth - currentDate
                return Math.floor(deadline/(24*3600000));
            }
            
            function saveBirthInfo(){
                context.emit('addBirthDay', {
                    fullname: `${lastname.value} ${firstname.value}`,
                    birth: {
                        day: day.value[new Date(`${fullbirth.value}`).getDay()],
                        date: new Date(`${fullbirth.value}`).getDate(),
                        month: this.month[new Date(`${fullbirth.value}`).getMonth()],
                        year: new Date(`${fullbirth.value}`).getFullYear()
                    },
                    randColor: getRandomColor(),
                    deadline: getDeadLine()
                })
            }


            
            return{
                getRandomColor,
                getDeadLine,
                saveBirthInfo,
                lastname,
                firstname,
                fullbirth,
                month,
                day,
                colors
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