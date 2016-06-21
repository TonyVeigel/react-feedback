import React,{PropTypes, Component} from 'react';

const defaultButtonStyles = {
  fontSize:'15px',
  padding:'10px 15px',
  position:'fixed',
  right:'5%',
  borderRadius:'5px 5px 0 0',
  border: 'none',
  bottom:0,
  backgroundColor:'#34495e',
  color: '#ffffff',
  width: 'auto'
}

class Button extends Component {

  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    const {handleButtonClick} = this.props;
  }

  render(){
    const {handleButtonClick, text, styles} = this.props;
    return(
      <button onClick={handleButtonClick} type='button' style={styles}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  handleButtonClick: React.PropTypes.func,
  styles: React.PropTypes.object,
  text: React.PropTypes.string
}

Button.defaultProps = {
  styles: defaultButtonStyles,
  text: 'Feedback',
  handleButtonClick: () => {}
}


export default Button;
