
import "../Assect/css/Financial.css"
import { FaCheckCircle } from "react-icons/fa";
import meeting from "../Assect/image/fin2.png";
import broken from "../Assect/image/fin3.png";
import axis from "../Assect/image/cc-axis-bank.png"
import hdfc from "../Assect/image/cc-hdfc-1.png"
import icici from "../Assect/image/cc-icici-1.png"
import sbi from "../Assect/image/cc-sbi-1.png"
import sci from "../Assect/image/cc-sc-1.png"
import simplevisa from "../Assect/image/sbi-simplyclick-visa-1.png"
import simplevisa1 from "../Assect/image/legends_visa-1.png"
import simplevisa2 from "../Assect/image/legends_visa-2.png"
import simplevisa3 from "../Assect/image/legends_visa-3.png"

import card1 from "../Assect/image/11.svg"
import card2 from "../Assect/image/12.svg"
import card3 from "../Assect/image/13.svg"
import card4 from "../Assect/image/14.svg"
import card5 from "../Assect/image/15.svg"
import card6 from "../Assect/image/16.svg"
import card7 from "../Assect/image/17.svg"
import card8 from "../Assect/image/18.svg"
import card9 from "../Assect/image/19.svg"

import credit1 from "../Assect/image/credit1.png"
import credit2 from "../Assect/image/credit2.png"
import credit3 from "../Assect/image/credit3.png"
import { FaArrowRightLong } from "react-icons/fa6";

import meeting1 from "../Assect/image/fin2.png"
import sideimg from "../Assect/image/Vector-5.png"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


function Financial() {
    // State to manage which radio button is checked
    const [checkedRadio, setCheckedRadio] = useState('');

    // Function to handle input click and toggle radio button
    const handleInputClick = (id) => {
        setCheckedRadio(prevChecked => (prevChecked === id ? '' : id));
    };
    return (
        <div className='App'>
            <div className='custom-creditcard'>
                <div className='container'>
                    <div className='custom-inside-credit'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='custom-outside-credit-left'>
                                            <div className='custom-left-credit'>
                                                <h6>APPLY FOR CREDITCARD & GET INSTANT APPROVAL</h6>
                                                <ul>
                                                    <li><span><FaCheckCircle className='finance-icon1' /></span>AI based analysis & Sutiable Cards For you</li>
                                                    <li><span><FaCheckCircle className='finance-icon2' /></span>50+ Credit Cards From All Banks</li>
                                                    <li><span><FaCheckCircle className='finance-icon3' /></span>24x7 Customer Helpline</li>
                                                    <li><span><FaCheckCircle className='finance-icon4' /></span>Easy Processing</li>
                                                </ul>

                                            </div>
                                            <div className='credit-swiper'>
                                                <>
                                                    <Swiper
                                                        slidesPerView={1}
                                                        spaceBetween={10}
                                                        pagination={{
                                                            clickable: true,
                                                        }}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2500,
                                                            disableOnInteraction: false,
                                                        }}
                                                        breakpoints={{
                                                            280: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 20,
                                                            },
                                                            640: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 20,
                                                            },
                                                            768: {
                                                                slidesPerView: 4,
                                                                spaceBetween: 40,
                                                            },
                                                            1024: {
                                                                slidesPerView: 3,
                                                                spaceBetween: 50,
                                                            },
                                                        }}
                                                        modules={[Autoplay]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={axis} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={hdfc} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={icici} alt="bank"></img>
                                                            </div></SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={sbi} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={sci} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img">
                                                                <img src={axis} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>

                                                    </Swiper>
                                                </>
                                            </div>
                                            <div className="custom-down-img">
                                                <img src={meeting1} alt="image"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="custom-right-swiper">
                                            <div className=" custom-market">
                                                <h4>FINANCIAL MARKETS</h4>
                                                <button className="credit-btn">FortuneWealth</button>
                                            </div>

                                            <div className="mt-5">
                                                <form>
                                                    {/* Profile Selection Section */}
                                                    <div className="row g-3 align-items-center">
                                                        <div className="col-sm-1">
                                                            <label htmlFor="inputPassword6" className="col-form-label text-left"> PROFILE</label>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword1"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Business"
                                                                    onClick={() => handleInputClick('radio1')}
                                                                />
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="profileSelection"
                                                                    id="radio1"
                                                                    checked={checkedRadio === 'radio1'}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword2"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Home Maker"
                                                                    onClick={() => handleInputClick('radio2')}
                                                                />
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="profileSelection"
                                                                    id="radio2"
                                                                    checked={checkedRadio === 'radio2'}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword3"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Pension"
                                                                    onClick={() => handleInputClick('radio3')}
                                                                />
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="profileSelection"
                                                                    id="radio3"
                                                                    checked={checkedRadio === 'radio3'}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword3"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Salary"
                                                                    onClick={() => handleInputClick('radio4')}
                                                                />
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="profileSelection"
                                                                    id="radio4"
                                                                    checked={checkedRadio === 'radio4'}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword3"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Students"
                                                                    onClick={() => handleInputClick('radio5')}
                                                                />
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="profileSelection"
                                                                    id="radio5"
                                                                    checked={checkedRadio === 'radio5'}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Additional Form Sections */}
                                                    <div className="mt-5">
                                                        <div className="row g-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor="validationCustomUsername" className="form-label">Annual Income</label>
                                                                <div className="input-group has-validation">
                                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="validationCustom01" className="form-label">Your PinCode</label>
                                                                <input type="text" className="form-control" id="validationCustom01" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="validationCustom02" className="form-label">Your Mobile Number</label>
                                                                <input type="text" className="form-control" id="validationCustom02" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Categories Section */}
                                                    <div className="mt-5">
                                                        <div className="row g-3 align-items-center">
                                                            <div className="col-sm-2">
                                                                <label htmlFor="inputPassword6" className="col-form-label">CATEGORIES</label>
                                                            </div>
                                                            <div className="col-sm-5">
                                                                <div className="input-wrapper">
                                                                    <select class="form-select form-select-sm" aria-label="Small select example">
                                                                        <option selected>Select Your categories</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-5">
                                                                <div className="input-wrapper">
                                                                    <select class="form-select form-select-sm" aria-label="Small select example">
                                                                        <option selected>Select Your services Provider</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* Card Type Section */}
                                                    <div className="mt-5">
                                                        <div className="row g-3  ">
                                                            <div className="col-sm-2">
                                                                <label htmlFor="inputPassword6" className="col-form-label">Advantages</label>
                                                            </div>
                                                          <div className="col-lg-10">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="custom-zero">
                                                                        <p><img src={sideimg} alt="image"></img> Zero Brokerage On Equity Delivery Trades</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="custom-zero">
                                                                        <p><img src={sideimg} alt="image"></img> Zero Charges For Account Opening</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="custom-zero">
                                                                        <p><img src={sideimg} alt="image"></img> Zero Account Maintenance Charges</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="custom-zero">
                                                                        <p><img src={sideimg} alt="image"></img> ₹9/Option *Z</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </div>



                                                </form>

                                                <div className="mt-5 text-center">
                                                    <button className="credit-btn">Apply Now</button>
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
            <div className="custom-credit-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-md-2'>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit1}></img>
                                    </div>
                                </div>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit2}></img>
                                    </div>
                                </div>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit3}></img>
                                    </div>
                                </div>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit3}></img>
                                    </div>
                                </div>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit1}></img>
                                    </div>
                                </div>
                                <div className='cols'>
                                    <div className="custom-credit-box-1">
                                        <img src={credit2}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="custom-credit-box-mobile-view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex  justify-content-between">
                                <div className="custom-credit-box-1">
                                    <img src={credit1}></img>
                                </div>
                                <div className="custom-credit-box-1">
                                    <img src={credit2}></img>
                                </div>
                            </div>
                            <div className="d-flex  justify-content-between">
                                <div className="custom-credit-box-1">
                                    <img src={credit3}></img>
                                </div>
                                <div className="custom-credit-box-1">
                                    <img src={credit1}></img>
                                </div>
                            </div>
                            <div className="d-flex  justify-content-between">
                                <div className="custom-credit-box-1">
                                    <img src={credit2}></img>
                                </div>
                                <div className="custom-credit-box-1">
                                    <img src={credit3}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="custom-credit-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="custom-inside-faq">
                                <div className="mb-3">
                                    <h4>1. What is the difference between Stock and Share?</h4>
                                    <p>A stock and a share are essentially one and the same. They both represent a part of the capital of a joint stock company. In India it was always called shares whereas in the US they have been referred to as stocks. They essentially mean the same thing.</p>
                                </div>
                                <div className="mb-3">
                                    <h4>2. What are the most traded derivatives?</h4>
                                    <p>More popular traded derivatives are options, single stock futures, warrants, a contract for difference, and index return swaps.</p>
                                </div>
                                <div className="mb-3">
                                    <h4>3. What documents are required for opening an account</h4>
                                    <ul style={{listStyle:"none"}}>
                                        <li>The following are the list of documents required</li>
                                        <li>A. Proof of Identity Copy of PAN Card</li>
                                        <li>B. Proof of Address Copy of any one of the following (Self Attested)</li>
                                        <li>(Passport) , (Ration card) , (Voters ID) , (Driving license) , (Electricity bill (not more than 2 months old)), </li>
                                        <li>(Landline Telephone Bill (not more than 2 months old)) , (Bank PassBook)</li>
                                        <li>C. Bank Proof Copy of Bank Pass Book or Personalized Cheque leaf (For Existing Bank Account Holders Only)</li>
                                        <li>D. Latest Photograph (Single copy)</li>
                                        <li>How Would You Choose Stock For Your Portfolio?</li>
                                        <li>What Instruments Are Traded In The Stock Markets?</li>
                                    </ul>
                                    <p className="mb-4">The stock market trades equity shares of various listed companies. In addition, the markets also trade other instruments like index futures, index options, stock futures, stock options, VIX futures etc. Both equity and derivative products are traded in stock markets.</p>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Financial