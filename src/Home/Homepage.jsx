import Style from "./Homepage.module.css"
import NavbarMain from "../components/Navbar-main/NavbarMain";
import Search from "../components/Searchbar/Search";
import Upload from "../components/Upload/Upload";
import Story from "../components/Story/Story";
import Post from "../components/post/Post";
import Bar from "../components/bottomBar/Bar";

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
        <div className="bar">
    <Bar />
    </div>
        <div className={Style.StoryContainer}>
            <Story img="images/profile-1.webp" name="Anna may"/>
            <Story img="images/profile-2.webp" name="john sam"/>
            <Story img="images/profile-3.webp" name="Alex"/>
            <Story img="images/profile-4.webp" name="Alina mathew" />
            <Story img="images/profile-5.webp" name="unknown user"/>
            <Story img="images/profile-6.webp" name="unknown user"/>
            <Story img="images/profile-6.webp" name="unknown user"/>
            <Story img="images/profile-6.webp" name="unknown user"/>
            <Story img="images/profile-6.webp" name="unknown user"/>
            <Story img="images/profile-6.webp" name="unknown user"/>
            
            
        </div>
        <div className={Style.posts}>
            <Post profile="images/profile-1.webp" name="Anna may" time="7 Hours ago" img="images/post-1.webp" like="5k Likes" comment="2.4k comments" share=" 100 shares" caption="Embracing the beauty of nature, where every leaf tells a story."/>
            <Post profile="images/profile-2.webp" name="john sam" time="2 Hours ago" img="images/post-2.webp" like="2k Likes" comment="1k comments" share=" 400 shares" caption="Silence is not an option—raise your voice for justice!" />
            <Post profile="images/profile-5.webp" name="Alex" time="11 Minute ago" img="images/post-3.webp" like="2 Likes" comment="0 comments" share=" 0 shares" caption="Good vibes and great times 🎉✨" />
            <Post profile="images/profile-3.webp" name="Alina mathew" time="13 Minute ago" img="images/post-5.webp" like="20 Likes" comment="4 comments" share=" 0 shares" caption="Just me, being unapologetically myself." />
            <Post profile="images/profile-4.webp" name="unknown user" time="14 Hours ago" img="images/post-4.webp" like="24 Likes" comment="10 comments" share=" 6 shares" caption="Stand up, speak out, and never back down!" />
            <Post profile="images/profile-1.webp" name="Anna may" time="7 Hours ago" img="images/post-1.webp" like="5k Likes" comment="2.4k comments" share=" 100 shares" caption="Embracing the beauty of nature, where every leaf tells a story."/>
            <Post profile="images/profile-2.webp" name="john sam" time="2 Hours ago" img="images/post-2.webp" like="2k Likes" comment="1k comments" share=" 400 shares" caption="Silence is not an option—raise your voice for justice!" />
            <Post profile="images/profile-5.webp" name="Alex" time="11 Minute ago" img="images/post-3.webp" like="2 Likes" comment="0 comments" share=" 0 shares" caption="Good vibes and great times 🎉✨" />
            <Post profile="images/profile-3.webp" name="Alina mathew" time="13 Minute ago" img="images/post-5.webp" like="20 Likes" comment="4 comments" share=" 0 shares" caption="Just me, being unapologetically myself." />
            <Post profile="images/profile-4.webp" name="unknown user" time="14 Hours ago" img="images/post-4.webp" like="24 Likes" comment="10 comments" share=" 6 shares" caption="Stand up, speak out, and never back down!" />
            
        </div>
    </div>
    
    </>
    )
}