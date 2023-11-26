import { useState } from "react";

function useAutoScroll(ref) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [heightOfContainer, setHeightOfContainer] = useState(0);
  let stopScrolling = useRef(false);
  const container = document.getElementById("chatContainer");

  const handleScroll = () => {
    let currentPosition = ref.current.scrollY || ref.current.scrollTop;
    if (currentPosition < scrollPosition) {
      //Scrollup
      stopScrolling.current = true;
    } else {
      stopScrolling.current = false;
    }
    setScrollPosition(currentPosition);
  };
  useEffect(() =>{
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  },[scrollPosition]);
}
