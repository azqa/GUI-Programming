import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 


const IrrigationSys = ({ onSaveDates }) => {
  const saveOnClick = () => {
    const irrStart = document.querySelector('.datepicker1').value;
    const irrEnd = document.querySelector('.datepicker2').value;
    onSaveDates(irrStart, irrEnd);

    //local storage saving
    localStorage.setItem('startIrrDate', irrStart);
    localStorage.setItem('endIrrDate', irrEnd);
  };

  //restores values from local storage on component
  React.useEffect(() => {
    const storedstartIrrDate = localStorage.getItem('startIrrDate');
    const storedendIrrDate = localStorage.getItem('endIrrDate');

    if (storedstartIrrDate && storedendIrrDate) {
      document.querySelector('.datepicker1').value = storedstartIrrDate;
      document.querySelector('.datepicker2').value = storedendIrrDate;
    }
  }, []);

  //actual irrigation system layout
  return (
    <div className="irrigation-body">
      <div className="text-center">
        <h1 className="top-ir">🌸Garden System🌸 </h1>
        <h4 className="title-ir">⛲Irrigation System⛲</h4>
      </div>
      <div className="mt-4 text-center">
        <h2 className="start-ir">Start Date & Time:</h2>
        <input
          type="datetime-local"
          className="datepicker1"
          style={{ width: '300px', height: '40px' }}
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="end-ir">End Date & Time:</h3>
        <input
          type="datetime-local"
          className="datepicker2"
          style={{ width: '300px', height: '40px' }}
        />
      </div>
      <div className="text-center mt-5">
        <button className="save-btnir" onClick={() => { saveOnClick() }}>Add to History</button>
      </div>
    </div>
  );
};

export default IrrigationSys;


