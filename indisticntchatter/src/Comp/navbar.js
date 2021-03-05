import React from "react";
import style from '../Styles/style.css';



function navbar() {
    return (
        <div className = "navholder">
            <div className ="link_holder" style={{alignItems:'baseline'}}>
                <a href="" target="_blank" style={{marginRight:'1rem'}}>Home</a>
                <a href="" target="_blank" style={{marginRight:'1rem'}}>Blog</a>
                <a href="" target="_blank" style={{marginRight:'1rem'}}>Art</a>
            
            </div>
            <div className = "name_logo">
                 <h1 className = "Name">Indisticnt Chatter</h1>
            </div>

        </div>
    );
   
}

export default navbar;