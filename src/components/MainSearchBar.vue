<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<template>
    <section class="search-bar">

        <h2>FILTRA RISULTATI</h2>

        <div class="container flex-center">

            <!-- uantity filter select -->
            <div class="card-uantity-filter">
                <label for="uantity">quantità di carte visualizzate:</label>
                <select class="uantity" v-model="store.numOfEl">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>

            <!-- name filter text input -->
            <div class="name-filter">
                <label for="search">Nome:</label>
                <input @keyup.enter="$emit('onSearch')" class="search" v-model="store.search" type="text"
                    placeholder="Filtra per nome">
            </div>

            <button @click="$emit('onSearch')">Filtra</button>

        </div>

    </section>
</template>

<style lang='scss' scoped>
@use '../style/general.scss' as *;

.search-bar {
    padding: 45px;

    h2 {
        color: coral;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .container {
        justify-content: space-around;

        .name-filter,
        .card-uantity-filter {
            display: flex;
            flex-direction: column;

            label {
                color: coral;
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            input {
                width: 150px;
            }
        }

        button {
            padding: 5px 10px;
            background-color: coral;
            border-radius: 5px;
            border: none;
            align-self: flex-end;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>