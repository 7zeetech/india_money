import React from 'react'
import "../Assect/css/Footer.css"
import whatsapp from "../Assect/image/whatsapp-1.png"
import phone from "../Assect/image/pngwing-2.png"
import mail from "../Assect/image/pngwing-1.png"
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='App'>
            <div className='custom-footer'>
                <div className='container'>
                    <div className='custom-inside-footer'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <div className='custom-left-side-fotter'>
                                            <h2 className='mb-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>QUICK LINKS</h2>

                                            <p className='mt-3'>Indiamoney does not buy stolen or
                                                broken gold. Selling stolen gold or
                                                fake gold is a criminal offense and
                                                if identified, the person and
                                                ornaments will be handed over to
                                                the POLICE. Anyone age of 21
                                                or less can sell gold only with
                                                Parent/guardian's written letter</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='custom-left-one-side-footer'>
                                            <h2>REACH US</h2>
                                            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <img src={whatsapp} alt='' style={{ marginRight: '8px', width: '20px', height: '20px', fontWeight: "bold" }} /> 9150740976
                                            </p>
                                            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <img src={phone} alt='' style={{ marginRight: '8px', width: '20px', height: '20px', fontWeight: "bold" }} /> 6379251627
                                            </p>
                                            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <img src={mail} alt='' style={{ marginRight: '8px', width: '20px', height: '20px' }} />
                                                <h6 className='fw-bold' style={{ margin: 0 }}> admin@indiamoney.co.in</h6>
                                            </p>
                                            <h6 className='fw-bold'>State Presence :</h6>
                                            <p>No.18, Level 1, Devchand House Block-A, Dr Annie Besant Rd, Shiv Sagar Estate, Worli, Mumbai, Maharashtra 400018</p>
                                            <h6 className='mt-3'>Admin Office :</h6>
                                            <p> No.10/11, 6th Floor , Chennai City Centre, , Dr Radha Krishnan Salai, Chennai, Tamil Nadu 600004</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='custom-left-one-side-fotter'>
                                            <h2>OUR SERVICES </h2>
                                            <ul class="custom-list">
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Cash For Gold</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Financial</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Home Loan</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Personal Loan</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ cursor: "pointer" }}>Registration</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>GST & Tax</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Instant Bank Transfer</li>
                                            </ul>
                                            <h6 className='fw-bold'>Follow us on social platforms</h6>
                                            <div className='d-flex custom-icons mt-3 mb-3'>
                                                <p><FaYoutube /></p>
                                                <p><FaFacebook /></p>
                                                <p><FaInstagram /></p>
                                                <p><FaTwitter /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='custom-left-one-side-fotter'>
                                            <h2 data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>QUICK LINKS</h2>
                                            <ul class="custom-list">
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Discover Indiamoney Finserv</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Release Pledged Gold</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Vision and Mission</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Founder's Message</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>History and Milestones</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>License and Certificates</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Gold Price Escalation</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>Flickr Gallery</li>
                                                <li class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop-1" style={{ cursor: "pointer" }}>FAQS</li>
                                            </ul>


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

export default Footer