import Style from "./Bar.module.css"
export default function Bar(){
    return(
        <>
        <div className={Style.container}>
            <div className={Style.main}>
            <a href="home"><img src="images/home.png" alt=""   className={Style.user} /></a>
            <a href=""><img src="images/reels.png" alt="" /></a>
            <a href=""><img src="images/shop.png" alt="" /></a>
            <a href="profile"><img src="images/user (1).png" alt=""  className={Style.user}/></a>
            <a href=""><img src="images/setting.png" alt="" /></a>
            </div>
        </div>
        </>
    )
}