import Style from "./NavbarMain.module.css"
export default function NavbarMain(){
    return(
        <>
        <div className={Style.container}>
            <div className={Style.logo}>
                <img src="images/fb-logo.png" alt="" />
            </div >
            <div className={Style.menu}>
                <img src="images/search.png" alt="" />
                <img src="images/notification.png" alt="" />
                <img src="images/Facebook_Messenger_4_Logo.png" alt="" />

            </div>
        </div>
        </>
    )
}