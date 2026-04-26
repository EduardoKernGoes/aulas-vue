<template>
    <h1>Página de posts</h1>
    <a href="/">Voltar</a>
    <PostItem
        v-for="p in posts" :key="p.id"
        :post="p"
    />
</template>

<script>
    import PostItem from '../components/PostItem.vue'
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
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            response.json()
            .then((dados) => {
                this.posts = dados
            })
        })
        .catch((erro) => {
            console.log.error('Error fetching posts: ', erro)
        })
        },
    }
</script>
    
<style scoped>
</style>