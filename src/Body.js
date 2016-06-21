import React,{PropTypes, Component} from 'react';

const defaultBodyStyles = {
  padding: '10px'
}

const defaultMessageStyles = {
  boxSizing: 'border-box',
  padding: '10px 10px 0 10px',
  overflow: 'hidden',
  width: '300px',
  fontFamily: 'arial'
}

const Body = ({bodyText, bodyStyles, messageInput, emailInput, ratingInput, handleMessageInput, showMessageInput, showRatingInput, showEmailInput}) => (
  <div style={bodyStyles}>
    {showEmailInput &&
      <div>
        <input type='email' rows="5" value={emailInput} onChange={e => handleMessageInput('email', e.target.value)} style={defaultMessageStyles} />
      </div>
    }
    {showRatingInput &&
      <div>
        <textarea rows="5" value={messageInput} onChange={e => handleMessageInput('rating', e.target.value)} style={defaultMessageStyles} />
      </div>
    }
    {showMessageInput &&
      <div>
        <textarea rows="5" value={messageInput} onChange={e => handleMessageInput('message', e.target.value)} style={defaultMessageStyles} />
      </div>
    }
  </div>
)

Body.defaultProps = {
  bodyText: 'Please enter your feedback here',
  bodyStyles: defaultBodyStyles,
  showEmailInput: true,
  showRatingInput: true,
  showMessageInput: true
}

export default Body;
