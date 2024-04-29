import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

function Hero() {
  const [videoSrc,setVideoSrc] = useState(window.innerWidth<750?smallHeroVideo:heroVideo);

  useGSAP(()=>{
    gsap.to("#hero",{
        opacity:1,
        delay:1.5
    })
    gsap.to("#cta",{
        y:-50,
        opacity:1,
        delay:2
    })
  },[]);

  const handleVideoSrcSet = () =>{
     if(window.innerWidth<750){
        setVideoSrc(smallHeroVideo)
     }else{
        setVideoSrc(heroVideo);
     }
  }

  useEffect(()=>{
    window.addEventListener("resize",handleVideoSrcSet);
    return ()=>{
        window.addEventListener("resize",handleVideoSrcSet);
    }
  },[])

  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex flex-col flex-center">
            <p  id="hero" className="hero-title">IPhone 15</p>
            <div className="md:w-5/6 w-9/12">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div  id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>

            <p1 className="font-normal text-xl">From $199/month or $999</p1>
        </div>
    </section>
  )
}

export default Hero