import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import passParam from './paramWrapper';

const RoomSchedule = ({ onSaveDates }) => {

    const saveOnClick = () => {

        const roomStart = document.querySelector('.datepicker1').value;
        const roomEnd = document.querySelector('.datepicker2').value;
        onSaveDates(roomStart, roomEnd);

        //local storage saving
        localStorage.setItem('roomStartDate', roomStart);
        localStorage.setItem('roomEndDate', roomEnd);
    };

    //restores values from local storage on component
    React.useEffect(() => {
        const storedroomStartDate = localStorage.getItem('roomStartDate');
        const storedroomEndDate = localStorage.getItem('roomEndDate');

        if (storedroomStartDate && storedroomEndDate) {
            document.querySelector('.datepicker1').value = storedroomStartDate;
            document.querySelector('.datepicker2').value = storedroomEndDate;
        }
    }, []);

    return (
        <div>
            <div className="mt-4 text-center">
                <h2 className="start-ro">Start Date & Time:</h2>
                <input
                    type="datetime-local"
                    className="datepicker1"
                    style={{ width: '300px', height: '40px' }}
                />
            </div>
            <div className="mt-5 text-center">
                <h3 className="end-ro">End Date & Time:</h3>
                <input
                    type="datetime-local"
                    className="datepicker2"
                    style={{ width: '300px', height: '40px' }}
                />
            </div>
            <div className="text-center mt-5">
                <button className="save-btnro" onClick={() => { saveOnClick() }}>SAVE</button>
            </div>
        </div>
    );
}
export default passParam(RoomSchedule);