<template>
    <h1>Página de posts</h1>
    <PostItem @like="deuLike"
        v-for="p in posts" :key="p.id"
        :post="p"
    />
</template>

<script>
    import PostItem from '../components/PostItem.vue'
    import { getItems } from '../services/Index.js';
    export default{
        name: 'PostsPage',
        components: {
            PostItem,
        },
        data(){
            return{
                posts: Array,
            }
        },
        mounted() {
            getItems('posts')
            .then((dados) => {
                this.posts = dados;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        methods: {
            deuLike(id){
                
                const post = this.posts.find((p) => p.id == id);
                if (post){
                    post.like = true
                }
                
                //alert(`Post com o id: ${id} recebeu um like`)
            }
        },
    }
</script>
    
<style scoped>
</style>