import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Footer } from '../../blocks'
import { Navbar } from '../../components'

const WebLayout = (props) => {
    const [toggle, setToggle] = useState(false);
    const ScrollArrow = dynamic(() => import('../../components/ScrollArrow/ScrollArrow'), {
      ssr: false,
    })
  return (
    <React.Fragment>
        <Navbar toggle={toggle} setToggle={setToggle}  />
        {props.children}
        <ScrollArrow />
        <Footer toggle={toggle} setToggle={setToggle} />
    </React.Fragment>
  )
}

export default WebLayout