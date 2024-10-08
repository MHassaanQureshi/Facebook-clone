import Style from "./Landingpage.module.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Landingpage(){
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        navigate('/home');
      }, 3000);
  
     
      return () => clearTimeout(timer);
    }, [navigate]);
  
    return(
        <>
        {isLoading ? (
    <div>
      <div className={Style.container1}>
        <h1>Facebook</h1>
      </div>
      <div className={Style.container2}>
        <img src="images/meta.png" alt="Meta" />
      </div>
    </div>
  ) : null}

        </>
    )
}