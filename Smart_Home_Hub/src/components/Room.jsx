import React from 'react';
import { Navbar as Navbar } from 'react-bootstrap';
import '../styles.css';
import Temperature from './Utilities.js';
import passParam from './paramWrapper';

class Room extends React.Component {

  constructor(props) {
    super(props);
    //sets the default temperature
    this.state = { temp: 75 };

    //if the temp hasn't been set to anything it defaults it to 75
    if (localStorage.getItem(this.props.params.id) == null) {
      localStorage.setItem(this.props.params.id, parseInt(this.state.temp, 10));
    }
  }

  //converst the temp to an int and stores it in localStorage using the room name
  handleTempChange = (temp) => {
    this.setState({ temp: temp });
    localStorage.setItem(this.props.params.id, parseInt(temp, 10));
  }


  render() {
    //same logic as the previous if
    //but a fail safe case in case temp gets unset 
    if (localStorage.getItem(this.props.params.id) == null) {
      localStorage.setItem(this.props.params.id, 75);
    }

    return (

      <div>
        <div className='room-status'>
          <h1 className='room-name' align='center'>Room: {this.props.params.id}</h1>
        </div>

        {/* imports the nabvar */}
        <Navbar />

        {/* imports the temp from utilties.js */}
        <Temperature
          temp={parseInt(localStorage.getItem(this.props.roomName), 10)}
          roomName={this.props.params.id}
          onTempChange={this.handleTempChange}
        />

      </div>
    );
  }
}

export default passParam(Room)