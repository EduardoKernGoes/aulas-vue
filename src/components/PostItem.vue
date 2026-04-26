<template>
    <div class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <button @click="clique()">mostra ID</button>
    </div>
    <hr>
</template>

<script>
    export default{
        name: 'PostItem',
        props: {
            post: Object,
        },
        methods: {
            clique(){
                alert('ID do post: ' + this.post.id)
            }
        }
    }
</script>

<style scoped>
</style>