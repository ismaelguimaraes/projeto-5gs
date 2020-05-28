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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium officiis amet consequatur dicta dolorum provident inventore dolore, magnam laboriosam.</p>
                        <p>Fonte: </p>
                    </section>
                </Card>

                <Card>
                    <div><FaStopwatch size="50"/></div>
                    <section>
                        <h4>Latência</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, blanditiis. Praesentium, nemo dignissimos quod odio quaerat est nesciunt itaque animi!</p>
                        <p>Fonte: </p>
                    </section>
                </Card>

                <Card>
                    <div><FaMobileAlt size="50"/></div>
                    <section>
                        <h4>Dispositivos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id, facere illo molestias ipsum porro accusamus assumenda itaque suscipit optio?</p>
                        <p>Fonte: </p>
                    </section>
                </Card>

                <Card>
                    <div><FaBatteryHalf size="50"/></div>
                    <section>
                        <h4>Energia</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit animi optio incidunt. Voluptatem, odio voluptas sint repellat nam perspiciatis.</p>
                        <p>Fonte: </p>
                    </section>
                </Card>

            </Container>
        </>
    );
}
