import { RevealWrapper } from 'next-reveal';
import WhatsAppButton from '../buttons/WhatsAppButton';

export default function Contact() {
    return (
        <section className="section" id="contact">
            <RevealWrapper
                delay={200}
                duration={500}
                distance="500px"
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
                                <i className="icon-phone"></i> (45) 99817-3697
                            </li>
                            <li>
                                <i className="icon-map-pin"></i> R. Amauri Souza, 346
                            </li>
                            <li>
                                <i className="icon-mail"></i> contato@luananails.com
                            </li>
                        </ul>
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
