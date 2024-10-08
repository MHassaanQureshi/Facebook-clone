import Style from "./Story.module.css"

export default function Story({img}){
  
    return(
        <>
        <div className={Style.container}>
        <img src={img} alt="" />
        </div>
        </>
    )
}