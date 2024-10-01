import React from 'react';
import { TiTick } from "react-icons/ti";
import gold2 from "../Assect/image/gold.jpg"
import gold3 from "../Assect/image/coin.jpg"
import gold4 from "../Assect/image/gold-2.jpg"
import gold5 from "../Assect/image/bar.jpg"
import gold1 from "../Assect/image/aboutus.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

function Goldbuyer() {
    return (
        <div className='App'>
            <div>
                <div className='custom-goldbuyer'>
                    <div className='custom-inside-goldbuyer'>
                        <div className='row m-0 p-0'>
                            <div className='col-lg-12 p-0'>
                                <>
                                    <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Navigation,  Mousewheel, Keyboard]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='custom-swiper-gold'>
                                                <div className='inside-swiper-gold'>
                                                    <h2>CALL NOW !</h2>
                                                    <buttom className="custom-gold-btn">Call 6379251627</buttom>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='custom-swiper-gold'>
                                                <div className='inside-swiper-gold'>
                                                    <h2>CALL NOW !</h2>
                                                    <buttom className="custom-gold-btn">Call 6379251627</buttom>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='custom-swiper-gold'>
                                                <div className='inside-swiper-gold'>
                                                    <h2>CALL NOW !</h2>
                                                    <buttom className="custom-gold-btn">Call 6379251627</buttom>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='custom-doldbuyer-2'>
                    <div className='container'>
                        <div className='custom-inside-goldbuyer'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='custom-left-gold'>
                                                <h2 className='fw-bold '><span className='sk-gold-buyer-title'>Welcome to India Money - Sell your Gold</span></h2>
                                                <p className='mb-3'>Established in the year 2006 and we having 14 years of gold business tradition in the world. Our Company is gold buyers in Tamilnadu and gold jewels buyers in Tamilnadu, Sell gold in Tamilnadu, Gold Coins buyers in Tamilnadu, and ornaments from the public and financial institutions at the online price.</p>
                                                <div className="mt-2  custom-color-1">
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <p className='me-3'><TiTick /> Trust Satisfaction</p>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <p><TiTick /> Zero Wastage Deduction (*)</p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <p className='me-3'><TiTick /> Spot Cash For Gold</p>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <p><TiTick /> 100% Value of Gold (*)</p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <p className='me-3'><TiTick />Easy & Fast</p>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <p><TiTick />Gold Purity Checking (*)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='custom-right-gold '>
                                                <img src={gold1} alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='custom-goldbuyer-3'>
                    <div className='container'>
                        <div className='custom-insidegoldbuyer text-center'>
                            <div className='row '>
                                <div className='col-lg-12'>
                                    <h2 className=''><span>SK Gold Buyer Services</span></h2>
                                    <p>Our Company is buying gold in Tamilnadu and jewels buyers in Tamilnadu, gold bars buyers in Tamilnadu, Gold Coins buyers in Tamilnadu, and ornaments from the public and financial institutions at the online price.</p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-3'>
                                            <div className='custom-gold-box'>
                                                <img src={gold2} alt=""></img>
                                                <p>Gold Buyers</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='custom-gold-box'>
                                                <img src={gold3} alt=""></img>
                                                <p>Gold Buyers</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='custom-gold-box'>
                                                <img src={gold4} alt=""></img>
                                                <p>Gold Buyers</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='custom-gold-box'>
                                                <img src={gold5} alt=""></img>
                                                <p>Gold Buyers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goldbuyer