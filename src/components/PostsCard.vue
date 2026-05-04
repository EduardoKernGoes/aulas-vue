<template>
    <div class="card_post">
        <h2 v-if="qtdPosts>0">{{ qtdPosts }} Posts</h2>
        <h2 v-if="qtdPosts === 0">Não há posts</h2>
        <a v-if="qtdPosts>0" href="/posts" class="btn btn-info">Ver Posts</a>
    </div>
</template>

<script>
    export default {
        name: 'PostsCard',
        props: {
            qtdPosts: {
                type: Number,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .card_post{
        border: 1px solid grey;
        border-radius: 8px;
        padding: 16px;
        margin: 8px;
        height: min-content;
        width: 50%;
    }
</style>