import React from 'react';
import {Container, Footer, RedesSociais, Info} from './styles';
import InfoImg from '../../assets/imagens/InfoImg.jpg';
import {FaCaretUp, FaFacebook} from 'react-icons/fa';
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

export default function TS() {
    return (
        <>
            <Container>
                <section>
                    <h2>Tecnologia 5G e Sustentabilidade</h2>
                    <img src={InfoImg} alt="Imagem ilustrativa 5GS"/>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, tempor sed convallis nec, fermentum a justo. Ut vitae urna ac turpis molestie aliquet. In volutpat bibendum dolor sed efficitur. Vivamus at urna mauris. Pellentesque sit amet nulla et nunc condimentum mattis. Nam eu lorem in ipsum maximus dictum. Maecenas diam massa, rhoncus rhoncus euismod vel, molestie euismod dolor.
                    </p>

                    <p>
                        Nunc ullamcorper nibh quis erat lobortis, vitae vulputate magna elementum. Donec pellentesque, mi sed malesuada consectetur, lectus urna commodo libero, eu cursus arcu mi vel libero. Fusce ullamcorper nulla id aliquet commodo. Mauris convallis vehicula arcu a hendrerit. Sed a neque elementum, euismod ligula eu, hendrerit turpis. Donec iaculis ac quam tincidunt placerat. Vestibulum sem lacus, faucibus non ligula faucibus, pharetra imperdiet augue. Pellentesque suscipit erat vel ex gravida pulvinar. Proin pulvinar pellentesque luctus. Morbi sed felis mollis, aliquet neque vel, mollis ipsum. Ut imperdiet urna nisl, a varius leo sagittis eu. Aliquam eget vehicula dui.

                    </p>

                    <p>
                        Nullam porta dui vitae viverra hendrerit. Aliquam porttitor mollis dui, eu venenatis dui pharetra vitae. Nam sollicitudin eget metus nec aliquet. Morbi eu ipsum vel diam blandit congue nec sit amet nisl. Cras odio sapien, tristique ac sollicitudin et, rutrum sed elit. Vestibulum ut vulputate elit. Etiam pellentesque libero quis nisl iaculis cursus. Vestibulum vel aliquam orci. Maecenas tincidunt sapien magna, sit amet hendrerit nunc laoreet consectetur. Aenean rutrum augue eget urna suscipit, in imperdiet purus iaculis. Praesent nec ultricies nibh. Maecenas posuere nunc at risus tempus egestas.
                    </p>
                </section>
            </Container>
        </>
    );
}
