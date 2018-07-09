import React from 'react'

class InputForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShown: false
    }
  }
  submitMessage = (e) => {
    e.preventDefault()
    this.setState({
      isShown: true
    })
  }
  render() {
    return (
      <form onSubmit={this.submitMessage} id="application-input">
        <label>Apply Here: </label>
        <textarea onChange={event => this.props.setPreview(event.target.value)} id="application-text" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
        {this.state.isShown && <p>Your application was submitted!</p>}
      </form>
    )
  }
}

export default InputForm

