import { useEffect } from "react"
import { useLocation } from "react-router"

export const ScrollToTop = () => {

  const location= useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])
  return (null)
}
