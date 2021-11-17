import React,{useEffect,useState} from "react";

import './App.css';

function App() {

  const [Qoute,setQoute]=useState("");
  const [Auth,setAuth]=useState("unknown");
  const [mode,setMode]=useState("light");
  const [isDark,setIsDark]=useState(false);
  const [cont,setCont]=useState("qoute_container");


  const handleMode=()=>{
    if(mode==="light"){
      
      setMode("dark");
      setIsDark(true);
      setCont("qoute_container_d");
    }else{
      setMode("light");
      setIsDark(false);
      setCont("qoute_container");
    }
  }

  useEffect(()=>{
        handleGet();
  },[])


  const handleGet=async()=>{
    try{
      const url=`https://type.fit/api/quotes`;
      const res=await fetch(url);
      const responseJson=await res.json();
      console.log(responseJson);
      let index = Math.floor(Math.random()*responseJson.length);
      let qoute=responseJson[index].text;
      let author=responseJson[index].author;
      setQoute(qoute);
      setAuth(author);
    }catch(error){
      console.log(error)
    }
  }



  return (
    <div className={mode}>
    <div className="night_mode_btn"><button onClick={handleMode}><i class={isDark?"fas fa-sun":"fas fa-moon"}></i></button></div>
    <div className={cont}>
      <div className="qoute_main">{Qoute}</div>
      <div className="qoute_author">-By {Auth}</div>
    </div>

    <div className="get_qoute"><button onClick={handleGet}>Get Qoute</button></div>
    </div>
  );
}

export default App;
