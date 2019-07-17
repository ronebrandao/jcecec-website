import axios from 'axios';

const API_URL = "https://viacep.com.br/ws/";

export interface Address {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}

export function getAdress(cep: string): Promise<Address> {
    return axios.get(`${API_URL}${cep}/json`)
                .then(res => res.data as Address);
}
