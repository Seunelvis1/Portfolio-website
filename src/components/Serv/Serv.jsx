import React, { useState } from "react";
import "./services.css";
// import "./servicess.css";
import Modal from "./Modal";
import TutorialOne from "./TutorialOne";
import TutorialThree from "./TutorialThree";
import TutorialTwo from "./TutorialTwo";
// import {BiCheck} from 'react-icons'
// import { Data } from './data';
const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [openModalThree, setOpenModalThree] = useState(false);
  //   const [modal, setModal] = useState([]);
  //  const changeContent =(data)=>{
  //   setModal([data])
  //  }
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        {/* <div class="services"> */}
        <div class="row">
          <i class="bx bx-cast"></i>
          <h2>Web Development</h2>
          <p>
            jjdhbhkdfnkjahfdkjksjfkljdkljgklfj
            <br />
            dskljfkljdklsjklf jfjshfhsfjksjfjgskljfk
          </p>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            View More
          </button>
        </div>
        {openModal && (
          <TutorialOne openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <div class="row">
          <i class="bx bx-line-chart"></i>
          <h2>Email Marketing</h2>
          <p>
            jjdhbhkdfnkjahfdkjksjfkljdkljgklfjds
            <br />
            kljfkljdklsjklf jfjshfhsfjksjfjgskljfk
          </p>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModalTwo(true);
            }}
          >
            View More
          </button>
        </div>
        {openModalTwo && (
          <TutorialTwo
            openModalThree={openModalTwo}
            setOpenModalTwo={setOpenModalTwo}
          />
        )}
        {/* {openModal && <TutorialTwo openModal={openModal} setOpenModal={setOpenModal}/>} */}
        <div class="row">
          <i class="bx bx-camera"></i>
          <h2>Administrator and Research</h2>
          <p>
            jjdhbhkdfnkjahfdkjksjfkljdkljgklfjdskljf
            <br />
            kljdklsjklf jfjshfhsfjksjfjgskljfk
          </p>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModalThree(true);
            }}
          >
            View More
          </button>
        </div>
        {openModalThree && (
          <TutorialThree
            openModalThree={openModalThree}
            setOpenModalThree={setOpenModalThree}
          />
        )}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
