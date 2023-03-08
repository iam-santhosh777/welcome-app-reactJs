/* eslint-disable no-unused-expressions */
// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  clickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  buttonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const text = this.buttonText()
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.clickSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
