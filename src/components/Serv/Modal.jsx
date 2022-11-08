import React from 'react'
// import { Data } from './data';

const Modal = ({modal, setModal, changeContent}) => {
  return (
    <div className="Modal-background">
    {modal.map((item)=>{
      return (
      <div className='Modal-container'>
    <button className='btn'>X</button>
    <div className='Modal-title'>
      <img src={item.img} alt={item.name} />
      <h1>{item.name}</h1>
    </div>
    <div className='Modal-body'>
        {item.details.map((detail)=>(
          <ul className="service__list">
      <li>
         {/* <BiCheck className="service__list-icon" />  */}
        <p>detail.list1</p>
      </li>
</ul>
      ))}
    </div>
    </div> )

    })}
  

    </div>
  )
}

export default Modal





