import React from 'react';

const Placeholder =() => {
  const style = {
    background: 'rgba(255,255,255,0.5)',
    color: '#6b735b',
    height: '100%',
    width: '100%',
    fontSize: '14px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
  <div style={style}>
    LOADING...
  </div>);
}

export default Placeholder;