import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';

import main from '../../assets/main.jpeg';
import WhatsAppButton from '../buttons/WhatsAppButton';

export default function Home() {
    return (
        <section className="section" id="home">
            <RevealWrapper
                delay={200}
                duration={1000}
                distance="200px"
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container grid">
                    <div className="image">
                        <Image src={main} alt="Mulher sorrindo penteando outra mulher" />
                    </div>
                    <div className="text">
                        <h2 className="title">Cuido das suas unhas 💖</h2>
                        <p>Manicure & Pedicure</p>
                        <WhatsAppButton buttonText="Agendar um horário" />
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
