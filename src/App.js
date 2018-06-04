import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import JobDetails from './components/JobDetails'
import InputForm from './components/InputForm'
import Preview from './components/Preview'

const apiURL = './listing.json'

var textInput = ""

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      preview: ""
    }
  }

  setPreview = text => {
    this.setState({preview:text})
  }

  componentDidMount(){
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      this.setState({ data:data })
    })
  }

  formData = userInput => {
    textInput = userInput
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails details={this.state.data} />
          <InputForm userInput={this.formData} setPreview={this.setPreview} />
          <Preview preview={this.state.preview} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App