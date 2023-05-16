const React = require('react');

class New extends React.Component {
  render() {
      return <div>
                       <h1>New Flight page</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/flights" method="POST">
                 Flight number: <input type="number" name="number" /><br/>
                Airline: <input type="text" name="airline" /><br />
                Airport:
                <select name="airport">
                     <option>AUS</option>
                     <option>DAL</option>
                     <option>LAX</option>
                </select>
                <br/>
                 Is it in the air now? <input type="checkbox" name="inAir" /><br/>
                 <input type="submit" name="" value="Create Flight"/>
               </form>
    </div>;
  }
}

module.exports = New;
