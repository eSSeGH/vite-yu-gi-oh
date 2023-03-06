<script>
import axios from 'axios';

export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">

        <img :src="card.card_images[0].image_url" alt="">

        <h3>{{ card.name }}</h3>

        <span>{{ card.archetype }}</span>

    </div>
</template>

<style lang='scss' scoped>
@use '../style/general.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: coral;
    height: 400px;

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
</style>