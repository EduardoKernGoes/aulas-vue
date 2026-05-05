function getItems(item){
    let link = "";

    switch(item){
        case 'posts':
            link = 'https://jsonplaceholder.typicode.com/posts'
            break;

        case 'albums':
            link = 'https://jsonplaceholder.typicode.com/albums'
            break;
        
        case 'photos':
            link = 'https://jsonplaceholder.typicode.com/photos'
            break;

        case 'users':
            link = 'https://jsonplaceholder.typicode.com/users'
            break;
    }
    
    return new Promise((resolve, reject) => {

        fetch(link)
        .then((response) => {
            response.json()
            .then((dados) => {
                resolve(dados);
            })
        })
        .catch((erro) => {
            console.log.error('Error fetching posts: ', erro)
            reject(error);
        })

    });
}

export { getItems };