import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
      <div>
          <header style={{padding: 15,minHeight: "auto",fontSize: "24px",textAlign: 'center'}}>
              <span>Jobs Applied To:</span>
              <NavLink to='/add_job' style={{display: 'inline-block'}} className="btn btn-outline-dark pull-right"><i className="fas fa-plus"></i>&nbsp;Job Applied To</NavLink>
              <NavLink to='/' className="pull-right" style={{marginRight: 15, textDecoration: 'underline'}}><i className="fas fa-home"></i>Home</NavLink>
              <br clear="all" />
          </header>
      </div>
    );
}

export default Header;