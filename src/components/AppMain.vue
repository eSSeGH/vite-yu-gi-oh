<script>
import axios from 'axios';
import MainCard from './MainCard.vue';
import MainSearchBar from './MainSearchBar.vue';
import store from '../store';

export default {
    components: {
        MainCard,
        MainSearchBar,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchGameCard() {
            console.log("fetching...", this.store.search)
            this.store.error = false

            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
                params: {
                    fname: this.store.search,
                    num: this.store.numOfEl,
                }
            })
                .then((res) => {
                    this.store.gameCards = res.data.data
                    console.log(this.store.numOfEl)
                })
                .catch((error) => {
                    console.log(error)
                    this.store.gameCards = []
                    this.store.error = true
                    console.log('error detected', gameCards)
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

        <!-- MainSearchBar component -->
        <MainSearchBar @onSearch="fetchGameCard"></MainSearchBar>

        <!-- filter infos and errors -->
        <div class="filter-info flex-center container">
            <h3>Stai filtrando i risultati per:</h3>

            <span>Nome: {{ store.search }}</span>

        </div>
        <div class="error-info" v-if="store.error === true">
            La ricerca non ha prodotto risultati: error 400
        </div>

        <!-- show game cards section -->
        <section class="game-cards">

            <div class="game-cards-container container">

                <MainCard v-for="(card, i) in store.gameCards" :key="i" class="col" :card="card"></MainCard>

            </div>

        </section>

    </main>
</template>

<style lang='scss' scoped>
@use '../style/general.scss' as *;

main {
    background-color: rgba(0, 0, 0, 0.95);
    padding: 50px;
    min-height: calc(100vh - 120px);

    .filter-info.container {
        margin-bottom: 1rem;

        h3 {
            color: coral;
            font-size: 1rem;
        }

        span {
            color: white;
            font-size: 1rem;
            margin-left: 20px;
        }
    }

    .error-info {
        color: red;
        background-color: rgba($color: #ff0000, $alpha: 0.4);
    }

    .game-cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .col {
            width: calc(100%/5 - 15px*4/5);
            height: 400px;
        }
    }
}
</style>