
import "../Assect/css/Creditcard.css"
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


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';




function Creditcard() {
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
                                    <div className='col-lg-5'>
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
                                                                slidesPerView: 5,
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
                                                                slidesPerView: 4,
                                                                spaceBetween: 50,
                                                            },
                                                        }}
                                                        modules={[Autoplay]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img-2">
                                                                <img src={simplevisa} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img-2">
                                                                <img src={simplevisa1} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img-2">
                                                                <img src={simplevisa2} alt="bank"></img>
                                                            </div></SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img-2">
                                                                <img src={simplevisa3} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>

                                                        <SwiperSlide>
                                                            <div className="custom-swipper-credit-img-2">
                                                                <img src={simplevisa3} alt="bank"></img>
                                                            </div>
                                                        </SwiperSlide>

                                                    </Swiper>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="custom-right-swiper">
                                            <h4>Register Now</h4>
                                            {/* <div className="mt-3">
                                                <form>
                                                    <div class="row g-3 align-items-center">
                                                        <div class="col-sm-3">
                                                            <label for="inputPassword6" class="col-form-label">SELECT YOUR PROFILE</label>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <div class="input-wrapper">
                                                                <input type="text" id="inputPassword1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Business"  onClick={handleInputClick}/>
                                                                <input class="form-check-input" type="radio" name="profileSelection" id="radio1"  checked={isRadioChecked}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <div class="input-wrapper">
                                                                <input type="text" id="inputPassword2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Pension" />
                                                                <input class="form-check-input" type="radio" name="profileSelection" id="radio2" />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <div class="input-wrapper">
                                                                <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Salary" />
                                                                <input class="form-check-input" type="radio" name="profileSelection" id="radio3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <form>
                                                            <div className="row g-3">
                                                                <div class="col-md-4">
                                                                    <label for="validationCustomUsername" class="form-label">Annual Income </label>
                                                                    <div class="input-group has-validation">
                                                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <label for="validationCustom01" class="form-label"> Your PinCode</label>
                                                                    <input type="text" class="form-control" id="validationCustom01" required />

                                                                </div>
                                                                <div class="col-md-4">
                                                                    <label for="validationCustom02" class="form-label">Your Mobile Number</label>
                                                                    <input type="text" class="form-control" id="validationCustom02" required />

                                                                </div>


                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div class="row g-3 align-items-center">
                                                            <div class="col-sm-2">
                                                                <label for="inputPassword6" class="col-form-label">CATEGORIES</label>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Entertainment" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio1" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Shopping" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio2" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Travel" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div class="row g-3 align-items-center">
                                                            <div class="col-sm-2">
                                                                <label for="inputPassword6" class="col-form-label">CARD TYPE</label>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Master Card" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio1" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Rupay" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio2" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-2">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="UPI" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio3" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-2">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="VISA" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div class="row g-3 align-items-center">
                                                            <div class="col-sm-2">
                                                                <label for="inputPassword6" class="col-form-label">BENEFITS</label>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Lifetime free" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio1" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Co-Branded" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio2" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                <div class="input-wrapper">
                                                                    <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Rewards" />
                                                                    <input class="form-check-input" type="radio" name="profileSelection" id="radio3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="mt-5 text-center">
                                                    <button className="credit-btn">Apply Now</button>
                                                </div>
                                            </div> */}
                                            <div className="mt-3">
                                                <form>
                                                    {/* Profile Selection Section */}
                                                    <div className="row g-3 align-items-center">
                                                        <div className="col-sm-3">
                                                            <label htmlFor="inputPassword6" className="col-form-label">SELECT YOUR PROFILE</label>
                                                        </div>
                                                        <div className="col-sm-3">
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
                                                                    placeholder="Pension"
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
                                                        <div className="col-sm-3">
                                                            <div className="input-wrapper">
                                                                <input
                                                                    type="text"
                                                                    id="inputPassword3"
                                                                    className="form-control"
                                                                    aria-describedby="passwordHelpInline"
                                                                    placeholder="Salary"
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
                                                    </div>

                                                    {/* Additional Form Sections */}
                                                    <div className="mt-4">
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
                                                    <div className="mt-4">
                                                        <div className="row g-3 align-items-center">
                                                            <div className="col-sm-2">
                                                                <label htmlFor="inputPassword6" className="col-form-label">CATEGORIES</label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="category1"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Entertainment"
                                                                        onClick={() => handleInputClick('cat1')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="categorySelection"
                                                                        id="cat1"
                                                                        checked={checkedRadio === 'cat1'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="category2"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Shopping"
                                                                        onClick={() => handleInputClick('cat2')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="categorySelection"
                                                                        id="cat2"
                                                                        checked={checkedRadio === 'cat2'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="category3"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Travel"
                                                                        onClick={() => handleInputClick('cat3')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="categorySelection"
                                                                        id="cat3"
                                                                        checked={checkedRadio === 'cat3'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Card Type Section */}
                                                    <div className="mt-4">
                                                        <div className="row g-3 align-items-center">
                                                            <div className="col-sm-2">
                                                                <label htmlFor="inputPassword6" className="col-form-label">CARD TYPE</label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="cardType1"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Master Card"
                                                                        onClick={() => handleInputClick('card1')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="cardSelection"
                                                                        id="card1"
                                                                        checked={checkedRadio === 'card1'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="cardType2"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Rupay"
                                                                        onClick={() => handleInputClick('card2')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="cardSelection"
                                                                        id="card2"
                                                                        checked={checkedRadio === 'card2'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="cardType3"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="UPI"
                                                                        onClick={() => handleInputClick('card3')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="cardSelection"
                                                                        id="card3"
                                                                        checked={checkedRadio === 'card3'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="cardType4"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="VISA"
                                                                        onClick={() => handleInputClick('card4')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="cardSelection"
                                                                        id="card4"
                                                                        checked={checkedRadio === 'card4'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Benefits Section */}
                                                    <div className="mt-4">
                                                        <div className="row g-3 align-items-center">
                                                            <div className="col-sm-2">
                                                                <label htmlFor="inputPassword6" className="col-form-label">BENEFITS</label>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="benefit1"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Lifetime free"
                                                                        onClick={() => handleInputClick('benefit1')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="benefitSelection"
                                                                        id="benefit1"
                                                                        checked={checkedRadio === 'benefit1'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="benefit2"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Co-Branded"
                                                                        onClick={() => handleInputClick('benefit2')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="benefitSelection"
                                                                        id="benefit2"
                                                                        checked={checkedRadio === 'benefit2'}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="input-wrapper">
                                                                    <input
                                                                        type="text"
                                                                        id="benefit3"
                                                                        className="form-control"
                                                                        aria-describedby="passwordHelpInline"
                                                                        placeholder="Rewards"
                                                                        onClick={() => handleInputClick('benefit3')}
                                                                    />
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="benefitSelection"
                                                                        id="benefit3"
                                                                        checked={checkedRadio === 'benefit3'}
                                                                        readOnly
                                                                    />
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
                                    <h4>1. What is a Credit Card ?</h4>
                                    <p>A credit   card is a payment card, usually issued by a bank, allowing its users to   purchase goods or services or withdraw cash on credit. Using the card thus   accrues debt that has to be repaid later.Credit cards are one of the most   widely used forms of payment across the world.</p>
                                </div>
                                <div className="mb-3">
                                    <h4>2. What are   the advantages of using a Credit Card?</h4>
                                    <p>The three main advantages of using a Credit Card are getting additional benefits  through Reward Points, increasing your spending power and building a credit  history.</p>
                                </div>
                                <div className="mb-3">
                                    <h4>3. How do I use my credit card?</h4>
                                    <ul>
                                        <li>To use your credit card at merchant outlet, please follow the following instructions:</li>
                                        <li>The merchant will dip your card at a PIN enabled POS terminal</li>
                                        <li>The merchant will enter the amount to be paid by you</li>
                                        <li>The POS terminal will prompt for the PIN</li>
                                        <li>Enter your 4 digit Credit Card PIN on the POS terminal. Pull out the card once the transaction is complete</li>
                                    </ul>
                                    <p className="mb-4">To use your credit card for online transaction, please follow the following instructions:</p>
                                    <p>
                                        Make sure you are using a secure site while making payments through the Internet. Look for a lock icon in the status bar of your web browser. This icon indicates that a site is employing an encryption technology during the transmission of your sensitive data.
                                        Never respond to phishing e-mails that falsely claim to be from a bank and ask you to disclose your personal and bank related confidential details. ICICI Bank will never ask you to send your personal banking details.
                                        Get yourself enrolled for 3D Secure (Verified by Visa (VbV)/ MasterCard SecureCode (MCSC)). This is now mandatory for carrying out online transactions.
                                        Avoid accessing your Internet banking account on unsecured public computers (e.g. internet cafes).
                                        Once you have completed your online banking transactions, remember to log-off by clicking on the "log-off" option. Close your browser and lock your computer if it is left idle.</p>
                                </div>
                                <div className="mb-3">
                                    <h4>4. Want to know why interest charges are levied on my credit card?</h4>
                                    <p>Interest   will be charged if the Total Amount Due is not paid by the payment due date.   Interest will be charged on the Total Amount Due and on all new transactions  (from the transaction date) till such time as the previous outstanding   amounts are paid in full. Also, interest will be levied on all cash advances   from the date of the transaction until the date of payment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}


export default Creditcard
