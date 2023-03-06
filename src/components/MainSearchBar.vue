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

        <div class="container">

            <div class="name-filter">
                <label for="search">Nome:</label>
                <input class="search" v-model="store.search" @keyup.enter="$emit('onSearch')" type="text"
                    placeholder="Filtra per nome">
            </div>

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

        .name-filter {
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

    }
}
</style>