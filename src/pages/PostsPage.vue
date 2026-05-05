<template>
    <div v-if="!loading">
        <h1>Página de posts</h1>
        <a href="/" class="d-block">Voltar</a>
        <PostItem @like="deuLike"
            v-for="p in posts" :key="p.id"
            :post="p" :user="searchUser(p)"
        />
    </div>
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
                users: Array,
                loading: true,
            }
        },
        mounted() {
            Promise.all([
                getItems('posts'),
                getItems('users'),
            ])
            .then(([recivePosts, reciveUsers]) => {
                this.posts = recivePosts;
                this.users = reciveUsers;
                this.loading = false;
            })
            .catch((error) => {
                console.error("Erro ao carregar dados:", error);
                this.loading = false;
            });            
        },
        methods: {
            deuLike(id){
                const post = this.posts.find((p) => p.id == id);
                if (post){
                    post.like = true
                }
            },

            searchUser(post){
                return this.users.find(user => user.id === post.userId);
            }
        },
    }
</script>
    
<style scoped>
</style>