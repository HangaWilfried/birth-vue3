import {computed} from 'vue'

export default function getCurrentYear(){
    const currentYear = computed(() => new Date().getFullYear()+1)
    return {currentYear}
}