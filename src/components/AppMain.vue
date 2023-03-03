<script>
import axios from 'axios';
import MainCard from './MainCard.vue';
import store from '../store'

export default {
    components: {
        MainCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchGameCard() {
            console.log("fetching...")

            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=3640')
                .then((res) => {
                    console.log(res)
                    console.log(res.data)
                    console.log(res.data.data)
                    console.log(res.data.data[0].name)

                    this.store.gameCards = res.data.data
                    console.log(this.store.gameCards)
                })
        }
    },
    created() {
        this.fetchGameCard()
    }
}
</script>

<template>
    <main>

        <div class="container">

            <MainCard v-for="(card, i) in store.gameCards" :key="i" class="col" :card="card">

            </MainCard>

        </div>

    </main>
</template>

<style lang='scss' scoped>
@use '../style/general.scss' as *;

main {
    background-color: rgba(0, 0, 0, 0.95);
    padding: 50px;

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .col {
            width: calc(100%/5 - 15px*4/5);


            .card {
                display: flex;
                flex-direction: column;
                gap: 20px;
                background-color: coral;
                height: 100%;

                h3 {
                    color: black;
                    font-size: 1.2rem;
                }

                span {
                    font-size: 1rem;
                    color: red;
                    margin-top: auto;
                }
            }
        }
    }
}
</style>