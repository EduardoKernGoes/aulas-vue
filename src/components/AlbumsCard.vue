<template>
    <div class="card_album">
        <h2 v-if="qtdAlbums>0">{{ qtdAlbums }} Albuns</h2>
        <h2 v-if="qtdAlbums === 0">Não há albuns</h2>
        <a v-if="qtdAlbums>0" href="/albuns" class="btn btn-info">Ver Albuns</a>
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
    .card_album{
        border: 1px solid grey;
        border-radius: 8px;
        padding: 16px;
        margin: 8px;
        height: min-content;
        width: 50%;
    }
</style>