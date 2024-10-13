import Style from "./Button.module.css"
export default function Button(){
    return(
        <>
        <button className={Style.container}><img src="images/messenger-white.png" alt="" />Messenger</button>
        </>
    )
}