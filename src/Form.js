import React,{Component, PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const formStyles = {
    position: 'fixed',
    right: '45px',
    width: '400px',
    backgroundColor: '#f3f3f3',
    borderRadius: '3px 3px 0 0',
    zIndex: '50000',
    bottom: '0px',
    height: '300px'
}

class Form extends Component {

  render(){
    const {headerStyles, headerText, handleClose, handleSubmit} = this.props;
    return(
      <div style={formStyles}>
        <Header
          styles={headerStyles}
          headerText={headerText}
          handleClose={handleClose}
          />
        <Body
          />
        <Footer
          handleSubmit={handleSubmit}
          />
      </div>
    )
  }

}

export default Form;
