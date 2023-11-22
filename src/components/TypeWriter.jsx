import React, { use, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { done, notDone } from '../redux/slices/typingDone';
const TypeWriter = ({message,speed,setHeightOfContainer}) => {
    const dispatch = useDispatch();
    let i = useRef(0);
    let stopScrolling = useRef(false);
    const [text, setText] = useState("");
    const [scrollPosition,setScrollPosition] = useState(0)
    useEffect(()=>{
      let container = document.getElementById("chatContainer")
      if(!stopScrolling.current)setHeightOfContainer(container.scrollHeight)

      const handleScroll = ()=>{
        let currentPosition = container.scrollY || container.scrollTop
        if(currentPosition<scrollPosition){
          //Scrollup
          stopScrolling.current = true
        }else{
          stopScrolling.current = false
        }
        setScrollPosition(currentPosition)
      }
      container.addEventListener("scroll",handleScroll)
      return ()=>container.removeEventListener("scroll",handleScroll)

    },[text,scrollPosition])
    useEffect(() => {
        dispatch(notDone())
        setTimeout(()=>{
            setText(text+message.charAt(i.current))
            i.current++;
            if(text.length === message.length){
               dispatch(done())
            }
        },speed)
    }, [text]);
  return (
    <>{text}</>
  )
}

export default TypeWriter