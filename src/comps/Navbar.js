import React from 'react';


const Navbar = () => {
    return (
      <div className="Navbar" style={{boxShadow: "0px 15px 0px 0px {value}"}}>
        <div className="brand">
        <img className="logo" src="/images/poundLogo.png" alt="logo"/>
        <h1 className="header" href="/">InstaPound</h1>
        </div>
      </div>
    )
  }
  
  export default Navbar;