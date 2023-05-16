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
                <a href={`/flights/${i}`}>{'flight info here'}</a>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;