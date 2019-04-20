import React, { Component } from "react";
import moment from "moment";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,

    };
  }
  selection = (props) => {
    this.setState(previousState => {
      return {selected: !previousState.selected}
    });
    this.state.selected
    ? (props.target.parentNode.className="highlight")
        : (props.target.parentNode.className="" );
  };

  render() {
    return (
      <div class="table-responsive">
        <table className="table table-highlight">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th>Stay duration</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(booking => {
              return (
                <tr
                  className={this.state.highlight}
                  onClick={this.selection}
                >
                  <th scope="row">{booking.id}</th>
                  <td>{booking.title}</td>
                  <td>{booking.firstName}</td>
                  <td>{booking.surname}</td>
                  <td>{booking.email}</td>
                  <td>{booking.roomId}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>
                    {moment(booking.checkOutDate).diff(
                      moment(booking.checkInDate),
                      "days"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default SearchResults;