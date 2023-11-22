import React, { use, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { done, notDone } from '../redux/slices/typingDone';
const TypeWriter = ({message,speed}) => {
    const dispatch = useDispatch();
    let i = useRef(0);
    const [text, setText] = useState("");
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