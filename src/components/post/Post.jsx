import Style from "./Post.module.css"
export default function Post({profile,name,time,caption,img,like,comment,share}){
    return(
        <>
        <div className={Style.container}>
            <div className={Style.User}>
                <div className={Style.userdetail}>
                    <img src={profile} alt="" />
                    <span>
                    <p>{name}</p>
                    <p className={Style.time}>{time}</p>
                    </span>
                </div>
                <div className={Style.menu}>
                    <img src="images/dots.png" alt="" />
                    <img src="images/close.png" alt="" />
                </div>
            </div>
            <div className={Style.content}>

                    <p>{caption}</p>
                    <img src={img} alt="" />
                
                
            </div>
            <div className={Style.Analysis}>
                    <p>{like}</p>
                    <p>{comment}</p>
                    <p>{share}</p>
                </div>
            
            <div className={Style.like}>
                <div className={Style.likepart}>
                    <img src="images/like.png" alt="" />
                    <img src="images/comment.png" alt="" />
                    <img src="images/send.png" alt="" />
                </div>
                <div className={Style.emoji}>
                    
                    <img src="images/emojis.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}