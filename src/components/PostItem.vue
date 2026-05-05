<template>
    <div class="mb-2 mt-4">
        <i class="bi bi-person-circle"></i><h3 class="d-inline ms-2">{{ user.name }}</h3>
    </div>
    <div class="post-item">
        <div class="mx-5">
            <h2>Titulo: {{ post.title }}</h2>
            <p>{{ post.body }}</p>
            <p v-if="post.like">Recebeu um like</p>
            <button @click="clique()" class="btn btn-primary">Dar like</button>
        </div>
    </div>
    <hr>
</template>

<script>
    import { getItems } from '../services/Index';
    export default{
        name: 'PostItem',
        emits: ['like'],
        props: {
            post: Object,
            user: String,
        },
        methods: {
            clique(){
                this.$emit('like', this.post.id)
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>
    .post-item{
        background:rgb(200, 200, 200);
        padding: 20px;
        margin: 0 30px;
        border-radius: 5px;
        border: 1px solid rgb(150, 150, 150);
    }

    i{
        font-size: 1.5rem;
    }
</style>