import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
 
  const handleClear = () => {
    let newText = text.toLowerCase();
    setText("");
    props.showAlert("Cleared text","success")
  };
  const handleCopy = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select()
    document.execCommand("copy");
    document.getSelection().collapseToEnd()
    props.showAlert("Text copied ","success")
    // navigator.clipboard.writeText(text.value)
  };

  const handleChange = (event) => {
    // console.log("handleChange invoked")
    setText(event.target.value);
  };
  function removeExtraSpaces() {
    
    var textarea = document.getElementById("exampleFormControlTextarea1");
    var newText = textarea.value.replace(/\s+/g, ' ').trim();
    textarea.value = newText;
    props.showAlert("Extra spaces cleared","success")
}


  return (
    <>
      <div 
      
      className="container py-2">

        <h2
        style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h2>
        <textarea
          value={text}
          onChange={handleChange}
          style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}}
          className="form-control "
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <br></br>
        <button disabled={text.length===0} className="btn btn-secondary mx-2  my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleUpClick}> Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2  my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2  my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2  my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
         
      </div>
      <div
      style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}}
      className="container mt-2">
        <h2>Your Text Summary</h2>
        <p>{text.trim().split(" ").filter(Boolean).length}  words  {text.length} characters</p>   
        <h3>Preview</h3>  
        <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
     </div>
    </>
  );
}

export default TextForm;
