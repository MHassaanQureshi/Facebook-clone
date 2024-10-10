import Style from "./Bar.module.css"
import { Link } from 'react-router-dom';
export default function Bar(){
    return(
        <>
        <div className={Style.container}>
            <div className={Style.main}>
            <Link to="/home"><img src="images/home.png" alt=""   className={Style.user} /></Link>
            <Link to=""><img src="images/reels.png" alt="" /></Link>
            <Link to="/profile"><img src="images/user (1).png" alt=""  className={Style.user}/></Link>
            <Link to=""><img src="images/setting.png" alt="" /></Link>
            <Link to=""><img src="images/shop.png" alt="" /></Link>
            </div>
        </div>
        </>
    )
}