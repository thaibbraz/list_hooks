import React, { useState } from "react";
import './App.css';
import DropdownView from './Dropdown.js'
import { Dropdown } from 'semantic-ui-react'

function App() {
 const [items, setItems] = useState ([
   {
     id: 1,
     name: "example"
   },
   { 
     id: 2,
     name: "example2"

   },
   { 
    id: 3,
    name: "example3"

  }
 ]);
  return (
    <div className="App">
      <h1>Mirka Sample</h1>
      <DropdownView listItem={items}/>
      {/* <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' />
      <Dropdown.Item text='Save as...'  />
      <Dropdown.Item text='Rename'  />
      <Dropdown.Item text='Make a copy' />
    
      
    </Dropdown.Menu>
  </Dropdown> */}


    </div>
 
  );
}

export default App;
