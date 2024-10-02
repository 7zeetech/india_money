import React from 'react'
import "../Assect/css/Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import coin from "../Assect/image/logo.png"
import pay1 from "../Assect/image/1.png"
import pay2 from "../Assect/image/2.png"
import pay3 from "../Assect/image/3.png"
import pay4 from "../Assect/image/4.png"
import pay5 from "../Assect/image/5.png"
import pay6 from "../Assect/image/6.svg"
import pay7 from "../Assect/image/7.png"
import pay8 from "../Assect/image/8.svg"
import pay9 from "../Assect/image/9.svg"
import pay10 from "../Assect/image/10.png"
import { SiMarketo } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa6";
import { MdCreditScore } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import comeing from "../Assect/image/coming-soon.jpg"
import stop from "../Assect/image/Onestop-Shop.jpg"
import callbtn from '../Assect/image/call-icon.png'
import { MdPhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";


function Navbar() {
    return (
        <div>
            <div className="App">
                <div className="container-fluid">


                    {/* <div className='custom-web-nav'>
                        <div className="custom-nav-bar">
                            <div className="container">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary custom-inside-nav">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="#">Praveen</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                    <a class="nav-link active" aria-current="page" href="/">ATM Locator</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Bank Account</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">EMI Caculator</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Shop Locator</a>
                                                </li>

                                            </ul>
                                            <form class="d-flex" role="search">
                                                <div className="search-container">
                                                    <input
                                                        className="form-control me-2 custom-form-1"
                                                        type="search"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                    <IoSearchSharp className="search-icon" />
                                                </div>

                                                <button class="btn btn-outline-success" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        
                        <div className='custom-second-2'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='row align-items-center'>
                                            <div className='col-lg-5'>
                                                <div className='custom-inside-second-2'>
                                                    <div className='d-flex align-items-center'>
                                                        <img src={coin} alt="" />
                                                        <div className='ms-2'>
                                                            <h3 className='fw-bold'>Indiamoney Finserv </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-7'>
                                                <div className='ms-4  custom-button-second-nav'>
                                                    <button className='custom-button'>Credit Score</button>
                                                    <button className='custom-button'>Cibil Correction</button>
                                                    <a href="/goldbuyer"><button className='custom-button'>Sell your gold</button></a>
                                                    <button className='custom-button'>Start up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <<<<<<<<<<<<<<<<<<<<<mobile-navbarstrat>>>>>>>>>>>>>>>>>>>>>> */}
                    {/* <div className='custom-mobile-nav'>
                        <div className="custom-nav-bar">
                            <div className="container">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary custom-inside-nav">
                                    <div class="container-fluid">
                                        <a class="navbar-brand d-flex custom-lo-1" href="#">
                                            <div>
                                                <img className='custom-mobile-logo' src={coin} alt="" />
                                                <p> Indiamoney Finserv</p>
                                            </div>

                                        </a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                    <a class="nav-link active" aria-current="page" href="/">ATM Locator</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Bank Account</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">EMI Caculator</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Shop Locator</a>
                                                </li>

                                            </ul>
                                            <form class="d-flex" role="search">
                                                <div className="search-container">
                                                    <input
                                                        className="form-control me-2 custom-form-1"
                                                        type="search"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                    <IoSearchSharp className="search-icon" />
                                                </div>

                                                <button class="btn btn-outline-success" type="submit">Search</button>
                                            </form>


                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div> */}
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


                    {/* <div className='custom-credit-buttom'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-6 col-md-4'>
                                            <div className='custom-web-button-1'>
                                                <button className='custom-button-2'>Credit Score</button>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='custom-web-button-1'>
                                                <button className='custom-button-2'>Cibil Correction</button>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='custom-web-button-1'>
                                                <button className='custom-button-2'>Sell your gold</button>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='custom-web-button-1'>
                                                <button className='custom-button-2'>Start up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='custom-payment-mobile'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <MdCreditScore  className='custom-mobile-icon-1'/>
                                                <p>Credit Score</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <SiMarketo  className='custom-mobile-icon-2'/>
                                                <p>Cibil Correction</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <a href='/goldbuyer'>
                                                    <FaCoins className='custom-mobile-icon-4'/>
                                                    <p>Sell your gold</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                            <IoDocumentTextOutline  className='custom-mobile-icon-3'/>
                                                <p>Start up</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <<<<<<<<<<<<<<<<<payment-navbar-web>>>>>>>>>>>> */}
                    {/* <div className='custom-payment-web'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='custom-payment-inside d-flex'>
                                        <div className='me-4 text-center'>
                                            <img src={pay1} alt=""></img>
                                            <p>Credit Card</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay2} alt=""></img>
                                            <p>Financial Markets</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay3} alt=""></img>
                                            <p>Insurance</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay4} alt=""></img>
                                            <p>Investments</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay5} alt=""></img>
                                            <p>Loan</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay6} alt=""></img>
                                            <p>Payment</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <a href='/register'>
                                                <img src={pay7} alt=""></img>
                                                <p>Registration</p>
                                            </a>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay8} alt=""></img>
                                            <p>Savings</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay9} alt=""></img>
                                            <p>Stamp Paper</p>
                                        </div>
                                        <div className='me-4 text-center'>
                                            <img src={pay10} alt=""></img>
                                            <p>Tax</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>>> */}


                    {/* <<<<<<<<<<<<<<<<<<<<<payment-navbar-mobile>>>>>>>>>>>>> */}
                    {/* <div className='custom-payment-mobile'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay1} alt=""></img>
                                                <p>Credit Card</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay2} alt=""></img>
                                                <p>Financial Markets</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay3} alt=""></img>
                                                <p>Insurance</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay4} alt=""></img>
                                                <p>Investments</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay5} alt=""></img>
                                                <p>Loan</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay6} alt=""></img>
                                                <p>Payment</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center  pay-box'>
                                                <a href='/register'>
                                                    <img src={pay7} alt=""></img>
                                                    <p>Registration</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay8} alt=""></img>
                                                <p>Savings</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay9} alt=""></img>
                                                <p>Stamp Paper</p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-4'>
                                            <div className='me-4 text-center pay-box'>
                                                <img src={pay10} alt=""></img>
                                                <p>Tax</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end>>>>>>>>>>>>>>>>>> */}



                    <div className='custom-navbar-1'>
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <a class="navbar-brand fw-bold justify-content-center align-items-center d-flex" href="/"> <img className='custom-mobile-logo me-2' src={coin} alt="" /> <p className=' custom-mobile-nv-h'>INDIAMONEY</p></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav  mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">ATM LOCATOR</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">BANK ACCOUNT</a>
                                        </li>
                                        <li class="nav-item"  data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">

                                            <a class="nav-link" href="#">CREDIT SCORE</a>

                                        </li>
                                        <li class="nav-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                                            <a class="nav-link" href="#">CIBIL CORRECTION</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">EMI CALCULATOR</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">SHOP LOCATOR</a>
                                        </li>

                                    </ul>
                                     
                                       
                                       <p className='ms-2 num_txt text-white' > <img src={callbtn} ></img> 9150740976</p> 
                                     

                                </div>
                            </div>
                        </nav>
                    </div>



                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1">
                        Launch static backdrop modal
                    </button> */}


                    <div class="modal fade" id="staticBackdrop-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content  custom-top-modal">
                                <div class="modal-header  custom-header-modal">
                                    <h1 class="modal-title fs-12 fw-bold" id="staticBackdropLabel-1"></h1>
                                    <button type="button" class="modal-button" data-bs-dismiss="modal" aria-label="Close"><RxCross2 /></button>
                                </div>
                                <div class="modal-body">
                                    <div className='commeing-soon-modal'>
                                        <img src={comeing}></img>
                                       
                                        <p className='text-center fw-bold '> <span>One Stop Solution</span><br></br> For All Your Financial Needs</p>

                                    </div>
                                    <div>
                                        <div className='d-flex mt-4 align-items-baseline'>
                                           
                                            <p className='mt-0 ms-3 fs-5 contact-1'><MdPhoneInTalk /> 9150740976</p>
                                        </div>
                                        <div className='d-flex mt-4  align-items-baseline'>
                                          
                                            <p className='mt-0 ms-3 fs-5  contact-1'><CiMail /> admin@indiamoney.co.in</p>
                                        </div>


                                    </div>
                                </div>
                                {/* <div class="modal-footer border-0">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar