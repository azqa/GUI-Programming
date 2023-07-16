import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 

const LightSys = ({ onSaveDates }) => {
  const saveOnClick = () => {
    const lightStart = document.querySelector('.datepicker1').value;
    const lightEnd = document.querySelector('.datepicker2').value;
    onSaveDates(lightStart, lightEnd);

    //local storage saving
    localStorage.setItem('lightStartDate', lightStart);
    localStorage.setItem('lightEndDate', lightEnd);
  };
  
  //restores values from local storage on component
  React.useEffect(() => {
    const storedlightStartDate = localStorage.getItem('lightStartDate');
    const storedlightEndDate = localStorage.getItem('lightEndDate');

    if (storedlightStartDate && storedlightEndDate) {
      document.querySelector('.datepicker1').value = storedlightStartDate;
      document.querySelector('.datepicker2').value = storedlightEndDate;
    }
  }, []);

  //actual light system layout
  return (
    <div className="light-body">
      <div className="text-center">
        <h1 className="top-li">🌸Garden System🌸</h1>
        <h4 className="title-li">💡Light System💡</h4>
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-weight-bold-li">Start Date & Time:</h2>
        <input
          type="datetime-local"
          className="datepicker1"
          style={{ width: '300px', height: '40px' }}
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-weight-bold-li">End Date & Time:</h3>
        <input
          type="datetime-local"
          className="datepicker2"
          style={{ width: '300px', height: '40px' }}
        />
      </div>
      <div className="text-center mt-5">
        <button className="save-btn-li" onClick={() => { saveOnClick() }}>Add to History</button>
      </div>
    </div>
  );
};

export default LightSys;