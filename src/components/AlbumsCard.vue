<template>
    <div class="card">
        <h2 v-if="qtdAlbums>0">{{ qtdAlbums }} Albuns</h2>
        <h2 v-if="qtdAlbums === 0">Não há albuns</h2>
        <a v-if="qtdAlbums>0" href="/albuns">ver albuns</a>
    </div>
</template>

<script>
    export default {
        name: 'AlbumsCard',
        props: {
            qtdAlbums: {
                type: Number,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .card{
        border: 1px solid grey;
        border-radius: 8px;
        padding: 16px;
        margin: 8px;
        height: 100px;
        width: 50%;
    }
</style>