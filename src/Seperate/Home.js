import React from 'react';
import ban1 from "../Assect/image/tax.webp"
import ban2 from "../Assect/image/life-insurance-1.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from "../Assect/image/swiper-img.png"
import doteright from "../Assect/image/lines-1.png"
import sec1 from "../Assect/image/portfolio-1.jpg"
import sec2 from "../Assect/image/mutual-1.jpeg"
import sec3 from "../Assect/image/financial-1.jpeg"
import doteleft from "../Assect/image/lines-2.png"
import { LuRefreshCw } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiGift } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../Assect/image/11.svg"
import card2 from "../Assect/image/mortgage-loan.png"
import card3 from "../Assect/image/insu-loan.jpg"
import card4 from "../Assect/image/14.svg"
import card5 from "../Assect/image/15.svg"
import card6 from "../Assect/image/16.svg"
import card7 from "../Assect/image/17.svg"
import card8 from "../Assect/image/confirm-loan.jpg"
import card9 from "../Assect/image/doller.jpg"
import card10 from "../Assect/image/income-tax.jpg"
// import banner1 from "../Assect/image/banner-1.gif."
import ring from "../Assect/image/laurel.png"
import { RxCross2 } from "react-icons/rx";
import { IoStarSharp } from "react-icons/io5";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';



function Home() {


    document.addEventListener('scroll', () => {
        const element = document.querySelector('.custom-inside-body-1');
        const rect = element.getBoundingClientRect();

        // Trigger the animation when the element is in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });


    document.addEventListener('scroll', () => {
        const element = document.querySelector('.custom-inside-body-2');
        const rect = element.getBoundingClientRect();

        // Trigger the animation when the element is in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });

    return (
        <div className='App'>
            <div className='container-fluid'>

                {/* <<<<<<<<<<<<<<<<<swiper-start>>>>>>>>>>>>> */}
                <div className='custom-carosel'>
                    <div className=''>
                        <div className='row m-0 p-0'>
                            <div className='col-lg-12 p-0'>
                                <div className="custom-11111">
                                    <div className="row  justify-content-between m-0">
                                        <div className="col-lg-5 p-0">
                                            <div className="custom-left-swiper-1">
                                                <>
                                                    <Swiper
                                                        cssMode={true}
                                                        navigation={true}
                                                        mousewheel={true}
                                                        keyboard={true}
                                                        spaceBetween={30}
                                                        centeredSlides={true}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2500,
                                                            disableOnInteraction: false,
                                                        }}
                                                        pagination={{
                                                            clickable: true,
                                                        }}
                                                        modules={[Navigation, Mousewheel, Keyboard, Pagination, Autoplay]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <div className='custom-swiper-gold'>

                                                            </div>
                                                        </SwiperSlide>
                                                        {/* <SwiperSlide>
                                                            <div className='custom-swiper-gold'>

                                                            </div>
                                                        </SwiperSlide> */}
                                                        {/* <SwiperSlide>
                                                            <div className='custom-swiper-gold'>

                                                            </div>
                                                        </SwiperSlide> */}
                                                    </Swiper>
                                                </>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="custom-right-swiper-1 justify-content-center align-items-center">
                                                <h5 className='fw-bold'>Get Your Latest CIBIL Credit Report For Free</h5>
                                                <button  data-bs-toggle="modal" data-bs-target="#staticBackdrop-1"  className="mt-2 mb-4">Check Your Free Credit Score</button>
                                                {/* <p><img src={ring} alt=""></img> <span><stong className="fw-bold">2,00,00,000+</stong>  Credit Repair  Dispute Resolution ,  Hassle-Free Services</span></p> */}
                                                <p className='fw-bold' style={{fontSize:"15px"}}> <IoStarSharp className='customer-icon ' style={{marginTop:"-6px"}}/> Credit Repair  &nbsp;<IoStarSharp className='customer-icon '  style={{marginTop:"-6px"}}/> Dispute Resolution &nbsp; <IoStarSharp className='customer-icon '  style={{marginTop:"-6px"}}/> Hassle-Free Services</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}

                                        modules={[ Pagination]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='inside-swipe-home'>
                                                <img src={swiper} alt=""></img>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='inside-swiper-home'>
                                                <img src={swiper} alt=""></img>
                                            </div>
                                        </SwiperSlide>


                                    </Swiper>
                                </> */}



                            </div>
                        </div>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>> */}


                {/* <<<<<<<<<<<<<<<<<<<<<<<custom-customer-1>>>>>>>>>>>>> */}

                <div className='custom-customer-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='row justify-content-around'>
                                    <div className='col-lg-3'>
                                        <div className='custom-inside-customer-1'>
                                            <p> <IoStarSharp className='customer-icon me-2' /> Empowering Your Financial Growth</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='custom-inside-customer-1'>
                                            <p><IoStarSharp  className='customer-icon me-2'/> Investing in Your Dreams</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='custom-inside-customer-1'>
                                            <p><IoStarSharp  className='customer-icon me-2'/>  Your Journey To Classy Financial Freedom</p>
                                        </div>
                                    </div>
                                  
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>>>>> */}



                {/* <<<<<<<<<<<<<<<<<<<<<<<<<card>>>>>>>>>>>>>>>>>>>>>>< */}
                <div className='customer-credit-product'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h2>Credit Products</h2>
                                <div className='row row-cols-lg-4 row-cols-sm-2 row-cols-md-2'>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>CREDIT CARD</h5>
                                                <p className='mt-3 mb-3'> Elevate Your Spending Experience.Get up to 10% cashback on what you love</p>
                                                <img src={card1} alt=''></img>
                                                <h6 className='mt-2'>Get Best Offers <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>FINANCIAL MARKETS</h5>
                                                <p className='mt-3 mb-3'>The physical & digital of investing starts here. Brace yourselves for intuitive and financial solutions for beginners, intermediate as well as advanced </p>
                                                <img src={card2} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>INSURANCE</h5>
                                                <p className='mt-3 mb-3'>Simplify your life with Here, the one-stop app for managing your insurance, vehicles, health, pets & more!</p>
                                                <img src={card3} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>INVESTMENTS</h5>
                                                <p className='mt-3 mb-3'>The best investment products – Mutual Funds, FD/RD, Gold/Silver, Bonds, Senior Citizen Saving Plans etc.</p>
                                                <img src={card4} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>LOAN</h5>
                                                <p className='mt-3 mb-3'>Apply for personal loans online up to Rs.40 lakh instantly at the lowest interest rates. Apply For Home Loan with minimal documentation.</p>
                                                <img src={card5} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                    <div className='cols'>
                                        <a  data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>PAYMENT </h5>
                                                <p className='mt-3 mb-3'>The Largest digital payment platform makes it secure and seamless to pay using UPI, make bill payments, recharge mobiles, DTH, data card & Metro Card etc</p>
                                                <img src={card6} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>REGISTRATION</h5>
                                                <p className='mt-3 mb-3'>Get licenses and registrations required to operate a business in India online. Experience fast services and low prices.</p>
                                                <img src={card7} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>SAVINGS</h5>
                                                <p className='mt-3 mb-3'>We help you build a corpus for long-term and short-term financial goals while providing life insurance coverage.</p>
                                                <img src={card8} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>STAMP PAPER</h5>
                                                <p className='mt-3 mb-3'>Order e stamp paper online in Chennai and get home delivery from the registered stamp vendor in Tamilnadu and deliver stamp paper at your doorstep </p>
                                                <img src={card9} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>SELL YOUR GOLD</h5>
                                                <p className='mt-3 mb-3'>Looking to sell your gold ?Contact us for the best rates and hassle-free transactions. Trustworthy service guaranteed.</p>
                                                <img src={card9} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>
                                    <div className='cols'>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <div className='custom-inside-credit-product'>
                                                <h5>TAX</h5>
                                                <p className='mt-3 mb-3'>File your Taxes now in 3 easy steps, on India's most trusted Income Tax filing portal. Zero data-entry filing experience. Auto-selection of ITR type and regime.</p>
                                                <img src={card10} alt=''></img>
                                                <h6 className='mt-2'>Check Eligibility  <FaArrowRightLong className='arrow-icon' /> </h6>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='customer-credit-product-mobile mt-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h2>Credit Products</h2>
                                <div className='d-flex justify-content-between'>
                                    {/* <a href='/creditcard'>
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card1} alt=''></img>
                                            <h6>Credit Card</h6>
                                            <button>Get Best Offers </button>
                                        </div>
                                    </a> */}

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card1} alt=''></img>
                                            <h6>Credit Card</h6>
                                            <button>Get Best Offers </button>
                                        </div>
                                    </a>

                                    {/* <a href='/financial'>
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card2} alt=''></img>
                                            <h6>FINANCIAL MARKETS</h6>
                                        </div>
                                    </a> */}

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card2} alt=''></img>
                                            <h6>FINANCIAL MARKETS</h6>
                                        </div>
                                    </a>

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card3} alt=''></img>
                                            <h6>INSURANCE</h6>
                                        </div>
                                    </a>

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card4} alt=''></img>
                                            <h6>INVESTMENTS</h6>
                                        </div>
                                    </a>


                                </div>
                                <div className='d-flex  justify-content-between mt-4'>
                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card5} alt=''></img>
                                            <h6>LOAN</h6>
                                        </div>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card6} alt=''></img>
                                            <h6>PAYMENT </h6>
                                        </div>
                                    </a>

                                    {/* <a href='/register'>
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card7} alt=''></img>
                                            <h6>REGISTRATION</h6>
                                        </div>
                                    </a> */}

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card7} alt=''></img>
                                            <h6>REGISTRATION</h6>
                                        </div>
                                    </a>

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile'>
                                            <img src={card8} alt=''></img>
                                            <h6>SAVINGS</h6>
                                        </div>
                                    </a>

                                </div>
                                <div className='d-flex mt-4 jutify-content-between'>
                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile me-4'>
                                            <img src={card9} alt=''></img>
                                            <h6>STAMP PAPER</h6>
                                        </div>
                                    </a>

                                    {/* <a href="/goldbuyer">
                                        <div className='custom-inside-credit-product-mobile me-4'>
                                            <img src={card9} alt=''></img>
                                            <h6>Sell Your Gold</h6>
                                        </div>
                                    </a> */}

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile me-4'>
                                            <img src={card9} alt=''></img>
                                            <h6>Sell Your Gold</h6>
                                        </div>
                                    </a>

                                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                        <div className='custom-inside-credit-product-mobile ms-2'>
                                            <img src={card10} alt=''></img>
                                            <h6>TAX</h6>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>*/}


                {/* <<<<<<<<<<<<<<<<<<<<body-1>>>>>>>>>>>>>>>>>>>>*/}
                <div className='custom-body-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='row justify-content-between'>
                                    <div className='col-lg-5'>
                                        <div className='custom-inside-body-1'>
                                            <img src={ban1} alt=""></img>
                                            {/* <h2 className='img-inside'>Banner 2 </h2> */}
                                            <div className='custom-line-1'>
                                                <h2 className="fw-bold">TAX</h2>
                                               <p>File your Taxes now in 3 easy steps, on India's most trusted Income Tax filing portal. Zero data-entry filing experience. Auto-selection of ITR type and regime.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='custom-inside-body-2'>
                                            <img src={ban2} alt=""></img>
                                            {/* <h2 className='img-inside'>Banner 2 </h2> */}
                                            <div className='custom-line-1'>
                                                <h2 className="fw-bold">Life Insurance</h2>
                                               <p>Simplify your life with Here, the one-stop app for managing your insurance, vehicles, health, pets & more!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='custom-right-side-img text-end'>
                        <img src={doteright} alt=""></img>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>>> */}

                {/* <<<<<<<<<<<<<<<<<<<<bottom-body>>>>>>>>>>>>>>>>>>> */}
                <div className='custom-bottom-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                          
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='custom-inside-bottom-body'>
                                            <img src={sec3} alt=""></img>
                                            <h2>  FINANCIAL PLANNING </h2>
                                            <p> Take advantage of the current volatility by investing over the next 6 months in our equity funds in a systematic manner with a 6-month SIP. Invest Now.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='custom-inside-bottom-body'>
                                            <img src={sec2} alt=""></img>
                                            <h2>MUTUAL FUNDS</h2>
                                            <p>Invest in Mutual Funds online & Get access to a number of exclusive mutual fund research reports and ability to invest in Flexible Systematic Investment Plans.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='custom-inside-bottom-body'>
                                            <img src={sec1} alt=""></img>
                                            <h2>PORTFOLIO MANAGEMENT </h2>
                                            <p> Our Portfolios are managed by registered and well established portfolio managers with the objective of consistent long-term returns.y</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>> */}

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<left-side-img>>>>>>>>>>>> */}
                <div className='custom-left-side-img text-start'>
                    <img src={doteleft} alt=""></img>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>> */}

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<body-3>>>>>>>>>>>>>>>>>>>>>> */}
                <div className='custom-body-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className=''>
                                    <h2>Digital Lending</h2>
                                    <p>Be there for big financial moments !</p>
                                    <p>Create smooth and hassle-free loan experiences </p>
                                    <p>That delights you On every step of the way.</p>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>> */}

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<body-4>>>>>>>>>>>>>>>>>>>>> */}
                <div className='custom-body-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <h2>ONE STOP SOLUTION FOR ALL YOUR FINANCIAL NEEDS </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>> */}


                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button> */}

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content custom-top-modal">
                            <div class="modal-header custom-header-modal ">
                                <h1 class="modal-title fs-12 fw-bold" id="staticBackdropLabel">Sign In</h1>
                                <button type="button" class="modal-button" data-bs-dismiss="modal" aria-label="Close"><RxCross2 /></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                        <input type="email" class="form-control modal-input px-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Kishore' />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Your Number</label>
                                        <input type="password" class="form-control  modal-input px-1" id="exampleInputPassword1" placeholder='9987829819' />
                                    </div>
                                    <div className='text-center'>
                                        <button className='custom-otp-btn'>Get OTP From Your Number</button>
                                        <p className='fw-bold mb-0'>Please Enter The Code Which YOu Will Receive Shortly</p>
                                        <button className='mt-3 custom-otp-btn-1'>Enter Your OTP</button>
                                        <div>
                                            <button className='mt-3 custom-otp-btn-2'>verify</button>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home