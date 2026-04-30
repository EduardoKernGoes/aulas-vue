<template>
    <div class="album-item">
        <h2>{{ album.title }}</h2>
        <p>{{ album.body }}</p>
        <button @click="clique()">mostra ID</button>
    </div>
    <hr>
</template>

<script>
    export default{
        name: 'AlbumItem',
        props: {
            album: Object,
        },
        methods: {
            clique(){
                alert('ID do album: ' + this.album.id)
            }
        }
    }
</script>

<style scoped>
</style>