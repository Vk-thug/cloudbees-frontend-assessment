
import React, {useState} from 'react';
import { BsArrowUp } from 'react-icons/bs';


const ScrollArrow = () =>{
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)

return (
    <div className={`scrollTop fixed w-12 h-12 right-5 bottom-5 rounded-full p-3 justify-center items-center bg-[#01014a] dark:bg-[#fd4c74]`} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}>
        <BsArrowUp className="w-full h-full text-white dark:text-white"/>
    </div>
);
}

export default ScrollArrow;