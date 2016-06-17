import React, {PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Form from './Form';

class Feedback extends Component {

  constructor(props){
    super(props);
    this.state = {showButton:true, showForm:false};
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButtonClick(){
    const {handleButtonClick} = this.props;
    this.setState({showButton: false, showForm:true});
    handleButtonClick();
  }
  handleSubmit(data, showButtonOnSubmit){
    const {handleButtonClick} = this.props;
    if(showButtonOnSubmit){
      this.setState({showButton:true});
    }
    this.setState({showForm:false});
    handleSubmit(data);
    handleClose();
  }
  handleClose(){
    const {handleClose, showButtonOnClose} = this.props;
    if(showButtonOnClose){
      this.setState({showButton:true});
    }
    this.setState({showForm:false});
    handleClose();
  }

  render(){
    const {
      headerText,
      buttonText,
      buttonStyles,
      headerStyles,
      headerBtnStyles,
      headerBtnText,
      bodyText
    } = this.props;

    return(
      <div>
        {this.state.showForm &&
          <div>
            <Form
              headerText={headerText}
              headerStyles={headerStyles}
              headerBtnStyles={headerBtnStyles}
              headerBtnText={headerBtnText}
              handleClose={this.handleClose}
              handleSubmit={this.handleSubmit}
              bodyText={bodyText}
              />
          </div>
        }
        {this.state.showButton &&
          <Button
            styles={buttonStyles}
            text={buttonText}
            handleButtonClick={this.handleButtonClick}
            />
        }
      </div>
    )
  }
}

Feedback.propTypes = {
  showEmailInput: PropTypes.bool,
  headerText: React.PropTypes.string,
  bodyText: React.PropTypes.string,
  position: React.PropTypes.string,
  handleClose: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  handleButtonClick: React.PropTypes.func,
  showButtonOnClose: React.PropTypes.bool,
  showButtonOnSubmit: React.PropTypes.bool,
  buttonStyles: React.PropTypes.object,
  headerStyles: React.PropTypes.object,
  headerBtnStyles: React.PropTypes.object,
  bodyStyles: React.PropTypes.object,
  footerStyles: React.PropTypes.object,
  buttonText: React.PropTypes.string,
  headerBtnText: React.PropTypes.string
}

Feedback.defaultProps = {
  showEmailInput: true,
  position: 'right',
  handleSubmit: () => {},
  handleClose: () => {},
  handleButtonClick: () => {},
  showButtonOnClose: true,
  showButtonOnSubmit: true
}

export default Feedback;
