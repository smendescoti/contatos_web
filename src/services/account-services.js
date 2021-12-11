import axios from 'axios';

//função para guardar o endereço do servidor da API
export const getApiUrl = () => {
    return "http://projetocontatos1-001-site1.itempurl.com";
}

//função para executar uma chamada POST para o serviço
//de cadastro de conta de usuário na API
export const postRegister = (data) => {
    //utilizando o AXIOS para fazer a requisição POST
    return axios.post(getApiUrl() + "/api/Account/Register", data)
        .then( //capturando o promisse (retorno) da API
            //devolvendo o retorno para o componente
            response => {
                return response.data;
            }
        )
}