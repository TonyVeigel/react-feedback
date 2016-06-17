import React, {PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Button from './Button';

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
  handleSubmit(){
    const {handleButtonClick} = this.props;
    if(showButtonAgain){
      this.setState({showButton:true});
    }
    this.setState({showForm:false});
    handleButtonClick();
  }
  handleClose(){
    const {handleSubmit, showButtonAgain} = this.props;
    if(showButtonAgain){
      this.setState({showButton:true});
    }
    this.setState({showForm:false});
    handleSubmit();
  }

  render(){
    const {headerText} = this.props;
    return(
      <div>
        {this.state.showForm &&
          <div>
            <Header headerText={headerText} handleClose={this.handleClose}/>
            <Body />
            <Footer handleSubmit={this.handleSubmit}/>
          </div>
        }
        {this.state.showButton &&
          <Button handleButtonClick={this.handleButtonClick}/>
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
  showButtonAgain: React.PropTypes.bool
}

Feedback.defaultProps = {
  showEmailInput: true,
  headerText: 'Feedback',
  bodyText: 'Please enter your feedback here',
  position: 'right',
  handleClose: () => {},
  handleSubmit: () => {},
  handleButtonClick: () => {},
  showButtonAgain: true
}

export default Feedback;
