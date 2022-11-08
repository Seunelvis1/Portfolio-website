import React from 'react';
import ServiceOne from './FavServOne';
import "./FavServ.css"
import ServiceThree from './FavServThree';
import ServiceTwo from './FavServTwo';

const Services = () => {
  return (
    <section id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className=" container services_container container">
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
        </div>
    </section>
  );
};

export default Services;
