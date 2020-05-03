import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaCaretUp} from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import {Hero, Video, Conteudo, Footer, RedesSociais, Info} from './styles';

import Comparativo from '../../components/Comparativo';

export default function Main(){

    return(
        <>
            <Hero>
                <h1>5G Sustentável</h1>
                <p>O futuro da telecomunicação móvel e da Sustentabilidade!</p>
            </Hero>

            <Comparativo/>

            <Video>
                <h2>Vídeos</h2>
            </Video>



            <Conteudo>
                <h3>A Tecnologia 5G e a sustentabilidade</h3>
                <hr></hr>
                <p>O 5G é a próxima geração de rede de dados sem fio e será capaz de fornecer 100 vezes mais velocidade de internet do que o 4G.  De fato, o 5G trará  novas formas de serviços, incluindo tudo, desde monitorar remotamente o uso da  agua nas fazendas até  realizar remotamente cirurgias cerebrais, Devido a sua baixíssima latência.</p>

                <p>A capacidade da 5G de conectar bilhões de sensores e dispositivos fornecerá novas idéias sobre os complexos problemas modernos que enfrentamos continuamente.</p>

                <p>O 5G representa uma oportunidade para repensar a organização da sociedade, a fim de apoiar abordagens sustentaveis para a vida.</p>

                <Link to="/"></Link>
            </Conteudo>

            <Footer>
                <Info>
                    <a href="#">Fale Conosco</a>
                    <p>\</p>
                    <a href="#">Sobre nós</a>
                    <p>\</p>
                    <a href="#">Legal</a>
                </Info>

                <a href=""><FaCaretUp size={25}/></a>

                <RedesSociais>
                    <a href="https:\\facebook.com"><FaFacebook size={25}/></a>
                    <a href="instagram.com" ><AiFillInstagram size={27}/></a>
                    <a href="instagram.com"><AiFillTwitterCircle size={27}/></a>
                </RedesSociais>
            </Footer>

        </>
    );
}
