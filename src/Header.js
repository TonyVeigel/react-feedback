import React from 'react';

const defaultButtonStyles = {
   position:'absolute',
   fontSize:'20px',
   right:'15px',
   float:'right',
   color: '#ffffff',
   background: 'none',
   border: 0,
   fontWeight: 'bold'
 }

const defaultHeaderStyles = {
  height: '40px',
  background: '#34495e',
  marginBottom: '-1px',
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '200',
  lineHeight: '40px',
  paddingLeft: '10px',
  overflow: 'hidden',
  borderRadius: '3px 3px 0px 0px'
}

const Header = ({headerText, headerBtnText, handleClose, headerStyles, headerBtnStyles}) => (
  <div style={headerStyles}>
    {headerText}
    <button onClick={handleClose} style={headerBtnStyles} type='button'>{headerBtnText}</button>
  </div>
)

Header.defaultProps = {
  headerText: 'Feedback',
  headerBtnText: 'x',
  handleClose: () => {},
  headerBtnStyles: defaultButtonStyles,
  headerStyles: defaultHeaderStyles
}

export default Header;
