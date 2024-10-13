import Style from "./Story.module.css"
export default function Story({img,country}){
    return(
        <>
        <div className={Style.container}>
            <div className={Style.container2}>
                <img src={img} alt="" />
            </div>
            <p>{country}</p>
        </div>
        </>
    )
}