import axios from 'axios';

const API_CEP_URL = "https://viacep.com.br/ws/";
const API_STATE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

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

export interface Estado {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
  }

export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export interface Cidade {
    id: number;
    nome: string;
}


export function getAdress(cep: string): Promise<Address> {
    return axios.get(`${API_CEP_URL}${cep}/json`)
                .then(res => res.data as Address);
}

export function getStates(): Promise<Estado[]> {
    return axios.get(API_STATE_URL)
                .then(res => res.data as Estado[]);
}

export function getCities(state: number): Promise<string[]> {
    return axios.get(`${API_STATE_URL}/${state}/municipios`)
                .then(res => res.data as Cidade[])
                .then(cidades => cidades.map(cidade => cidade.nome));
}
