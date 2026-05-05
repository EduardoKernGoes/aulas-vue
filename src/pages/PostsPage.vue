<template>
    <div v-if="!loading">
        <h1>Página de posts</h1>
        <a href="/" class="d-block">Voltar</a>
        <PostItem @like="like" @comments="comments"
            v-for="p in visiblePosts" :key="p.id"
            :post="p" :user="searchUser(p)"
        />
        <span class="text-center d-block">{{ visiblePosts.length }} de {{ allPosts.length }}</span>
        <button @click="togglePosts" class="btn btn-primary btn-lg mx-auto d-block">
            <span v-if="!allLoaded">Ver mais</span>
            <span v-if="allLoaded">Fechar</span>
        </button>
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
                limit: 5,
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
        computed: {
            allPosts(){
                return this.posts;
            },
            visiblePosts(){
                return this.allPosts.slice(0, this.limit);
            },
            allLoaded() {
                return this.limit >= this.allPosts.length && this.allPosts.length > 0;
            }
        },
        methods: {
            like(id){
                const post = this.posts.find((p) => p.id == id);
                if (!post.like){
                    post.like = true
                }else(
                    post.like = false
                )
            },

            comments(id){
                const post = this.posts.find((p) => p.id == id);
                if (!post.comments){
                    post.comments = true
                }else(
                    post.comments = false
                )
            },

            searchUser(post){
                return this.users.find(user => user.id === post.userId);
            },

            togglePosts(){
                if(this.allLoaded){
                    this.limit = 5;
                }else{
                    this.limit += 10;
                }
            }
        },
    }
</script>
    
<style scoped>
</style>