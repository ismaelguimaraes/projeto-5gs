import React, { useEffect } from 'react';
import {Container} from './styles';
import InfoImg from '../../assets/imagens/InfoImg.jpg';

export default function Info() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container>
            <section>
                <h1>Tecnologia 5G e Sustentabilidade</h1>
                <img src={InfoImg} alt="Imagem ilustrativa 5GS"/>

                <p>
                    O 5G é o próximo passo evolutivo para a banda larga sem fio. Sua missão é elevar, e muito, as potencialidades da rede atual, conhecida como 4G, alçando a banda larga móvel a altíssimos padrões de velocidade de conexão e de usuários simultâneos.
                    Em resumo, as redes 5G prometem aos seus futuros usuários uma cobertura mais ampla e eficiente, maiores transferências de dados, além de um número significativamente maior de conexões simultâneas.
                    As redes da 4ª geração, utilizadas atualmente em algumas regiões do Brasil, são capazes de entregar uma velocidade média de conexão de, aproximadamente, 33 Mbps. Estima-se que o 5G será capaz de entregar velocidades 50 a 100 vezes maiores, podendo alcançar até 10 Gbps.
                </p>

                <p>
                Em 2014, foram estabelecidos alguns critérios pelo GSMA, uma organização internacional formada por mais de 1200 operadoras de rádio, internet e telefonia móvel, para guiar o processo de implantação das redes 5G. Entre esses critérios, podemos destacar:

                    <ul>
                        <li>As redes 5G devem consumir até 90% menos energia que as redes 4G atuais;</li>
                        <li>Os tempos de conexão entre aparelhos móveis devem ser inferiores a 5 ms (milissegundos), face à latência de 30 ms das redes 4G;</li>
                        <li>O número de aparelhos conectados por área devem ser 50 a 100 vezes maior que o atual;</li>
                        <li>Devem ser realizados aumentos drásticos na duração da bateria de dispositivos rádio receptores.</li>
                    </ul>

                </p>

                <p>
                    Após a instalação da infraestrutura das redes 5G, a redução do consumo de energia poderá diminuir os custos futuros, além de torná-la mais ecológica. O tempo de latência reduzido, por sua vez, possibilitará a comunicação entre veículos autônomos, permitirá o desenvolvimento de sistemas de segurança que evitem acidentes automobilísticos, além de possibilitar a realização de cirurgias remotas por meio de robôs.
                </p>

                <p>
                    O aumento do número de aparelhos conectados por área possibilitará uma enorme ampliação da tendência mundial da “internet das coisas”. Sistemas de iluminação pública e residencial, smartphones, smartwatches, eletrodomésticos, dispositivos de monitoramento, sensores de presença, frequencímetros cardíacos, centrais de segurança, guichês de supermercados ou estacionamentos, caixas de supermercados, sensores meteorológicos e muitos outros dispositivos poderão conectar-se mutuamente por meio do uso da quinta geração das redes móveis. Com isso, haverá inúmeras possibilidades, cada vez mais inteligentes e conectadas, para residências, ruas, hospitais, comércios e indústrias.
                </p>

                <p>
                    O pequeno tempo de latência possibilitado pelas redes 5G permitirá que o sistema de freios de um veículo comunique-se rapidamente aos smartphones ou smartwatchs dos pedestres, evitando acidentes quando, por exemplo, houver grandes aproximações entre eles.
                </p>

                <p>
                    Toda a infraestrutura para a utilização da rede 5G não sairá barata, no entanto, não se sabe ao certo de quanto deverá ser o investimento para os usuários finais. Estima-se que, na Europa, os custos de instalação da nova infraestrutura de antenas somarão entre 300 e 500 bilhões de euros, um investimento muito grande para potencialidades ainda maiores.
                </p>

            </section>
        </Container>
    );
}
