import React from 'react';

const Footer = (props) => {

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,color:props.mode==="dark"?"white":"black"}} className={`text-center bg-${props.mode} `}>
      <div className="container pt-4" >
        <section  className="mb-4">
         <p>This is a text converter website. Feel free to use it. Developed by Ayush Bhandari</p>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        
          All copyrights belongs to Ayush Bhandari
        
      </div>
    </footer>
    </>
  );
};

export default Footer;

