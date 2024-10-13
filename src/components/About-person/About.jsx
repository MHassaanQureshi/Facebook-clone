import Style from "./About.module.css";
export default function About({img,text}){
    return(
        <>
        <div className={Style.container}>
            <img src={img}alt="" />
            <p>{text}</p>
        </div>
        </>
    )
}