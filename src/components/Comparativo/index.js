import React from 'react';
import { Comparacao, Requisitos, Conteudo} from './styles';
import {Link} from 'react-router-dom';
import {FaTachometerAlt, FaStopwatch, FaMobileAlt, FaBatteryHalf} from 'react-icons/fa';

export default function ComparativoGrande(){
    return (
        <Comparacao>
            <h2>Comparação</h2>
            <h3>(4G e 5G)</h3>

            <Requisitos>
                <div>
                    <section><FaTachometerAlt size={45}/></section>
                    <Conteudo><p>O 5G será até 50 vezes mais rápido que o 4G.</p></Conteudo>
                </div>

                <div>
                    <section><FaStopwatch size={40}/></section>
                    <Conteudo><p>As redes 5G possuirão a latência em cerca de 5 vezes menor que o 4G.</p></Conteudo>
                </div>

                <div>
                    <section><FaMobileAlt size={40}/></section>
                    <Conteudo><p>O 5G suporta 1000 vezes mais de dispositivos conectados por km² que o 4G.</p></Conteudo>
                </div>

                <div>
                    <section><FaBatteryHalf size={45}/></section>
                    <Conteudo><p>As redes 5G devem consumir até 90% menos energia que as redes 4G atuais.</p></Conteudo>
                </div>
            </Requisitos>

            <Link to="/comparacao"></Link>
        </Comparacao>

    );
}
