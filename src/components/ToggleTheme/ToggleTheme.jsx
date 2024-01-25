import React, { useState } from 'react'
import useTheme from './hooks/useTheme';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
const ToggleTheme = (props) => {
    const [nextTheme, setTheme] = useTheme();
    const [themeColor, setthemeColor] = useState(true);
    const toggleClass = " transform translate-x-5 md:translate-x-6 lg:translate-x-8";
    const handleSwitch = () => {
        props.setToggle(!props.toggle);
        setTheme(nextTheme);
        setthemeColor(!themeColor);
    }
  return (
    <React.Fragment>
        <div className="lg:mr-2 sm:mr-2 md:w-16 md:h-8 w-12 h-6 flex items-center bg-color-2a rounded-full p-1 cursor-pointer" onClick={handleSwitch}>
            <div className={"bg-color-2 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" + (props.toggle ? null : toggleClass)}>
                { props.toggle ? <BsSun className="p-[2px] w-full h-full flex justify-center items-center dark:text-white"></BsSun> :
                <BiMoon className="p-[2px] w-full h-full flex justify-center items-center dark:text-white"></BiMoon>}
            </div>
        </div>
    </React.Fragment>
  )
}

export default ToggleTheme