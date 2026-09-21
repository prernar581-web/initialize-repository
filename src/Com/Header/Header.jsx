import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            <span>Bagh</span>
            <small>AJABGARH</small>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? "main-nav active" : "main-nav"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="https://baghajabgarh-com.vercel.app/about-us" onClick={closeMenu}>About</a>
            <a href="https://baghajabgarh-com.vercel.app/rooms" onClick={closeMenu}>Rooms</a>
            <a href="https://baghajabgarh-com.vercel.app/gallery" onClick={closeMenu}>Gallery</a>
            
            
            <a href="https://baghajabgarh-com.vercel.app/contact" onClick={closeMenu}>Contact</a>

            <a
              href="https://wa.me/916350451080"
              target="_blank"
              rel="noreferrer"
              className="header-book"
            >
              Book Now
            </a>
          </nav>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="hero-section" id="home">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="hero-small">
              HERITAGE GARDEN SANCTUARY
            </p>

            <h1>
              A Sanctuary of
              <br />
              Heritage &amp; Quiet Luxury
            </h1>

            <p className="hero-text">
              Nestled opposite the historic Raghunath Temple,
              Bagh Ajabgarh brings together Rajasthan's heritage,
              peaceful surroundings and modern comfort.
            </p>

            <div className="hero-buttons">
              <a href="#rooms" className="gold-button">
                Explore Rooms
              </a>

              <a href="#contact" className="outline-button">
                Book Your Stay
              </a>
            </div>

          </div>

          <a href="#about" className="scroll-down">
            <span>Scroll to explore</span>
            <b><i class="fa fa-arrow-down" aria-hidden="true"></i>
</b>
          </a>

        </section>


        {/* ABOUT */}
        <section className="about-section section-padding" id="about">

          <div className="container about-grid">

            <div className="about-content">

              <p className="section-label">
                HERITAGE GARDEN RETREAT IN RAJASTHAN
              </p>

              <h2>
                Bagh Ajabgarh:
                <br />
                A Serene Heritage Escape
              </h2>

              <div className="gold-line"></div>

              <p>
                Nestled opposite the historic Raghunath Temple in
                Ajabgarh, Rajasthan, Bagh Ajabgarh is designed for
                travellers looking for peace, nature and heritage.
              </p>

              <p>
                Enjoy beautifully designed rooms, peaceful gardens,
                swimming pool views and scenic surroundings while
                experiencing the warmth of Rajasthan.
              </p>

              <a href="#rooms" className="text-button">
                Explore Our Suites <span><i class="fa fa-arrow-right" aria-hidden="true"></i>
</span>
              </a>

            </div>

            <div className="about-image-wrap">

              <div className="about-image-main">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/PROPERY-FACADE-VIEW-01.jpg"
                  alt="Bagh Ajabgarh property"
                />
              </div>

              <div className="about-image-small">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/OUTSIDE-LAKE-GARDEN-VIEW.jpg"
                  alt="Bagh Ajabgarh garden and pool"
                />
              </div>

              <div className="experience-box">
                <strong>Heritage</strong>
                <span>Garden Retreat</span>
              </div>

            </div>

          </div>


          <div className="container feature-row">

            <div className="feature-item">
              <span>01</span>
              <div>
                <h3>Lake &amp; Pool Views</h3>
                <p>Peaceful scenic surroundings</p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h3>Heritage Design</h3>
                <p>Inspired by Rajasthan</p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h3>Garden Courtyards</h3>
                <p>Quiet natural spaces</p>
              </div>
            </div>

            <div className="feature-item">
              <span>04</span>
              <div>
                <h3>Temple Nearby</h3>
                <p>Opposite Raghunath Temple</p>
              </div>
            </div>

          </div>

        </section>


        {/* ROOMS */}
        <section className="rooms-section section-padding" id="rooms">

          <div className="container">

            <div className="section-heading center">

              <p className="section-label">
                EXTRAORDINARY ACCOMMODATIONS
              </p>

              <h2>Choose Your Stay Type</h2>

              <p>
                Relax in thoughtfully designed rooms combining
                traditional character with modern comfort.
              </p>

            </div>


            <div className="rooms-grid">

              <div className="room-card">

                <div className="room-image">

                  <img
                    src="https://baghajabgarh-com.vercel.app/images/OUTSIDE-LAKE-VIEW.jpg"
                    alt="Lake view room"
                  />

                  <span className="room-tag">
                    LAKEFRONT VIEW
                  </span>

                </div>

                <div className="room-content">

                  <p>Luxury Suite</p>

                  <h3>Double Room with Lake View</h3>

                  <p className="room-description">
                    Wake up to peaceful views and enjoy a comfortable
                    stay surrounded by natural beauty.
                  </p>

                  <div className="room-info">
                    <span>2 Adults</span>
                    <span>King Bed</span>
                  </div>

                  <a
                    href="https://wa.me/916350451080?text=Hello%2C%20I%20am%20interested%20in%20the%20Lake%20View%20Room."
                    target="_blank"
                    rel="noreferrer"
                    className="room-button"
                  >
                    Inquire <i class="fa fa-arrow-right" aria-hidden="true"></i>

                  </a>

                </div>

              </div>


              <div className="room-card">

                <div className="room-image">

                  <img
                    src="https://baghajabgarh-com.vercel.app/images/PROPERY-FACADE-VIEW-02.jpg"
                    alt="Pool view room"
                  />

                  <span className="room-tag">
                    POOLFRONT VIEW
                  </span>

                </div>

                <div className="room-content">

                  <p>Luxury Suite</p>

                  <h3>Double Room with Pool View</h3>

                  <p className="room-description">
                    Enjoy the calming sight of the pool and gardens
                    from this peaceful accommodation.
                  </p>

                  <div className="room-info">
                    <span>2 Adults</span>
                    <span>King Bed</span>
                  </div>

                  <a
                    href="https://wa.me/916350451080?text=Hello%2C%20I%20am%20interested%20in%20the%20Pool%20View%20Room."
                    target="_blank"
                    rel="noreferrer"
                    className="room-button"
                  >
                    Inquire <i class="fa fa-arrow-right" aria-hidden="true"></i>

                  </a>

                </div>

              </div>


              <div className="room-card">

                <div className="room-image">

                  <img
                    src="https://baghajabgarh-com.vercel.app/images/OUTSIDE-LAKE-GARDEN-VIEW.jpg"
                    alt="Heritage room"
                  />

                  <span className="room-tag">
                    HERITAGE RETREAT
                  </span>

                </div>

                <div className="room-content">

                  <p>Heritage Room</p>

                  <h3>Premium Double Room</h3>

                  <p className="room-description">
                    A warm blend of Rajasthani character, comfortable
                    interiors and peaceful surroundings.
                  </p>

                  <div className="room-info">
                    <span>2 Adults</span>
                    <span>King Bed</span>
                  </div>

                  <a
                    href="https://wa.me/916350451080?text=Hello%2C%20I%20am%20interested%20in%20the%20Heritage%20Room."
                    target="_blank"
                    rel="noreferrer"
                    className="room-button"
                  >
                    Inquire <i class="fa fa-arrow-right" aria-hidden="true"></i>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* GALLERY */}
        <section className="gallery-section section-padding" id="gallery">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                GALLERY
              </p>

              <h2>Experience the Luxury</h2>

              <p>
                Explore the gardens, pool, lake views and heritage
                character of Bagh Ajabgarh.
              </p>

            </div>


            <div className="gallery-grid">

              <div className="gallery-item gallery-large">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/PROPERY-FACADE-VIEW-01.jpg"
                  alt="Property facade"
                />
                <div className="gallery-caption">
                  Heritage Property
                </div>
              </div>

              <div className="gallery-item">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/PROPERY-VIEW-01.jpg"
                  alt="Property view"
                />
                <div className="gallery-caption">
                  Lake View
                </div>
              </div>

              <div className="gallery-item">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/PROPERY-VIEW-02.jpg"
                  alt="Garden property"
                />
                <div className="gallery-caption">
                  Garden &amp; Pool
                </div>
              </div>

              <div className="gallery-item">
                <img
                  src="https://baghajabgarh-com.vercel.app/images/OUTSIDE-LAKE-VIEW.jpg"
                  alt="Pool and lake"
                />
                <div className="gallery-caption">
                  Peaceful Pool
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* FACILITIES */}
        <section className="facilities-section section-padding" id="facilities">

          <div className="container">

            <div className="section-heading center">

              <p className="section-label">
                FACILITIES &amp; SERVICES
              </p>

              <h2>Designed for Your Comfort</h2>

              <p>
                Everything you need for a peaceful and comfortable
                heritage stay.
              </p>

            </div>


            <div className="facilities-grid">

              <div className="facility-card">
                <span>01</span>
                <div className="facility-icon"><i class="fa fa-home" aria-hidden="true"></i>
</div>
                <h3>Elegant Heritage Rooms</h3>
                <p>
                  Spacious rooms and suites inspired by traditional
                  Rajasthani design.
                </p>
              </div>

              <div className="facility-card">
                <span>02</span>
                <div className="facility-icon"><i class="fa fa-check-circle" aria-hidden="true"></i>
</div>
                <h3>Check-in &amp; Check-out</h3>
                <p>
                  Check-in at 12:00 PM and check-out by 11:00 AM.
                </p>
              </div>

              <div className="facility-card">
                <span>03</span>
                <div className="facility-icon"><i class="fa fa-wifi" aria-hidden="true"></i>
</div>
                <h3>Free High-Speed WiFi</h3>
                <p>
                  Stay connected with internet access throughout
                  the property.
                </p>
              </div>

              <div className="facility-card">
                <span>04</span>
                <div className="facility-icon"><i class="fa fa-cutlery" aria-hidden="true"></i>
</div>
                <h3>In-House Dining</h3>
                <p>
                  Enjoy local Rajasthani and multi-cuisine meals.
                </p>
              </div>

              <div className="facility-card">
                <span>05</span>
                <div className="facility-icon"><i class="fa fa-home" aria-hidden="true"></i>
</div>
                <h3>Daily Housekeeping</h3>
                <p>
                  Clean and comfortable rooms with regular
                  housekeeping.
                </p>
              </div>

              <div className="facility-card">
                <span>06</span>
                <div className="facility-icon"><i class="fa fa-compass" aria-hidden="true"></i>
</div>
                <h3>Prime Location</h3>
                <p>
                  Located opposite the historic Raghunath Temple
                  in Ajabgarh.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ACTIVITIES */}
        <section className="activities-section section-padding" id="activities">

          <div className="container">

            <div className="activities-grid">

              <div className="activities-heading">

                <p className="section-label">
                  EXPLORE &amp; EXPERIENCE
                </p>

                <h2>Activities &amp; Excursions</h2>

                <p>
                  Discover heritage, nature and local culture around
                  Ajabgarh and its beautiful surroundings.
                </p>

              </div>


              <div className="activity-list">

                <div className="activity-column">

                  <h3>Nearby Activities</h3>

                  <ul>
                    <li>Bhangarh Fort</li>
                    <li>Sariska</li>
                    <li>Pandu Pol Temple</li>
                    <li>Neelkanth Mahadev</li>
                    <li>Raghunath Temple</li>
                  </ul>

                </div>


                <div className="activity-column">

                  <h3>Local Excursions</h3>

                  <ul>
                    <li>Som Sagar Lake</li>
                    <li>Nature Walk</li>
                    <li>Pottery Class</li>
                    <li>Village Tour</li>
                    <li>Bicycle Trips</li>
                    <li>Jaisagar Dam Sundowner</li>
                    <li>Lake Side High Tea</li>
                    <li>Bird Watching</li>
                    <li>Night Nature Drive</li>
                    <li>Rajasthani Folk Night</li>
                  </ul>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section className="contact-section section-padding" id="contact">

          <div className="container">

            <div className="contact-grid">

              <div className="contact-content">

                <p className="section-label">
                  FIND US
                </p>

                <h2>Contact &amp; Location</h2>

                <p className="contact-intro">
                  Have questions about our rooms or ready to reserve
                  your stay? Get in touch with us today.
                </p>


                <div className="contact-info">

                  <div className="contact-item">
                    <span className="contact-icon"><i class="fa fa-address-card" aria-hidden="true"></i>
</span>
                    <div>
                      <small>ADDRESS</small>
                      <p>
                        Opposite Raghunath Temple,
                        Ajabgarh, Guwara Birkari,
                        Rajasthan 301027
                      </p>
                    </div>
                  </div>


                  <div className="contact-item">
                    <span className="contact-icon"><i class="fa fa-phone" aria-hidden="true"></i>
</span>
                    <div>
                      <small>PHONE</small>
                      <p>
                        +91 63504 51080
                      </p>
                    </div>
                  </div>


                  <div className="contact-item">
                    <span className="contact-icon"><i class="fa fa-envelope" aria-hidden="true"></i>
</span>
                    <div>
                      <small>EMAIL</small>
                      <p>
                        baghajabgarh@gmail.com
                      </p>
                    </div>
                  </div>


                  <div className="contact-item">
                    <span className="contact-icon"><i class="fa fa-clock-o" aria-hidden="true"></i>
</span>
                    <div>
                      <small>AVAILABILITY</small>
                      <p>
                        24/7 Front Desk Support
                      </p>
                    </div>
                  </div>

                </div>


                <div className="contact-buttons">

                  <a
                    href="https://baghajabgarh-com.vercel.app/contact"
                    target="_blank"
                    rel="noreferrer"
                    className="gold-button"
                  >
                    Book Now
                  </a>

                  <a
                    href="https://maps.app.goo.gl/"
                    target="_blank"
                    rel="noreferrer"
                    className="outline-button dark-outline"
                  >
                    Get Directions
                  </a>

                </div>

              </div>


              <div className="map-box">

                <div className="map-content">

                  <div className="map-pin">
                    ⌖
                  </div>

                  <h3>Bagh Ajabgarh</h3>

                  <p>
                    Opposite Raghunath Temple
                    <br />
                    Ajabgarh, Rajasthan
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bagh+Ajabgarh+Rajasthan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="cta-section">

          <div className="cta-overlay"></div>

          <div className="cta-content">

            <p className="section-label light-label">
              YOUR HERITAGE ESCAPE AWAITS
            </p>

            <h2>
              Ready for an Unforgettable
              <br />
              Experience?
            </h2>

            <p>
              Immerse yourself in the peaceful luxury of Bagh Ajabgarh.
            </p>

            <a
              href="https://wa.me/916350451080"
              target="_blank"
              rel="noreferrer"
              className="gold-button"
            >
              Book Your Stay
            </a>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="footer">

          <div className="container footer-grid">

            <div className="footer-brand">

              <a href="#home" className="footer-logo">
                Bagh
                <span>AJABGARH</span>
              </a>

              <p>
                A peaceful heritage garden retreat in Ajabgarh,
                Rajasthan, offering scenic views, comfortable
                accommodation and warm hospitality.
              </p>

            </div>


            <div className="footer-column">

              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#rooms">Rooms</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>

            </div>


            <div className="footer-column">

              <h3>Contact Info</h3>

              <p>
                Opposite Raghunath Temple,
                Ajabgarh, Rajasthan 301027
              </p>

              <a href="tel:+916350451080">
                +91 63504 51080
              </a>

              <a href="mailto:baghajabgarh@gmail.com">
                baghajabgarh@gmail.com
              </a>

            </div>


            <div className="footer-column">

              <h3>Connect</h3>

              <div className="social-links">

                <a href="https://www.facebook.com/baghajabgarh" aria-label="Facebook">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>

                </a>

                <a href="https://www.instagram.com/baghajabgarh" aria-label="Instagram">
                  <i class="fa fa-instagram" aria-hidden="true"></i></a>

                <a href="https://www.youtube.com/watch?v=7WyvOICiq_w" aria-label="YouTube">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>

                </a>

              </div>

            </div>

          </div>


          <div className="footer-bottom">

            <div className="container">

              <p>
                © 2026 Bagh Ajabgarh. All rights reserved.
              </p>

              <p>
                Made with ❤️ by Team BrandMyHotel


              </p>

            </div>

          </div>

        </footer>

      </main>
    </>
  );
};

export default Header;