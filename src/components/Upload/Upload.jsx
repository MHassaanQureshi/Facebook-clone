import Style from "./Upload.module.css"
export default function Upload( {img,text}){
    return(
        <>
        <div className={Style.Container}>
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
        </>
    )
}