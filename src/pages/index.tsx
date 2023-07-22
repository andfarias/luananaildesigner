import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import main from '../assets/main.jpg';
import fotoPessoalLuana from '../assets/foto_pessoal_luana.jpg';
import testimonial01 from '../assets/testimonial-01.jpg';
import testimonial02 from '../assets/testimonial-02.jpg';
import testimonial03 from '../assets/testimonial-03.jpg';
import unhas01 from '../assets/unhas-01.png';
import unhas02 from '../assets/unhas-02.png';
import unhas03 from '../assets/unhas-03.png';
import { RevealWrapper } from 'next-reveal';

// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css';
// SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home() {
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
        // https://github.com/matheuscostadesign/nlw6-beauty-salon/blob/main/index.html
        <>
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

            <main>
                {/* <!-- Home --> */}
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
                                <a
                                    className="button"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://api.whatsapp.com/send?phone=+5545998173697&text=Vamos agendar um horário!"
                                >
                                    <i className="icon-whatsapp"></i>&nbsp; Agendar um horário
                                </a>
                            </div>
                        </div>
                    </RevealWrapper>
                </section>

                {/* <!-- Divisor --> */}
                <div className="divider-1"></div>

                {/* <!-- About --> */}
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
                                <h2 className="title">Sobre mim</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam inventore debitis, sit
                                    vero at quibusdam quod expedita. Iusto magnam sequi ducimus fuga deleniti rem pariatur quasi
                                    earum aspernatur facilis!
                                </p>
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vel fuga, dignissimos placeat
                                    et autem obcaecati. A consectetur corporis, alias architecto voluptatem amet, quis molestiae
                                    voluptatum ea inventore porro fugiat?
                                </p>
                                <br />
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur labore necessitatibus
                                    quaerat, ipsa eligendi, dignissimos eos in maiores rerum perspiciatis veritatis? Eaque dolores
                                    laudantium eius corporis harum explicabo illo at!
                                </p>
                            </div>
                        </div>
                    </RevealWrapper>
                </section>

                {/* <!-- Divisor --> */}
                <div className="divider-2"></div>

                {/* <!-- Services --> */}
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
                                <h2 className="title">Serviços</h2>
                                <p className="subtitle">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, fugit quia officiis illo
                                    facere excepturi doloribus beatae incidunt quisquam soluta quae labore, corporis ex iusto
                                    recusandae esse natus ratione consectetur?
                                </p>
                            </header>
                            <div className="cards grid">
                                <div className="card">
                                    <Image src={unhas01} alt="Unhas 01" />
                                    <h3 className="title">Alongamento Fibra de Vidro</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum explicabo nostrum
                                        distinctio
                                    </p>
                                </div>
                                <div className="card">
                                    <Image src={unhas02} alt="Unhas 02" />
                                    <h3 className="title">Manicure Pedicure</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur vel, nam provident
                                        aliquam dolorum consectetur totam
                                    </p>
                                </div>
                                <div className="card">
                                    <Image src={unhas03} alt="Unhas 03" />
                                    <h3 className="title">Esmaltação em Gel</h3>
                                    <p>
                                        lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste officiis
                                        sapiente cum voluptate corrupti odio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>
                </section>

                {/* <!-- Divisor --> */}
                <div className="divider-1"></div>

                {/* <!-- Testimonials --> */}
                <section className="section" id="testimonials">
                    <RevealWrapper
                        delay={200}
                        duration={500}
                        distance="200px"
                        reset={true}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    >
                        <div className="container">
                            <header>
                                <h2 className="title">Depoimentos de quem já passou por aqui</h2>
                            </header>
                            {/* <div className="testimonials swiper-container"> */}
                            {/* <div className="swiper-wrapper"> */}
                            <Swiper
                                // navigation
                                // pagination={{ clickable: true }}
                                // autoplay={{ delay: 3000 }}
                                // loop={true}
                                // spaceBetween={20}
                                // slidesPerView={1}
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="testimonial swiper-slide">
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas unhas
                                                mudou muito depois que comecei a ser cliente dela.
                                            </p>
                                            <cite>
                                                <Image src={testimonial01} alt="Foto de Wanessa Souza" />
                                                Wanessa Souza
                                            </cite>
                                        </blockquote>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial swiper-slide">
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas unhas
                                                mudou muito depois que comecei a ser cliente dela.
                                            </p>
                                            <cite>
                                                <Image src={testimonial02} alt="Foto de Alexandra Moreira" />
                                                Alexandra Moreira
                                            </cite>
                                        </blockquote>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial swiper-slide">
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas unhas
                                                mudou muito depois que comecei a ser cliente dela.
                                            </p>
                                            <cite>
                                                <Image src={testimonial03} alt="Foto de Franciele Siqueira" />
                                                Franciele Siqueira
                                            </cite>
                                        </blockquote>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/* </div> */}

                            {/* <!-- Pagination --> */}
                            <div className="swiper-pagination"></div>
                            {/* </div> */}
                        </div>
                    </RevealWrapper>
                </section>

                {/* <!-- Divisor --> */}
                <div className="divider-2"></div>

                {/* <!-- Contact --> */}
                <section className="section" id="contact">
                    <RevealWrapper
                        delay={200}
                        duration={500}
                        distance="200px"
                        reset={true}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    >
                        <div className="container grid">
                            <div className="text">
                                <h2 className="title">Entre em contato com a gente!</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, reprehenderit. Itaque
                                    explicabo, quidem
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send?phone=+45998173697&text=Vamos agendar um horário!"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="button"
                                >
                                    <i className="icon-whatsapp"></i> Entrar em contato
                                </a>
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

                {/* <!-- Divisor --> */}
                <div className="divider-1"></div>
            </main>

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
                            <a href="#" target="_blank">
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

            <a href="#home" className="back-to-top">
                <i className="icon-arrow-up"></i>
            </a>
        </>
    );
}
