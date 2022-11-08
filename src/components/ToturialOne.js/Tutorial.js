import React, {useState} from 'react'
// import "./Tutorial.css";
import TutorialOne from './TutorialOne';
import TutorialThree from './TutorialThree';
import TutorialTwo from './TutorialTwo';
const Tutorial = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalTwo, setOpenModalTwo] = useState(false);
    const [openModalThree, setOpenModalThree] = useState(false);

  return (
    <>
    <div className='App'>
        <h1>Click here</h1>
        <button className="openModalBtn" onClick={()=>{setOpenModal(true)}}>Open</button>
    
    </div>
    {openModal && <TutorialOne openModal={openModal} setOpenModal={setOpenModal}/>}
    {/* {openModalTwo && <TutorialTwo openModalTwo={openModalTwo} setopenModalTwo={setOpenModalTwo}/>}
    {openModalThree && <TutorialThree openModalThree={openModalThree} setOpenModal={setOpenModalThree}/>} */}

    </>
  )
}

export default Tutorial;