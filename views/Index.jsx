const React = require("react");

const styling = {
    color: '#ffffff',
    backgroundColor: '#00000',
    padding: '15px',
}


class Index extends React.Component {
  render() {
      const { flights } = this.props;
    return (
      <div style = {styling}>
        <h1>Flights Index</h1>
        <ul>
                {flights.map((flight, i) => {
            return (
              <li>
                      <a href={`/flights/${i}`}>{flight.num}<br/>
                           Pilot: {flight.pilot.first}{flight.pilot.last}
                           <br />
                           {flight.airline}
                           <br/>
                           {flight.departs }</a>
                      <br />
                      <br/>
              </li>
            );
          })}
              </ul>
              <nav>
                <a href="/flights/new">Create a New Flight</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;