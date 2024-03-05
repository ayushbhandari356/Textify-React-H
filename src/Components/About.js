import React, { useState } from "react";

function About(props) {
  
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"black":"white"
  }
  return (
    <div className="container my-4" style={myStyle}>
      <h1 style={myStyle}>About Us</h1>

      <div className="accordion " style={myStyle} id="accordionExample ">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header  style={myStyle}">
            <button
              style={myStyle}
              className="accordion-button "  
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Know about our app !</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Dear User</strong> , Thank you for using our text
              conversion tool in your React app! We appreciate your support and
              hope it's been helpful to you. As a reminder, here are some
              features you can utilize: Convert text to lowercase Convert text
              to uppercase Clear text Copy text to clipboard Remove extra spaces
              We're constantly working to improve our app and add new features,
              so stay tuned for updates! If you have any feedback or
              suggestions, feel free to reach out to us. We value your input and
              strive to make your experience with our app as smooth as possible.
              Thank you again for choosing our app! Best regards,
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Text Conversion Options</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Dear User, Thank you for using our text conversion tool in your
              React app! We appreciate your support and hope it's been helpful
              to you. As a reminder, here are some features you can utilize:
              Convert text to lowercase Convert text to uppercase Clear text
              We're constantly working to improve our app and add new features,
              so stay tuned for updates! If you have any feedback or
              suggestions, feel free to reach out to us. We value your input and
              strive to make your experience with our app as smooth as possible.
              Thank you again for choosing our app! Best regards,
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Space Management </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Dear User, Thank you for using our text conversion tool in your
              React app! We appreciate your support and hope it's been helpful
              to you. As a reminder, here are some features you can utilize:
              Remove extra spaces We're constantly working to improve our app
              and add new features, so stay tuned for updates! If you have any
              feedback or suggestions, feel free to reach out to us. We value
              your input and strive to make your experience with our app as
              smooth as possible. Thank you again for choosing our app! Best
              regards,
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        
      </div>
    </div>
  );
}

export default About;
