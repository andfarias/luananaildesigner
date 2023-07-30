import { RevealWrapper } from 'next-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonial01 from '../../assets/testimonial-01.jpg';
import testimonial02 from '../../assets/testimonial-02.jpg';
import testimonial03 from '../../assets/testimonial-03.jpg';

export default function Testimonials() {
    return (
        <section className="section" id="testimonials">
            <RevealWrapper
                delay={200}
                duration={500}
                reset={true}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
                <div className="container">
                    <header>
                        <h2 className="title">Depoimentos de quem já passou por aqui 🧏‍♀️</h2>
                    </header>
                    <Swiper
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
                                        Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas
                                        unhas mudou muito depois que comecei a ser cliente dela.
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
                                        Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas
                                        unhas mudou muito depois que comecei a ser cliente dela.
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
                                        Eu sou cliente da Luana há 5 anos e não troco por nada! Certamenteminhas
                                        unhas mudou muito depois que comecei a ser cliente dela.
                                    </p>
                                    <cite>
                                        <Image src={testimonial03} alt="Foto de Franciele Siqueira" />
                                        Franciele Siqueira
                                    </cite>
                                </blockquote>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </RevealWrapper>
        </section>
    );
}
