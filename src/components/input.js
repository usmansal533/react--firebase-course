import React from "react";
import css from "bootstrap";
import ReactDOM from "react-dom";
function Inputname (){
return(
    <label>
    <input type="text" name="name" id="input"  placeholder="Name"/>
    </label>
);
}
export default Inputname;

export function Inputemail(){
    return(
        <input type="email" name="email" id="input" placeholder="Email"/>
    );
}

export function Inputnumber(){
    return(
        <input type="number" name="number" id="input" placeholder="Phone number"/>
    );
}
export function Button_form(){
    return(
        <button type="submit" className="button">Submit</button>
    );
}
export function Simple_Navigation_bar(){
    return(
        <nav>
            <ul>
                <li><a href="/"> < b>Techbazzar</b></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <button>Sign In</button>
            <button>Sign up</button>
        </nav>
    );
}
export function Dropdown_navigation_bar(){
    return(
        <nav>
            <ul>
                <li><a href="/"> < b>Techbazzar</b></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a>
                <ul className="Dropdown">
                <li><a href="/">Our Progress</a></li>
                <li><a href="/">Our History</a></li>
                <li><a href="/">Our Clients</a></li>
                <li><a href="/">Our Indrustry</a></li>
                </ul>
                </li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <button className="btn danger" > Sign In</button>
            <button className="btn" >Sign up</button>
        </nav>
    );
}