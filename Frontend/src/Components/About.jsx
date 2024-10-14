import React from 'react';
import "./About.css"
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="py-28 about-us-container">
      {/* Main Heading */}
     
      
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to Book-O-Phia – A Haven for Book Lovers</h2>
        <p>
          At <strong>Book-O-Phia</strong>, we believe that books have the power to change lives. Founded in [Year], our mission is simple: to connect readers with the stories, knowledge, and inspiration they seek. Whether you’re a lifelong bookworm or just beginning your reading journey, we provide a space where you can explore, discover, and immerse yourself in the world of books.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <h2>Our Story</h2>
        <p>
        Book-O-Phia was born out of a deep passion for books and a desire to create an accessible platform for readers everywhere. What started as a small collection of handpicked titles has grown into an expansive library featuring thousands of books across all genres. From timeless classics to contemporary bestsellers, we curate our collection to ensure there’s something for everyone.
        </p>
        <p>
          We aim to make book buying not only convenient but also an enjoyable experience. That’s why we provide personalized recommendations, offer exclusive deals, and keep our customers at the heart of everything we do.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Wide Selection:</strong> With thousands of books across various categories like fiction, non-fiction, children’s literature, self-help, and more, you’ll always find the perfect read for your taste and mood.
          </li>
          <li>
            <strong>Affordable Prices:</strong> We believe that books should be accessible to everyone, so we work tirelessly to offer competitive prices, exciting discounts, and free books in select categories.
          </li>
          <li>
            <strong>Personalized Experience:</strong> With our tailored recommendations and wish-list feature, we help you discover new favorites based on your preferences.
          </li>
          <li>
            <strong>Seamless Shopping:</strong> From browsing to buying, our easy-to-use platform ensures a smooth and enjoyable shopping experience, whether you're on your computer or mobile device.
          </li>
          <li>
            <strong>Global Reach:</strong> No matter where you are, we deliver books to your doorstep. With shipping options available worldwide, we ensure your favorite stories are always within reach.
          </li>
        </ul>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Customer First:</strong> Our customers are at the heart of everything we do. We value your trust, and we are committed to providing excellent customer service.
          </li>
          <li>
            <strong>Passion for Books:</strong> We live and breathe books. Our team is made up of avid readers and literary enthusiasts who are always excited to help you find your next great read.
          </li>
          <li>
            <strong>Diversity & Inclusion:</strong> We believe in the power of diverse stories. We strive to provide a platform that amplifies voices from all backgrounds, cultures, and perspectives.
          </li>
          <li>
            <strong>Sustainability:</strong> We are committed to environmentally conscious practices and work with publishers and distributors that share our values in creating a greener planet.
          </li>
        </ul>
      </section>

      {/* Meet Our Team Section */}
      <section className="meet-our-team-section">
        <h2>Meet Our Team</h2>
        <p>
          Behind every great bookstore is a team of dedicated individuals who share a love for books. Our team is composed of book curators, customer service experts, and technology enthusiasts who work tirelessly to bring the best experience to you.
        </p>
        <p>
          Whether it's selecting the best books for our shelves or helping you with your order, we are here to serve you. At Book-O-Phia, you’ll always find a friendly face (or email!) ready to assist.
        </p>
      </section>

      {/* Join Our Community Section */}
      <section className="join-community-section">
        <h2>Join Our Community</h2>
        <p>
          At Book-O-Phia, we don’t just sell books – we foster a community of book lovers. Join our online community to:
        </p>
        <ul>
          <li>Share Reviews: Tell us what you think about your favorite reads.</li>
          <li>Stay Updated: Receive the latest book recommendations, new arrivals, and exclusive offers.</li>
          <li>Get Involved: Be part of our events, virtual book clubs, and reading challenges.</li>
        </ul>
      </section>

      {/* Get In Touch Section */}
      <section className="get-in-touch-section">
        <h2>Get In Touch</h2>
        <p>
          We’re always here to help you with anything you need. Whether it’s a question about an order or a recommendation for your next read, feel free to <a href="/contact">contact us</a> anytime!
        </p>
      </section>

      {/* Our Promise Section */}
      <section className="our-promise-section">
        <h2>Our Promise to You</h2>
        <p>
          We are committed to making Book-O-Phia your go-to destination for all your reading needs. Whether you're looking for the next bestseller, a hard-to-find classic, or the perfect gift for a fellow book lover, we promise to offer the best selection, prices, and service.
        </p>
        <p>Thank you for being a part of our story – happy reading!</p>
      </section>
    </div>
    <Footer/>
    </>
  );

};

export default AboutUs;
