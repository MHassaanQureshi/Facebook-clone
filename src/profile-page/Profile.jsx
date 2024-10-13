import Style from "./Profile.module.css"
import Bar from "../components/bottomBar/Bar";
import Button from "../components/button/Button";
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
            
            </div> 
            
            
        </div>
        
        
    </div>
        <div className="bar">
    <Bar />
    </div>
    </>
    )
}