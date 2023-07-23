import { RevealWrapper } from 'next-reveal';

export default function Footer() {
    return (
        <footer className="section">
            <RevealWrapper
                delay={200}
                duration={500}
                distance="200px"
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container grid">
                    <div className="brand">
                        <a className="logo logo-alt" href="#home">
                            Luana<span> Nail´s</span>
                        </a>
                        <p>2023 Luana Nail´s.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/luananails_of/" rel="noreferrer" target="_blank">
                            <i className="icon-instagram"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="icon-youtube"></i>
                        </a>
                    </div>
                </div>
            </RevealWrapper>
        </footer>
    );
}
