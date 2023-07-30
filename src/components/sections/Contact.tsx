import { RevealWrapper } from 'next-reveal';
import WhatsAppButton from '../buttons/WhatsAppButton';

export default function Contact() {
    return (
        <section className="section" id="contact">
            <RevealWrapper
                delay={200}
                duration={500}
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container grid">
                    <div className="text">
                        <h2 className="title">Entre em contato com a gente! 📞</h2>
                        <p>Queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>

                        <WhatsAppButton buttonText="Entrar em contato" />
                    </div>
                    <div className="links">
                        <ul className="grid">
                            <li>
                                <i className="icon-phone mr-1"></i> (45) 99817-3697
                            </li>
                            <li>
                                <i className="icon-map-pin mr-1"></i> Avenida José Bonifácio, 1408 - Centro, São
                                José das Palmeiras - PR, 85898-000
                            </li>
                            <li>
                                <i className="icon-map-pin mr-1"></i> Av. José João Muraro, 50 - Centro, Toledo -
                                PR, 85900-260
                            </li>
                            <li>
                                <i className="icon-mail mr-1"></i> luanaandradefarias567@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
