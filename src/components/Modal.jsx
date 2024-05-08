import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModalView from "./ModalView";
import { useState } from "react";
import { yellowImg } from "../utils";


const Modal = () => {
  const [size, setsize] = useState();
  const [model, setModel] = useState({
    title: "iphone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7v9", "#6f6c64"],
    img: yellowImg,
  });

  useGSAP(()=>{
    gsap.to("#title",{
        y:0,
        opacity:1,
        delay:1
    })
  },[]);


  return (
   <section className="common-padding">
     <div  className="screen-max-width">
        <h1 id="title" className="section-heading">Take a closer look</h1>
     </div>
     <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                <ModalView/>
            </div>
     </div>
   </section>
  )
}

export default Modal;