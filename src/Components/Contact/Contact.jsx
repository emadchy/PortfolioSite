import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  // State to manage the form submission result
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append the access key
    formData.append("access_key", "051a3156-2849-4094-97b9-ed8fd36fe881");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();  // Reset the form fields
      } else {
        setResult(`Error: ${data.message}`);
        console.error("Form submission error:", data);
      }
    } catch (error) {
      setResult("Error submitting the form.");
      console.error("Network error:", error);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>emad.chy96@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+1(437)8082167</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>ON, Canada</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <input type="hidden" name="access_key" value="051a3156-2849-4094-97b9-ed8fd36fe881"/>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
        {/* Display form submission result */}
        {result && <p className="result-message">{result}</p>}
      </div>
    </div>
  )
}

export default Contact;
