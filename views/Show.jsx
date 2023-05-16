const React = require('react')
class Show extends React.Component {
  render () {
      const flight = this.props.flights
    return (
      <div>
            <h1> Show Flight </h1>
            <br />
            <br />
               <p> flight info here </p>
            <br />
            <br />
            <a href= '/flights/'>Go back</a>
      </div>
      );
     }
   }
  module.exports  = Show;