import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Room from './components/Room';
import Device from './components/Device';
import IrrigationSys from './IrrigationSys';
import LightSys from './LightSys';
import { DeviceContext } from './components/DeviceContext';
import RoomSchedule from './components/RoomSchedule';



function App() {
  // Initialize device statuses
  const [deviceStatuses, setDevicesStatuses] = useState(() => {
    const storedDeviceStatuses = localStorage.getItem('deviceStatuses');
    return storedDeviceStatuses ? JSON.parse(storedDeviceStatuses) : {
      'Coffee-Maker': false,
      'Robot-Vacuum': false,
      'Fridge': false,
    };
  });

  const [selectedDates, setSelectedDates] = useState([]);

  const addDevice = (deviceName) => {
    setDevicesStatuses({ ...deviceStatuses, [deviceName]: false });
  };

  const handleSaveDates = (startDate, endDate) => {
    //takes start and end dates from dp and formats to strings
    const newStartDate = new Date(startDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    const newEndDate = new Date(endDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    //adds into a newdate object
    const newDate = { startDate: newStartDate, endDate: newEndDate };
    //insert the newDate into an array for the history tab
    setSelectedDates([...selectedDates, newDate]);
  };

  return (
    <DeviceContext.Provider value={{ deviceStatuses, setDevicesStatuses }}>
      <div className="App">
        <Router>
          <Navbar
            deviceStatuses={deviceStatuses}
            addDevice={addDevice}
            selectedDates={selectedDates}
          />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Room/:id" element={<><Room /><RoomSchedule
              onSaveDates={handleSaveDates} /></>} />
            <Route path="/Device/:deviceName" element={<Device
              onSaveDates={handleSaveDates} />} />
            <Route
              path="/irrigation"
              element={<IrrigationSys
                onSaveDates={handleSaveDates} />} />
            <Route path="/lightsys" element={<LightSys
              onSaveDates={handleSaveDates} />} />
          </Routes>
        </Router>
      </div>
    </DeviceContext.Provider>
  );
}

export default App;