import React from 'react';
import {Container, Card} from './styles.js';
import {FaTachometerAlt, FaStopwatch, FaMobileAlt, FaBatteryHalf} from 'react-icons/fa';

export default function comparacao() {
    return(
        <>
            <Container>
                <h2>Comparativo</h2>
                <h3>(4G e 5G)</h3>

                <Card>
                    <div><FaTachometerAlt size="50"/></div>
                    <section>
                        <h4>Velocidade</h4>
                        <p>Comparado à quarta geração da internet móvel, o 5G pode atingir uma velocidade cinquenta vezes maior. Velocidades mais rápidas abrem as portas para novas possibilidades nas redes celulares. Aplicativos com uso intensivo de dados nos terminais - como o download de arquivos com vários gigabytes e a transmissão de vídeo em 4K / 8K - podem se tornar realidade.</p>

                        <span>Fonte:
                            <a href="https://www.techtudo.com.br/noticias/2018/06/o-que-e-5g-internet-deve-ficar-ate-50-vezes-mais-rapida-que-no-4g.ghtml" target="_blank"> https://www.techtudo.com.br/noticias/2018/06/o-que-e-5g-internet-deve-ficar-ate-50-vezes-mais-rapida-que-no-4g.ghtml
                            </a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaStopwatch size="50"/></div>
                    <section>
                        <h4>Latência</h4>
                        <p>Pisque os olhos. É com essa rapidez que os dados podem viajar do seu futuro dispositivo habilitado para 5G, vai pela rede até um servidor principal e de volta ao seu dispositivo. Essa latência extremamente baixa (até 5 vezes mais rápida que o 4G) pode permitir aplicativos em tempo real, como veículos autônomos, robótica avançada e realidade imersiva.</p>
                        <span>Fonte:
                            <a href="https://mundoeducacao.uol.com.br/informatica/rede-5g.htm" target="_blank"> https://mundoeducacao.uol.com.br/informatica/rede-5g.htm </a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaMobileAlt size="50"/></div>
                    <section>
                        <h4>Dispositivos</h4>
                        <p>Imagine áreas de alta densidade onde milhares de dispositivos se comunicam na mesma rede, como aeroportos ou arenas esportivas. A comunicação é lenta e as velocidades de transferência de dados diminuem drasticamente. Com velocidades mais rápidas e menor latência, o 5G pode lidar com 1.000 vezes o volume de dados móveis em comparação com o 4G.</p>
                        <span>Fonte:
                            <a href="https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ " target="_blank"> https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ </a>
                        </span>
                    </section>
                </Card>

                <Card>
                    <div><FaBatteryHalf size="50"/></div>
                    <section>
                        <h4>Energia</h4>
                        <p>Uma estimativa sugere que o 5G poderia usar 90% menos energia por bit que o 4G. O consumo de energia tem um grande impacto na vida útil da bateria para dispositivos móveis. Tem sido um espinho para as pessoas que usam smartphones, relógios inteligentes e tablets. Usando redes 5G rápidas e de baixa latência, mais dados podem ser processados na rede em vez de em um dispositivo. Isso pode significar menos energia usada e maior vida útil da bateria.</p>
                        <span>Fonte:
                            <a href="https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ " target="_blank"> https://datamakespossible.westerndigital.com/5g-vs-4g-side-by-side-comparison/ </a>
                        </span>
                    </section>
                </Card>
            </Container>
        </>
    );
}
