import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai';
import {Hero, Video, Conteudo, VideoGrid} from './styles';

import Comparativo from '../../components/Comparativo';

export default function Main(){

    return (
        <>
            <Hero>
                <h1>5G Sustentável</h1>
                <p>O futuro da telecomunicação móvel e da Sustentabilidade!</p>
            </Hero>

            <Comparativo/>

            <Video>
                <h2>Vídeos</h2>

                <VideoGrid>
                    <div>
                        <a href="https://youtu.be/tqeC-cCIUTk" target="_blank" rel="noopener noreferrer"><article></article><AiFillPlayCircle size={65}/><p></p></a>
                        <a href="https://youtu.be/hGoCbAw5IsM" target="_blank" rel="noopener noreferrer"><article></article><AiFillPlayCircle size={65} color="#fff"/><p></p></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><article></article><AiFillPlayCircle size={65} color="#fff"/><p></p></a>
                    </div>
                </VideoGrid>

            </Video>

            <Conteudo>
                <h2>A Tecnologia 5G e a sustentabilidade</h2>
                <hr></hr>
                <p>O 5G é a próxima geração de rede de dados sem fio e será capaz de fornecer 100 vezes mais velocidade de internet do que o 4G.  De fato, o 5G trará  novas formas de serviços, incluindo tudo, desde monitorar remotamente o uso da  agua nas fazendas até  realizar remotamente cirurgias cerebrais, Devido a sua baixíssima latência.</p>

                <p>A capacidade da 5G de conectar bilhões de sensores e dispositivos fornecerá novas idéias sobre os complexos problemas modernos que enfrentamos continuamente.</p>

                <p>O 5G representa uma oportunidade para repensar a organização da sociedade, a fim de apoiar abordagens sustentaveis para a vida.</p>

                <Link to="/informacoes"> </Link>
            </Conteudo>
        </>
    );
}
