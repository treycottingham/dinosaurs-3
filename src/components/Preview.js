import React from 'react'

class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHidden = (event) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div>
        <p id="message">&nbsp;</p>
        <button id="preview-toggle" onClick={this.toggleHidden}>Show Preview</button>
        <section id="application-preview" className={this.state.isHidden ? "hidden" : null}>{this.props.preview}</section>
      </div>
    )
  }
}

export default Preview

