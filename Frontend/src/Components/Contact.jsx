import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Contact.css"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form validation
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.subject) formErrors.subject = 'Subject is required';
    if (!formData.message) formErrors.message = 'Message is required';

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the data
      console.log('Form Data Submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };
  return (
    <>
    <Navbar/>
    { <div className='min-h-screen'>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
      <div className='py-28 items-center justify-center text-center'> 
        <h1 className='text-2xl md:text-4xl'>
          Contact Us
        </h1>
        <p className='mt-12'>We’d love to hear from you! Whether you have a question about your order, need book recommendations, or just want to say hello, our team is here to help. Reach out to us using any of the methods below.</p>
        
      </div>
      <div className='mt-16 three-boxes items-center justify-center text-center'>
        <div className='b1'>
          <h1 className='text-l md:text-xl my-4'>Customer Support</h1>
          <div className='my-2 text-sm'><span className='font-bold'>Email Us :</span> For any inquiries or support, email us at:
          support@bookophia.com</div>
          
          <div className='my-2 text-sm'><span className='font-bold'>Call Us :</span> Our support team is available Monday to Friday, 9 AM to 6 PM.
          Phone: [+1 (123) 456-7890]</div>
        </div>
        <div className='b2'>
        <h1 className='text-l md:text-xl my-4'>Visit Our Store</h1>
          <div className='my-2 text-sm'><span className='font-bold'>Office Address :</span> Book-O-Phia,
123 Book Street, Suite 456
Indore, Madhya Pradesh, 452006
India</div>
          
        </div>
        <div className='b3'>
        <h1 className='text-l md:text-xl my-4'>Follow Us On Social Media</h1>
          <div className='my-2 text-sm'><span className='font-bold'>Facebook :</span> <a className='text-blue-600' href="">facebook.com/bookophia</a></div>
          <div className='my-2 text-sm'><span className='font-bold'>Instagram :</span> <a className='text-blue-600' href="">instagram.com/bookophia</a></div>
          <div className='my-2 text-sm'><span className='font-bold'>Twitter :</span> <a className='text-blue-600' href="">twitter.com/bookophia</a></div>
        </div>
      </div>
      <div className='mt-28 items-center justify-center text-center'> 
        <h1 className='text-xl md:text-3xl'>
          Send us a message
        </h1>
        <p className='mt-4'>If you prefer, you can send us a message directly using the form below, and we’ll get back to you as soon as possible.</p>
        <div className=" mt-10 contact-form">
      <h2>Contact Us</h2>
      {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
        
      </div>
    </div>
     </div> }
     
     <Footer/> 
    </>
  )
}

export default Contact
