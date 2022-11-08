import React from "react";
import "./Tutorial.css";

const TutorialThree = ({ openModalThree, setOpenModalThree }) => {
  return (
    <div className="modal-Backgroundd">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalThree(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Administrator</h1>
          <h4>Research and Logistics</h4>
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
export default TutorialThree;
