import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async  function  listarTodosJogos(){
    const reposta = await api.get('/jogo/consultar');
    return reposta.data;
    
}

export async  function  listarJogosDestaque(){
    const reposta = await api.get('/jogo/consultar/destaque');
    return reposta.data;
   
}

export async function  listarTodosJogosPorNome(nome){
    const reposta = await api.get(`/jogo/busca?nome=${nome}`);
    return reposta.data;
}

export async function deletarJogo(id){
    const reposta = await api.delete(`/jogo/${id}`);
    return reposta.status;
}

export async function buscarJogoPorId(id) {
    const resposta = await api.get(`/admin/cadastro/${id}`);
    return resposta.data;
}

// filtra por genero

export async function filtraGeneroJogo(filtro){
    
    const resposta = await api.get('/jogo/filtro/genero',{
        filtro: filtro
    });
    return resposta.data
}

// filtra plataforma

export async function filtraPlataformaPc(){
    const resposta = await api.get('/jogo/filtro/computador')
    return resposta.data
}

export async function filtraPlataformaGB(){
    const resposta = await api.get('/jogo/filtro/gameboy')
    return resposta.data
}

export async function filtraPlataformaPs5(){
    const resposta = await api.get('/jogo/filtro/ps5')
    return resposta.data
}

export async function filtraPlataformaPs4(){
    const resposta = await api.get('/jogo/filtro/ps4')
    return resposta.data
}

export async function filtraPlataformaPs3(){
    const resposta = await api.get('/jogo/filtro/ps3')
    return resposta.data
}


export async function filtraPlataformaPs2(){
    const resposta = await api.get('/jogo/filtro/ps2')
    return resposta.data
}

export async function filtraPlataformaPs1(){
    const resposta = await api.get('/jogo/filtro/ps1')
    return resposta.data
}

export async function filtraPlataformaXbox(){
    const resposta = await api.get('/jogo/filtro/xbox')
    return resposta.data
}

export async function filtraPlataformaWii(){
    const resposta = await api.get('/jogo/filtro/nintendo wii')
    return resposta.data
}

export async function filtraPlataformaSW(){
    const resposta = await api.get('/jogo/filtro/nintendo switch')
    return resposta.data
}

export async function filtraPlataformaSN(){
    const resposta = await api.get('/jogo/filtro/super nintendo')
    return resposta.data
}

export async function filtraPlataformaAtari(){
    const resposta = await api.get('/jogo/filtro/atari')
    return resposta.data
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}

export async function detalheJogo(id) {
    const resposta = await api.get(`/jogo/${id}`);
    return resposta.data;
}

//////////////////////////////////////

// filtro genero
export async function filtraGeneroAcao(){
    const resposta = await api.get('/jogo/filtro/acao')
    return resposta.data
}

export async function filtraGeneroCasual(){
    const resposta = await api.get('/jogo/filtro/casual')
    return resposta.data
}

export async function filtraGeneroAventura(){
    const resposta = await api.get('/jogo/filtro/aventura')
    return resposta.data
}

export async function filtraGeneroSimulacao(){
    const resposta = await api.get('/jogo/filtro/simulacao')
    return resposta.data
}

export async function filtraGeneroRPG(){
    const resposta = await api.get('/jogo/filtro/rpg')
    return resposta.data
}


// Filtro de Jogos - Parte da Loja

export async function filtrarValorCinquenta() {
    const resposta = await api.get(`/jogo/filtro/valor1`);
    return resposta.data;
}


export async function filtrarValorCem() {
    const resposta = await api.get(`/jogo/filtro/valor2`);
    return resposta.data;
}

export async function filtrarValorDuzentos() {
    const resposta = await api.get(`/jogo/filtro/valor3`);
    return resposta.data;
}

export async function filtrarValorFinal() {
    const resposta = await api.get(`/jogo/filtro/valor4`);
    return resposta.data;
}


export async function  listarGenerosIguais (genero){
    const reposta = await api.post('/jogo/mesmo/genero', {genero : genero});
    return reposta.data;
}