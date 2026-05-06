<template>
    <div v-if="!loading">
        <router-link class="mb-2 mt-4 btn not_line" :to="{name: 'user', params: {id: user.id, lastPage: 'posts'}}">
            <i class="bi bi-person-circle"></i><h3 class="d-inline ms-2">{{ user.name }}</h3>
        </router-link>
        <div class="post-item mb-5">
            <div class="mx-3">
                <h2>Titulo: {{ post.title }}</h2>
                <p>{{ post.body }}</p>
                <div class="d-flex justify-content-between">
                    <button @click="cliqueComments()" class="btn btn-primary">
                        <span v-if="!post.comments">Ver Comentários</span>
                        <span v-else>Fechar Comentários</span>
                    </button>
                    <button @click="cliqueLike()" class="btn btn-lg  not_line">
                        <span v-if="!post.like" class="bi bi-hand-thumbs-up"></span>
                        <span v-else class="bi bi-hand-thumbs-up-fill"></span>
                    </button>
                </div>
                <CommentItem
                    v-if="post.comments"
                    v-for="c in allCommentsPost" :key="c.id" :comment="c"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import CommentItem from './CommentItem.vue';
    import {getItems} from '../services/Index';
    export default{
        name: 'PostItem',
        emits: ['like', 'comments'],
        props: {
            post: Object,
            user: String,
        },
        components:{
            CommentItem,
        },
        methods: {
            cliqueLike(){
                this.$emit('like', this.post.id)
            },
            cliqueComments(){
                this.$emit('comments', this.post.id)
            }
        },
        data() {
            return {
                comments: Array,
                loading: true,
            }
        },
        mounted() {
            Promise.all([
                getItems('comments')
            ])
            .then(([comments]) => {
                this.comments = comments;
                this.loading = false;
            })
            .catch((error) => {
                console.error("Erro ao carregar dados:", error);
                this.loading = false;
            });  
        },
        computed: {
            allCommentsPost(){
                return this.comments.filter(c => c.postId === this.post.id)
            }
        }
    }
</script>

<style scoped>
    .post-item{
        background:rgb(200, 200, 200);
        padding: 20px;
        margin: 10px 30px;
        border-radius: 5px;
        border: 1px solid rgb(150, 150, 150);
    }

    i{
        font-size: 1.5rem;
    }

    .not_line{
        border: none;
    }
</style>