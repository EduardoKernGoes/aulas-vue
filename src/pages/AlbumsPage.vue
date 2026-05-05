<template>
    <div v-if="!loading">
        <h1>Página de albuns</h1>
        <a href="/">Voltar</a>
        <AlbumItem
            v-for="a in albums" :key="a.id"
            :album="a" :user="searchUser(a)"
        />
    </div>
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
                users: Array,
                loading: true,
            }
        },
        mounted() {
            Promise.all([
                getItems('albums'),
                getItems('users'),
            ])
            .then(([reciveAlbums, reciveUsers]) => {
                this.albums = reciveAlbums
                this.users = reciveUsers

                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        methods: {
            searchUser(album){
                console.log(this.users)
                return this.users.find(user => user.id === album.userId);
            }
        },
    }
</script>
    
<style scoped>
</style>