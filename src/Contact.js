import React from 'react'
import "animate.css"


const Contact = () => {
    return (
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
                <title>Contact Me</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="maint">Contact Me</h1>
                    <div class="section animated bounceInLeft">
                        <div class="brandname">
                            <h3>Prateek Singh</h3>
                            <ul>
                                <li>prateeksingh.psk1@gmail.com</li>
                                <li>https://www.linkedin.com/in/prateeksingh1301/</li>
                            </ul>
                        </div>
                        <div class="contact">
                            <h3>Email Me</h3>
                            <form action="#">
                                <p>
                                    <label for="#">Name</label>
                                    <input type="text" name="name"></input>
                                </p>
                                <p>
                                    <label for="#">Company</label>
                                    <input type="text" name="company"></input>
                                </p>
                                <p>
                                    <label for="#">Email Address</label>
                                    <input type="email" name="email"></input>
                                </p>
                                <p>
                                    <label for="#">Phone Number</label>
                                    <input type="text" name="phone"></input>
                                </p>
                                <p class="full">
                                    <label for="#">Message</label>
                                    <textarea name="message" cols="30" rows="5"></textarea>
                                </p>
                                <p class="full">
                                    <button>Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}


export default Contact;