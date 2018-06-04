import React from 'react'

class InputForm extends React.Component {
  render() {
    return (
      <form id="application-input">
        <label>Apply Here: </label>
        <textarea onChange={event => this.props.setPreview(event.target.value)} id="application-text" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
    )
  }
}

export default InputForm

