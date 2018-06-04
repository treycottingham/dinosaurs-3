import React from 'react'

class JobDetails extends React.Component {
  render(){
  return(
      <section id="job-details">
        <h2>Job Details</h2>
        <h4>{this.props.details.title}</h4>
        <p>{this.props.details.description}</p>
      </section>
    )
  }
}

export default JobDetails