<template>
    <h1>Página de albuns</h1>
    <AlbumItem
        v-for="a in albums" :key="a.id"
        :album="a"
    />
</template>

<script>
    import AlbumItem from '../components/AlbumItem.vue'
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
                console.log(this.albums);
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
</script>
    
<style scoped>
</style>