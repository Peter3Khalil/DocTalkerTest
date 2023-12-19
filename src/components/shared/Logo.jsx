import React from 'react'

const Logo = (props) => {
    return (
      <span {...props} className='font-bold'>
        <span className="text-primary-foreground bg-primary mr-1 p-1 rounded">Doc</span>Talker
      </span>
    )
  }

export default Logo