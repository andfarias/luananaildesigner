import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';

import fotoPessoalLuana from '../../assets/foto_pessoal_luana.jpg';

export default function About() {
    return (
        <section className="section" id="about">
            <RevealWrapper
                delay={200}
                duration={500}
                distance="200px"
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container grid">
                    <div className="image">
                        <Image src={fotoPessoalLuana} alt="foto pessoal Luana" />
                    </div>
                    <div className="text">
                        <h2 className="title">Sobre mim ✨</h2>
                        <p>
                            Conheça Luana Andrade Farias, especialista em alongamento em fibra de vidro, manicure, pedicure e
                            esmaltação em gel. Com mais de 3 anos de experiência, ela se destaca por sua habilidade técnica e
                            atenção aos detalhes.
                        </p>

                        <p>
                            Sua personalidade extrovertida e alegre cria uma atmosfera acolhedora em seu espaço. Apaixonada por
                            música e cantar, Luana busca constantemente crescer profissionalmente e valoriza princípios como
                            dedicação, integridade e empatia.
                        </p>

                        <p>
                            Com objetivos de expandir seus serviços e proporcionar experiências únicas, Luana acredita que a vida
                            é uma jornada de aprendizado. Sua energia contagiante e comprometimento fazem dela uma profissional em
                            constante evolução, pronta para encantar e fazer a diferença na vida de seus clientes.
                        </p>
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
