// Método GET - API Github
const getUsersGithub = (usuario) => {
    // link api
    const LINK = 'https://api.github.com/users/';

    // método fetch
    fetch((LINK + usuario))
        .then((response) => {
            // retornando dados formato JSON
            const request = response.json();
            request.then((dados) => {
                //console.log("DADOS FORMATO JSON:", dados);
                const DADOS_USUARIO_GITHUB = dados;
                // salvando dados localstorage
                localStorage.setItem('dadosUsuarioGithub', JSON.stringify(DADOS_USUARIO_GITHUB));
            })
        })
        .catch((reject) => {
            console.log(`ERROR: ${reject}`);
        })
}

export default getUsersGithub;
