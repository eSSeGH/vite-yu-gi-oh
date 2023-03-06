import { reactive } from 'vue'

const store = reactive({
    gameCards: [],
    search: '',
    error: false,
})

export default store