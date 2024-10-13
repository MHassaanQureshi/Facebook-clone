import Style from "./Profile.module.css"
import Bar from "../components/bottomBar/Bar";
import Button from "../components/button/Button";
import Transbut from "../components/transparent-button/Transbut";
import PMB from "../components/Profile-menu/PMB";
import About from "../components/About-person/About";
export default function Profile(){
    return(
        <>
        <div className={Style.main}>
        <div className={Style.container}>
           <div className={Style.content}>
            <div className={Style.banner}>
                <img src="images/banner.webp" alt="" />
            </div>
            <div className={Style.Profileimg}>
                <img src="images/profile-4.webp" alt="" />
                <div className={Style.name}>
                <h1>Alina mathews</h1>
                <p>photographer / videographer</p>
                </div>
            </div>
            <div className={Style.buttons}>
                <Button />
                <Transbut />
                <PMB />
            </div>
            <div className={Style.about}>
                <About img="images/graduation-hat.png" text="Studies at Oxford university"/>
                <About img="images/home (1).png" text="Lives in London"/>
                <About img="images/maps-and-flags.png" text="from Amsterdam"/>
                <About img="images/suitcase.png" text="Photgraher/videographer"/>
                <About img="images/heart.png" text="single"/>
            </div>
            </div> 
            
            
        </div>
        
        
    </div>
        <div className="bar">
    <Bar />
    </div>
    </>
    )
}