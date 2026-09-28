import React from 'react'

const paragraph = (props) => {
    return (
       <div className='text-center'>
         <p className="mt-6 max-w-xl  lg:text-[28px] leading-[1.1] text-white/80  sm:text-base">
            {props.p}
        </p>
       </div>
    )
}

export default paragraph