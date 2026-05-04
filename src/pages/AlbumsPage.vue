<template>
    <h1>Página de albuns</h1>
    <a href="/">Voltar</a>
    <AlbumItem
        v-for="a in albums" :key="a.id"
        :album="a"
    />
</template>

<script>
    import AlbumItem from '../components/AlbumItem.vue';
    import { getItems } from '../services/Index.js';
    export default{
        name: 'AlbumsPage',
        components: {
            AlbumItem,
        },
        data(){
            return{
                albums: Array,
            }
        },
        mounted() {
            getItems('albums')
            .then((dados) => {
                this.albums = dados;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
</script>
    
<style scoped>
</style>