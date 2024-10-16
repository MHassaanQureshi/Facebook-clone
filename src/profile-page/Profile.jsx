import Style from "./Profile.module.css"
import Bar from "../components/bottomBar/Bar";
import Button from "../components/buttons/button/Button";
import Transbut from "../components/buttons/transparent-button/Transbut";
import PMB from "../components/Profile-menu/PMB";
import About from "../components/About-person/About";
import Story from "../components/profile-stories/Story";
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
            <div className={Style.stories}>
                <Story img="images/view1.webp" country="norway"/>
                <Story img="images/view2.webp" country="malaysia"/>
                <Story img="images/view3.webp" country="Denmark"/>
                <Story img="images/view1.webp" country="norway"/>
                <Story img="images/view2.webp" country="malaysia"/>
                <Story img="images/view3.webp" country="Denmark"/>
                <Story img="images/view1.webp" country="norway"/>
                <Story img="images/view2.webp" country="malaysia"/>
                <Story img="images/view3.webp" country="Denmark"/>
                
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