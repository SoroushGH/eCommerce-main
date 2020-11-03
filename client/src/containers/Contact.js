import React from 'react';
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className='container contact'>
            <div className="row map">
                <div className="col-lg-12 text-center">
                    <h1>We Are Here!</h1>
                </div>
                <div className="col-lg-12">
                    <div className="gmap_canvas">
                        <iframe className='iframe' id="gmap_canvas" title="Location"
                            src="https://maps.google.com/maps?q=Aker%20Brygge%20oslo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="5px">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12">
                    <h2>Our Address</h2>
                    <p>
                        Stranden 3, 0250 Oslo<br />
                    Phone: <a href="tel://1-858-578-0414">+47 23 11 54 70</a> <br />
                    Fax: <a href="tel://1-858-578-0603">+47 23 11 54 70</a> <br />
                    Email: <a href="mailto:service@maliboblue.com?Subject=question" target="_top">service@maliboblue.com</a> <br />
                    </p>
                    <h2>Opening Hours</h2>
                    <p>
                        Monday to Saturday: 9am - 10pm <br />
                        Sundays: 10am - 6pm
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12">
                    <div className="content-section text-center">
                        <div className="p-5">
                            <h2>Contact Us</h2>
                            <p>If you wish to place an enquiry, please fill out your details in the form
                            below ensuring you select a suitable topic from the drop down box so that we can address your questions and comments appropriately. The more accurate
                            the information you provide us, the quicker we can respond to your enquiry.</p>
                        </div>
                        <div className="row text-center justify-content-md-center">

                            <div className="col-md-6 col-md-offset-3">
                                <form>
                                    <div class="form-group">
                                        <label for="Title"></label>
                                        <select class="form-control" id="Title" name="title">
                                            <option value="" disabled="" selected="">Title</option>
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Dr">Dr</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="First Name"></label>
                                        <input type="text" className="form-control" id="First Name" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="Last Name"></label>
                                        <input type="text" className="form-control" id="Last Name" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email"></label>
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label for="confirm email"></label>
                                        <input type="email" className="form-control" id="confirm email" placeholder="Confirm Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone"></label>
                                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label for="subject"></label>
                                        <select class="form-control" id="Title" name="Subject">
                                            <option value="" disabled="" selected="">Subject</option>
                                            <option value="General">General</option>
                                            <option value="Return Item">Return Item</option>
                                            <option value="Change Item">Change Item</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="comments"></label>
                                        <textarea className="form-control" id="comments" placeholder="Comments"></textarea>
                                    </div>
                                    <button type="button" className="btn contactBtn mt-5" disabled>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;