<template>
    <div class="postsAlbums">
        
        <PostsCard :qtdPosts = "nPosts"/>
        
        <AlbumsCard :qtdAlbums = "nAlbums" />
        
    </div>
</template>

<script>
    import PostsCard from '../components/PostsCard.vue'
    import AlbumsCard from '../components/AlbumsCard.vue'
    import { getItems } from '../services/Index.js'
    export default{
        name: 'HomePage',
        components: {
            PostsCard,
            AlbumsCard,
        },
        data() {
            return{
                nPosts: 0,
                nAlbums: 0,
            }
        },
        mounted() {
            getItems('posts')
            .then((dados) => {
                this.nPosts = dados.length;
            })
            .catch((error) => {
                console.log(error);
            });

            getItems('albums')
            .then((dados) => {
                this.nAlbums = dados.length;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
</script>

<style>
 .postsAlbums{
    display: flex;
    width: 70%;
    margin: 0 auto;
 }
</style>