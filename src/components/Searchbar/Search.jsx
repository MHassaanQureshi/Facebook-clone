import Style from "./Search.module.css"
export default function Search(){
    return(
        <>
        <div className={Style.container}>
            <input type="text" placeholder="What's on your mind, Hassaan?" />
        </div>
        </>
    )
}