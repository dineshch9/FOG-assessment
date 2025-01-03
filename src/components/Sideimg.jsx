import React from 'react'

const Sideimg = (props) => {
  return (
    <div className="flex grow order-1 flex-col gap-4 items-center justify-center">
              <img className=" w-12" src={props.img} alt="" />
              
             </div>
  )
}

export default Sideimg