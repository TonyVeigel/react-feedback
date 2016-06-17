import React from 'react';

const styles = {
  position:'absolute',
   fontSize:'20px',
   top:'16px',
   right:'18px',
   float:'right',
   color: '#000',
   background: 'none',
   color: '#ff0000',
   border: 0,
   fontWeight: 'bold',
   lineHeight: 2
 }

const Header = ({headerText,handleClose}) => (
  <div>
    {headerText}
    <button onClick={handleClose} style={styles} type='button'>x</button>
  </div>
)

export default Header;
