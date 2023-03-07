import { reactive } from 'vue'

const store = reactive({
    gameCards: [],
    search: '',
    numOfEl: 20,
    error: false,
})

export default store