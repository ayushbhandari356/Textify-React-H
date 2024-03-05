import { useState } from "react";
import "./App.css";
import About  from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alerts from "./Components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing react router dom



// only used for learning purpose
// import MyComponent  from "./Components/Propslearner";
// props passed as objects
// const myProps = {
//   title: 'Welcome to My Component',
// description: 'This is a description of my component.'
// };

function App() {
  const [mode , setMode]=useState("light")
  const [alert,setAlert]=useState("")
  // alert is basically an object  here
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }


  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode has been enabled","success")
      document.title="Textify-Dark Mode"
      // setInterval(() => {
      //   document.title="Textify is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Textify is Best";
      // }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success")
      document.title="Textify-Light Mode"
    }
  }
  return (
   
    // <div className="" >
    //   <Navbar title={"Converter"} about={"About"} mode={mode} toggleMode={toggleMode}  />
    //   <Alerts alert={alert} />
    //   {/* <MyComponent {...myProps} /> */}

      
    //     <div className="container">
    //       <TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert}/>
    //     </div>

    //     <About />
     
    // </div>



    <Router>
      <Navbar title={"Textify"} about="About" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
   

  );
}

export default App;
