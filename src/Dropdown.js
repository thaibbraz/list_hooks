import React, { useState } from "react";

import { Dropdown } from 'semantic-ui-react'

function DropdownView(props) {
    let items = props.listItem
  return (
    <div >
     
     
      <Dropdown text='File'>
    <Dropdown.Menu>
   { items.map((e) => <Dropdown.Item text={e.name} />) }
       
      {/* <Dropdown.Item text='Open...' />
      <Dropdown.Item text='Save as...'  />
      <Dropdown.Item text='Rename'  />
      <Dropdown.Item text='Make a copy' /> */}
    </Dropdown.Menu>
  </Dropdown>


    </div>
 
  );
}

export default DropdownView;
