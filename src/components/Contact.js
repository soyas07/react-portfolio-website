import React from 'react'

function Contact() {
    return (
        <section className="wrapper-primary contact-wrapper">
            <div className="vertical-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="187" viewBox="0 0 1 187">
                    <line id="Line_10" data-name="Line 10" y1="187" transform="translate(1)" fill="none" stroke="#ff0513" stroke-width="2"/>
                </svg>
            </div>
            <div className="contact-container">
                <h3>Let's Make Something Great Together</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                <form action="">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="phone" name="phone" placeholder="Phone#" />
                    <div className="contact-dropdown">
                        <select>
                            <option value="0">Budget</option>
                            <option value="1">Enquiry</option>
                            <option value="2">General</option>
                        </select>
                    </div>
                    <textarea placeholder="Message" ></textarea>
                    <button type="submit">Hire Me</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
