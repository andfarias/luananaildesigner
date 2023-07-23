import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';

import unhas01 from '../../assets/unhas-01.png';
import unhas02 from '../../assets/unhas-02.png';
import unhas03 from '../../assets/unhas-03.png';

export default function Services() {
    return (
        <section className="section" id="services">
            <RevealWrapper
                delay={200}
                duration={500}
                distance="200px"
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container grid">
                    <header>
                        <h2 className="title">Serviços 💅</h2>
                        <p className="subtitle">
                            Descubra a perfeição em cada detalhe. Oferecemos serviços de manicure e pedicure com esmaltação em gel
                            e alongamento de fibra de vidro. Unhas deslumbrantes e duradouras, realçando sua beleza única. Mime-se
                            com o cuidado completo para mãos e pés!
                        </p>
                    </header>
                    <div className="cards grid">
                        <div className="card">
                            <Image src={unhas01} alt="Unhas 01" />
                            <h3 className="title">Alongamento Fibra de Vidro</h3>
                            <p>
                                Transforme suas unhas em verdadeiras obras de arte com o incrível alongamento de fibra de vidro!
                                Desfrute de unhas deslumbrantes e duradouras!
                            </p>
                        </div>
                        <div className="card">
                            <Image src={unhas02} alt="Unhas 02" />
                            <h3 className="title">Manicure Pedicure</h3>
                            <p>
                                Descubra o poder do cuidado completo para mãos e pés! Nossos serviços de manicure e pedicure
                                proporcionam unhas impecáveis e bem-cuidadas. Mime-se!
                            </p>
                        </div>
                        <div className="card">
                            <Image src={unhas03} alt="Unhas 03" />
                            <h3 className="title">Esmaltação em Gel</h3>
                            <p>
                                Experimente a beleza duradoura com a esmaltação em gel! Suas unhas ganharão cores vibrantes e
                                brilho intenso por semanas, sem descascar. Arrase!
                            </p>
                        </div>
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
