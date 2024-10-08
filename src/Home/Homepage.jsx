import Style from "./Homepage.module.css"
import NavbarMain from "../components/Navbar-main/NavbarMain";
import Search from "../components/Searchbar/Search";
import Upload from "../components/Upload/Upload";
import Story from "../components/Story/Story";
import Post from "../components/post/Post";

export default function Homepage(){
    return(
    <>
    <div className={Style.container}>
        <div className={Style.topContainer}>
        <NavbarMain />
        <Search />
        <div className={Style.uploadDivs}>
        <Upload img="images/camera.png" text="Photo/video"/>
        <Upload img="images/video.png" text="live video"/>
        <Upload img="images/eye.png" text="Check in"/>
        </div>
        </div>
        <div className={Style.StoryContainer}>
            <Story img="images/profile-1.jpg"/>
            <Story img="images/profile-2.jpg"/>
            <Story img="images/profile-3.jpg"/>
            <Story img="images/profile-4.jpg"/>
            <Story img="images/profile-5.jpg"/>
            <Story img="images/profile-6.jpg"/>
            
            
        </div>
        <div className={Style.posts}>
            <Post profile="images/profile-1.jpg" name="Anna may" time="7 Hours ago" img="images/post-1.jpg" like="5k Likes" comment="2.4k comments" share=" 100 shares" caption="Embracing the beauty of nature, where every leaf tells a story."/>
            <Post profile="images/profile-2.jpg" name="john sam" time="2 Hours ago" img="images/post-2.jpg" like="2k Likes" comment="1k comments" share=" 400 shares" caption="Silence is not an option—raise your voice for justice!" />
            <Post profile="images/profile-5.jpg" name="Alex" time="11 Minute ago" img="images/post-3.jpg" like="2 Likes" comment="0 comments" share=" 0 shares" caption="Good vibes and great times 🎉✨" />
            <Post profile="images/profile-3.jpg" name="Alina mathew" time="13 Minute ago" img="images/post-5.jpg" like="20 Likes" comment="4 comments" share=" 0 shares" caption="Just me, being unapologetically myself." />
            <Post profile="images/profile-4.jpg" name="unknown user" time="14 Hours ago" img="images/post-4.jpg" like="24 Likes" comment="10 comments" share=" 6 shares" caption="Stand up, speak out, and never back down!" />
            
        </div>
    </div>
    
    </>
    )
}