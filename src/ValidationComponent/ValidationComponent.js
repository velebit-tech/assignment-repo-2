import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (prop) => {

  let len = prop.txtLength;
  let txt = null;
  let componentStyle = null;

  if (len < 5) {
    txt = 'Text too small. (' + len + ')';
    componentStyle = {
      display: 'inline-block',
      margin: '3px',
      border: '3px solid red',
      padding: '3px',
      backgroundColor: 'rgb(255, 104, 104)'
    }
  } else {
    txt = 'Text long enough. (' + len + ')';
    componentStyle = {
      display: 'inline-block',
      margin: '3px',
      border: '3px solid green',
      padding: '3px',
      backgroundColor: 'lightgreen'
    }
  }

  return (
    <div className="ValidationComponent" style={componentStyle}>
      {txt}
    </div>
  );
}

export default ValidationComponent;
