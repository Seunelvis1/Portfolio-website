import React from 'react'

const TutorialThree = ({openModal, setOpenModal}) => {
    return (
      <div className='modalBackground'>
          <div className='modalContainer'>
          <div className='titleCloseBtn'>
          <button onClick={()=>{setOpenModal(false)}}>X</button>
          </div>
          <div className='title'>
              <h1>Frontend Development</h1>
          </div>
          <div className='body'>
              <ul>
                  <li>kjdksajflds;lk;flkds;lkf</li>
                  <li>kjdksajflds;lk;flkds;lkf</li>
                  <li>kjdksajflds;lk;flkds;lkf</li>
  
              </ul>
          </div>
          <div className='footer'>
              <button>Skip</button>
              <button>continue</button>
  
          </div>
          </div>
      </div>
    )
  }
export default TutorialThree