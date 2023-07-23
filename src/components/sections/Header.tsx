import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpa o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const headerStyle = isScrolled ? 'scroll' : '';

    return (
        <header id="header" className={headerStyle}>
            <nav className="container">
                <a className="logo" href="#">
                    Luana<span> Nail´s</span>
                </a>
                <div className="menu">
                    <ul className="grid">
                        <li>
                            <a className="title" href="#home">
                                Início
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#about">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#services">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#testimonials">
                                Depoimentos
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#contact">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="toggle icon-menu"></div>
                <div className="toggle icon-close"></div>
            </nav>
        </header>
    );
}
