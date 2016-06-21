import React, {PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Form from './Form';

class Feedback extends Component {

  constructor(props){
    super(props);
    this.state = {
      showButton:true,
      showForm:false,
      showModal: false,
      messageInput:'',
      emailInput:'',
      ratingInput:''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }
  handleMessageInput(inputName, content){
    if(inputName === 'email'){
      this.setState({emailInput:content});
    }else if(inputName === 'rating'){
      this.setState({ratingInput:content});
    }
    else if(inputName === 'message'){
      this.setState({messageInput:content});
    }
  }
  handleRatingInput(ratingInput){
    this.setState({ratingInput:ratingInput});
  }
  handleEmailInput(emailInput){
    this.setState({emailInput:emailInput});
  }
  handleButtonClick(){
    const {handleButtonClick} = this.props;
    this.setState({showButton: false, showForm:true});
    handleButtonClick();
  }
  handleSubmit(){
    const {showButtonOnSubmit, handleSubmit, handleClose} = this.props;
    handleSubmit({
        message: this.state.messageInput,
        rating: this.state.ratingInput,
        email: this.state.emailInput
    });
    if(showButtonOnSubmit){
      this.setState({showButton:true});
    }
    this.setState({showForm:false, messageInput:'', ratingInput:'', emailInput:''});
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
      bodyText,
      showEmailInput,
      showRatingInput,
      showMessageInput
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
              showEmailInput={showEmailInput}
              showRatingInput={showRatingInput}
              showMessageInput={showMessageInput}
              emailInput={this.state.emailInput}
              ratingInput={this.state.ratingInput}
              messageInput={this.state.messageInput}
              handleMessageInput={this.handleMessageInput}
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
  headerBtnText: React.PropTypes.string,
  showEmailInput: React.PropTypes.bool,
  showRatingInput: React.PropTypes.bool,
  showMessageInput: React.PropTypes.bool
}

Feedback.defaultProps = {
  position: 'right',
  handleSubmit: () => {},
  handleClose: () => {},
  handleButtonClick: () => {},
  showButtonOnClose: true,
  showButtonOnSubmit: true,
  modal: false
}

export default Feedback;
