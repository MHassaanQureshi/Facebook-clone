import Style from "./Story.module.css"

export default function Story({img,name}){
  
    return(
        <>
        <div className={Style.containerMain}>
        <div className={Style.container}>
        <img src={img} alt="" />
        </div>
        <p>{name}</p>
        </div>
        </>
    )
}