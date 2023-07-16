import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [newDeviceName, setNewDeviceName] = useState('');


  const handleDeviceNameChange = (event) => {
    setNewDeviceName(event.target.value);
  };

  const handleDeviceSubmit = (event) => {

    props.addDevice(newDeviceName);
    setNewDeviceName('');
  };

  //code for dynamic rooms 

  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState('');

  const handleRoomChange = (e) => {
    setNewRoom(e.target.value);
  };

  const handleAddOption = () => {
    if (newRoom) {
      setRooms([...rooms, newRoom]);
      setNewRoom('');
    }
  };

  return (
    <>
      <BootstrapNavbar className="navbar navbar-dark bg-dark" expand="lg">
        {/* HOME BUTTON */}
        <BootstrapNavbar.Brand href="/" style={{ paddingLeft: "10px" }}>Home</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* ROOMS DROPDOWN */}

            <NavDropdown title="Rooms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/" as={Link} to="/Room/Kitchen">
                Kitchen
              </NavDropdown.Item>
              <NavDropdown.Item href="/" as={Link} to="/Room/Living">
                Living-room
              </NavDropdown.Item>

              {rooms.map((room, index) => (
                <NavDropdown.Item key={index} href="/" as={Link} to={`/Room/${room}`} >{room}</NavDropdown.Item>
              ))}

              <input
                type="text"
                value={newRoom}
                onChange={handleRoomChange}
              />
              <button onClick={handleAddOption}>Add Room</button>

            </NavDropdown>

            {/* DEVICES DROPDOWN */}
            <NavDropdown title="Devices" id="basic-nav-dropdown">
              {props.deviceStatuses &&
                (() => {
                  const deviceStatuses = props.deviceStatuses;
                  const dropdownItems = [];

                  for (let device in deviceStatuses) {
                    // method ensures that only properties directly defined on the deviceStatuses object are considered for the iteration. 
                    if (deviceStatuses.hasOwnProperty(device)) {
                      dropdownItems.push(
                        <NavDropdown.Item
                          key={device}
                          href="/"
                          as={Link}
                          to={`/Device/${device}`}
                        >
                          {device}
                        </NavDropdown.Item>
                      );
                    }
                  }

                  return dropdownItems;
                })()}

              <div>
                <input
                  type="text"
                  placeholder="Enter device name"
                  value={newDeviceName}
                  onChange={handleDeviceNameChange}
                />
                <Button variant="primary" onClick={handleDeviceSubmit}>
                  Add
                </Button>
              </div>
            </NavDropdown>

            {/* GARDEN DROPDOWN */}
            <NavDropdown title="Garden" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lightsys">Lighting</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/irrigation">Irrigation</NavDropdown.Item>
            </NavDropdown>

            {/* HISTORY DROPDOWN */}
            <NavDropdown title="History" id="basic-nav-dropdown">
              {props.selectedDates.map((date, index) => (
                <NavDropdown.Item key={index} href="#">
                  - {date.startDate} to {date.endDate}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </>
  );
}

export default Navbar;