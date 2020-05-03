import React, {useState} from 'react';
import { Comparacao, Requisitos, Conteudo} from './styles';
import {FaTachometerAlt, FaStopwatch, FaMobileAlt, FaBatteryHalf} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ComparativoGrande(){
    return (
        <Comparacao>
            <h2>Comparação</h2>
            <h3>(4G e 5G)</h3>

            <Requisitos>
                <div>
                    <button><FaTachometerAlt size={35}/></button>
                    <Conteudo><p>O 5G será até 100 vezes mais rápido que o 4G.</p></Conteudo>
                </div>

                <div>
                    <button><FaStopwatch size={35}/></button>
                    <Conteudo><p>As redes 5G possuirão a latência em cerca de 70 vezes menor que o 4G.</p></Conteudo>
                </div>

                <div>
                    <button><FaMobileAlt size={35}/></button>
                    <Conteudo><p>O 5G suporta 100 vezes mais de dispositivos conectados por km² que o 4G.</p></Conteudo>
                </div>

                <div>
                    <button><FaBatteryHalf size={35}/></button>
                    <Conteudo><p>As redes 5G devem consumir até 90% menos energia que as redes 4G atuais.</p></Conteudo>
                </div>
            </Requisitos>

            <Link to="/"></Link>
        </Comparacao>

    );
}
