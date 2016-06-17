import React,{PropTypes, Component} from 'react';

const defaultBodyStyles = {

}

const Body = ({bodyText, bodyStyles}) => (
  <div style={bodyStyles}>
    <input type='text' />
  </div>
)

Body.defaultProps = {
  bodyText: 'Please enter your feedback here',
  bodyStyles: defaultBodyStyles
}

export default Body;
