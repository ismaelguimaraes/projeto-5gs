import React, { useEffect } from 'react';
import {Container, Card} from './styles.js';
import {FaTachometerAlt, FaStopwatch, FaMobileAlt, FaBatteryHalf} from 'react-icons/fa';

export default function Comparacao() {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(
        <>
            <Container>
                <h1>Comparativo</h1>
                <h2>(4G e 5G)</h2>

                <Card>
                    <div><FaTachometerAlt size="50"/></div>
                    <section>
                        <h3>Velocidade</h3>
                        <p>Comparado à quarta geração da internet móvel, o 5G pode atingir uma velocidade cinquenta vezes maior. Velocidades mais rápidas abrem as portas para novas possibilidades nas redes celulares. Aplicativos com uso intensivo de dados nos terminais - como o download de arquivos com vários gigabytes e a transmissão de vídeo em 4K / 8K - podem se tornar realidade.</p>

                        <span>Fonte:
                            <a href="https://www.techtudo.com.br/noticias/2018/06/o-que-e-5g-internet-deve-ficar-ate-50-vezes-mais-rapida-que-no-4g.ghtml" target="_blank" rel="noopener noreferrer"> https://www.techtudo.com.br/noticias/2018/06/o-que-e-5g-internet-deve-ficar-ate-50-vezes-mais-rapida-que-no-4g.ghtml</a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaStopwatch size="50"/></div>
                    <section>
                        <h3>Latência</h3>
                        <p>Pisque os olhos. É com essa rapidez que os dados podem viajar do seu futuro dispositivo habilitado para 5G, vai pela rede até um servidor principal e de volta ao seu dispositivo. Essa latência extremamente baixa (até 5 vezes mais rápida que o 4G) pode permitir aplicativos em tempo real, como veículos autônomos, robótica avançada e realidade imersiva.</p>
                        <span>Fonte:
                            <a href="https://mundoeducacao.uol.com.br/informatica/rede-5g.htm" target="_blank" rel="noopener noreferrer"> https://mundoeducacao.uol.com.br/informatica/rede-5g.htm </a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaMobileAlt size="50"/></div>
                    <section>
                        <h3>Dispositivos</h3>
                        <p>Imagine áreas de alta densidade onde milhares de dispositivos se comunicam na mesma rede, como aeroportos ou arenas esportivas. A comunicação é lenta e as velocidades de transferência de dados diminuem drasticamente. Com velocidades mais rápidas e menor latência, o 5G pode lidar com 1.000 vezes o volume de dados móveis em comparação com o 4G.</p>
                        <span>Fonte:
                            <a href="https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ " target="_blank" rel="noopener noreferrer"> https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ </a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaBatteryHalf size="50"/></div>
                    <section>
                        <h3>Energia</h3>
                        <p>Uma estimativa sugere que o 5G poderia usar 90% menos energia por bit que o 4G. O consumo de energia tem um grande impacto na vida útil da bateria para dispositivos móveis. Tem sido um espinho para as pessoas que usam smartphones, relógios inteligentes e tablets. Usando redes 5G rápidas e de baixa latência, mais dados podem ser processados na rede em vez de em um dispositivo. Isso pode significar menos energia usada e maior vida útil da bateria.</p>
                        <span>Fonte:
                            <a href="https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ " target="_blank" rel="noopener noreferrer"> https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ </a>
                        </span>
                    </section>
                </Card>
            </Container>
        </>
    );
}
