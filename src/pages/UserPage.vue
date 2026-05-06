<template>
    <div v-if="!loading">
        <h1>Perfil de {{ user.username }}</h1>
        <a v-if="lastPage === 'albums'" href="/albuns">Voltar</a>
        <a v-if="lastPage === 'posts'" href="/posts">Voltar</a>
        <div class="container mx-5 my-3">
            <h3>Nome: {{ user.name }}</h3>
            <h3>E-mail: {{ user.email }}</h3>
            <h3>
                Endereço: {{ user.address.suite }} da rua {{ user.address.street }}, {{ user.address.city }}. CEP: {{ user.address.zipcode }}
            </h3>
            <h3>Telefone: {{ user.phone }}</h3>
            <h3>Porfólio: {{ user.website }}</h3>
            <h3>Empresa:</h3>
            <div class="ms-5">
                <h4>Nome: {{ user.company.name }}</h4>
                <h4>Bordão: {{ user.company.catchPhrase }}</h4>
                <h4>Ramo: {{ user.company.bs }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import { getItems } from '../services/Index';


    export default {
        name: 'UserPage',
        props: ['id', 'lastPage'],
        data(){
            return{
                user: Object,
                loading: true,
            }
        },
        mounted(){
            Promise.all([
                getItems('users'),
            ])
            .then(([users]) => {
                users.forEach(user => {
                    if(user.id == this.id){
                        this.user = user
                    }
                });
                this.loading = false;
            })
            .catch((error) => {
                console.error("Erro ao carregar dados:", error);
                this.loading = false;
            });  
        }
    }
</script>

<style scoped>
</style>