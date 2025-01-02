import React, { useState, useContext } from 'react';
import { nameContext } from './Dhaya';

const Stomach = () => {
  const names = useContext(nameContext);
  const [style, setStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const toggleStyle = () => {
    setStyle((prevStyle) => ({
      color: prevStyle.color === 'white' ? 'black' : 'white',
      backgroundColor: prevStyle.backgroundColor === 'black' ? 'white' : 'black'
    }));
  };

  return (
    <div>
      <h1 style={style}>Stomach : {names}</h1>
      <button onClick={toggleStyle}>Button</button>
    </div>
  );
};

export default Stomach;
