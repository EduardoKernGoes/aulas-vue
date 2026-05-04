<template>
    <div class="post-item">
        <h2>Titulo: {{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p v-if="post.like">Recebeu um like</p>
        <button @click="clique()" class="btn btn-primary">Dar like</button>
    </div>
</template>

<script>
    export default{
        name: 'PostItem',
        emits: ['like'],
        props: {
            post: Object,
        },
        methods: {
            clique(){
                this.$emit('like', this.post.id)
            }
        }
    }
</script>

<style scoped>
    .post-item{
        background:rgb(200, 200, 200);
        padding: 20px;
        margin: 30px;
        border-radius: 5px;
        border: 1px solid rgb(150, 150, 150);
    }
</style>