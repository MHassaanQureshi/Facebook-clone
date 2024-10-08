import Style from "./Homepage.module.css"
import NavbarMain from "../components/Navbar-main/NavbarMain";
import Search from "../components/Searchbar/Search";
import Upload from "../components/Upload/Upload";
import Story from "../components/Story/Story";

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
    </div>
    
    </>
    )
}