import React from "react";
import "./Tutorial.css";

const TutorialTwo = ({ openModalTwo, setOpenModalTwo }) => {
  return (
    <div className="modal-Backgroundd">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalTwo(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Email Marketing</h1>
        </div>
        <div className="body">
          <ul>
            <li>kjdksajflds;lk;flkds;lkf</li>
            <li>kjdksajflds;lk;flkds;lkf</li>
            <li>kjdksajflds;lk;flkds;lkf</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TutorialTwo;
