import React, { useState, useEffect } from "react";

const InfiniteBar = () => {
  let [logos, setLogos] = useState([]);
    fetch(
      "https://w6jnvo997d.execute-api.eu-west-2.amazonaws.com/test/technical-test"
    )
      .then((response) => response.json())
      .then((json) => {
        logos = json.body.urls;
        setLogos(json.body.urls);
      });
   
useEffect(() => {
  let track = document.querySelector(".track")
  let left = 0
  const moveleft = setInterval(() => {
    left-=1
    track.style.left=left+'px'
  }, 20);


  return () => clearInterval(moveleft);
}, []);



  return <div className="track">{logos.map((url, index) =>{
    return <img className='logo' key={index} src={url} alt="logo"/>
  })}</div>;
};

export default InfiniteBar;
