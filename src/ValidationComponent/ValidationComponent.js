import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (prop) => {
  return (
    <div className="ValidationComponent">
      {prop.txtLength}
    </div>
  );
}

export default ValidationComponent;
