import React, {PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Button from './Button';

class Feedback extends Component {

  constructor(props){
    super(props);
    this.state = {showButton:true};
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    const {handleButtonClick} = this.props;
    this.setState({showButton: !this.state.showButton});
    handleButtonClick();
  }

  render(){
    return(
      <div>
        <Header />
        <Body />
        <Footer />
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
  onClose: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  handleButtonClick: React.PropTypes.func,
}

Feedback.defaultProps = {
  showEmailInput: true,
  headerText: 'Feedback',
  bodyText: 'Please enter your feedback here',
  position: 'right',
  onClose: () => {},
  onSubmit: () => {},
  handleButtonClick: () => {}
}

export default Feedback;
