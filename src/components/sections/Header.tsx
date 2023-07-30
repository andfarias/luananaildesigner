import { useEffect, useState } from 'react';

export default function Header() {
    const handleToggleClick = () => {
        const nav = document.querySelector('#header nav');
        if (nav !== null) {
            nav.classList.toggle('show');
        }
    };

    useEffect(() => {
        const toggleElements = document.querySelectorAll('nav .toggle');
        for (const element of Array.from(toggleElements)) {
            element.addEventListener('click', handleToggleClick);
        }

        return () => {
            for (const element of Array.from(toggleElements)) {
                element.removeEventListener('click', handleToggleClick);
            }
        };
    }, []);

    const handleLinkClick = () => {
        // Substitua "nav" pelo identificador da barra de navegação que deseja fechar
        const nav = document.querySelector('nav');
        if (nav !== null) {
            nav.classList.remove('show');
        }
    };

    useEffect(() => {
        const links = document.querySelectorAll('nav ul li a');
        for (const link of Array.from(links)) {
            link.addEventListener('click', handleLinkClick);
        }

        return () => {
            // Remova os ouvintes de evento ao desmontar o componente para evitar vazamentos de memória
            for (const link of Array.from(links)) {
                link.removeEventListener('click', handleLinkClick);
            }
        };
    }, []);

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
                    Luana<span> Nail&apos;s</span>
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
