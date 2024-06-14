import logo from './logo.svg';
import './App.css';
import React from "react";

import Inputname from './components/input';
import { Inputemail } from './components/input';
import { Inputnumber } from './components/input';
import { Button_form } from './components/input';
import { Dropdown_navigation_bar } from './components/input';
const name = new Button("hi this is a button");
        
function App() {
  return (
    <div>
      <header>
        <div>
          <Dropdown_navigation_bar/>
        </div>
      </header>
      <main>
        <form>
          <div className='form_div'>
          <h1>Contact Us</h1>
          <Inputname/>
          <br/>
          <Inputemail/>
          <br/>
          <Inputnumber/>
          <br/>
          <Button_form/>
          <br/>
          {Button}
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
  