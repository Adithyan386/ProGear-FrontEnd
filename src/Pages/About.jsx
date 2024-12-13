import React from 'react';
import './about.css';

function About() {
  return (
    <>
      <div className="container-fluid mt-1">
        <div className="about">
          <h2 className="text-center">About Us:</h2>
          <p className="text-justify">
            Laptop accessories are peripheral devices or tools designed to enhance the functionality, convenience, and usability of laptops. These accessories range from practical items that boost productivity to protective gear and leisure gadgets. Here's an overview of the most popular laptop accessories. Our mission is to design and deliver high-quality, ergonomic, and eco-friendly laptop accessories that cater to the diverse needs of our customers. We are committed to enhancing user comfort, protecting devices, and contributing to a connected and sustainable future.
          </p>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 col-sm-12 vision text-center mb-3">
              {/* Optional: Add vision-related content here */}
            </div>
            <div className="col-md-6 col-sm-12 mission mt-4">
              <h3 className="text-center">Our Mission</h3>
              <p className="text-justify">
                "Our mission is to design and deliver high-quality, ergonomic, and eco-friendly laptop accessories that cater to the diverse needs of our customers. We are committed to enhancing user comfort, protecting devices, and contributing to a connected and sustainable future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
