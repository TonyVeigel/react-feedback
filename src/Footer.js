import React from 'react';

const defaultFooterStyles = {
  height: '50px',
  boxSizing: 'border-box',
  background: '#34495e',
  overflow: 'hidden'
}
const closeBtnStyle = {
  float: 'left',
  color: '#000000',
  backgroundColor: '#ffffff',
  lineHeight: '30px',
  fontWeight: '400',
  borderRadius: '3px',
  border: 'none',
  fontSize: '13px'
}
const submitBtnStyle = {
  float:'right',
  color: '#000000',
  backgroundColor: '#ffffff',
  lineHeight: '30px',
  fontWeight: '400',
  borderRadius: '3px',
  border: 'none',
  fontSize: '13px'
}

const Footer = ({handleSubmit, footerStyles, handleClose}) => (
  <div style={footerStyles}>
    <div style={{padding:'10px'}}>
    <button onClick={handleSubmit} style={submitBtnStyle} type='button'>Submit</button>
    <button onClick={handleClose} style={closeBtnStyle} type='button'>Close</button>
    </div>
  </div>
)

Footer.defaultProps = {
  footerStyles: defaultFooterStyles
}

export default Footer;
