import React, {useState} from 'react';
import { Comparação, Requisitos, Conteudo} from './styles';
import {FaTachometerAlt, FaStopwatch, FaMobileAlt, FaBroadcastTower, FaBatteryHalf} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ComparativoGrande(){
    const [comparativos, setComparativos] = useState([
        {
            img: <FaTachometerAlt size={35}/>,
            active: 0,
            frase: "O 5G será até 100 vezes mais rápido que o 4G."
        },

        {
            img: <FaStopwatch size={33}/>,
            active: 0,
            frase: "As redes 5G possuirão a latência em cerca de 70 vezes menor que o 4G"
        },

        {
            img: <FaMobileAlt size={35}/>,
            active: 0,
            frase: "O 5G suporta 100 vezes mais de dispositivos conectados por km² que o 4G"
        },

        {
            img: <FaBatteryHalf size={35}/>,
            active: 0,
            frase: "As redes 5G devem consumir até 90% menos energia que as redes 4G atuais"
        }
    ])

    function handleOpen(index) {
        let newArr = [...comparativos]

        newArr[index].active = newArr[index].active === 0 ? 1 : 0;

        setComparativos(newArr);
    }

    return (
        <Comparação>
            <h2>Comparação</h2>
            <h3>(4G e 5G)</h3>

            <Requisitos>

                {comparativos.map((comparativo, index) => (
                    <div key={index}>
                        <button type="button" onClick={() => handleOpen(index)}>{comparativo.img}</button>
                        <Conteudo active={comparativo.active}><p>{comparativo.frase}</p></Conteudo>
                    </div>
                ))}

            </Requisitos>

            <Link to="/"></Link>
        </Comparação>

    );
}
