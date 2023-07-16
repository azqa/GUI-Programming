import React from 'react';
import withRouter from './paramWrapper';


class Temperature extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTemp = (temperature) => {
        {/* parseInt converts the temp to an int */ }
        const temp = parseInt(localStorage.getItem(this.props.params.id), 10);

        if (temperature == 1) {
            {/* this.props.params.id get the the room name */ }
            this.props.onTempChange(parseInt(temp, 10) + 1);
            localStorage.setItem(this.props.params.id, parseInt(temp, 10) + 1);

        }
        else {
            this.props.onTempChange(parseInt(temp, 10) - 1);
            {/* everything is stored in local storage */ }
            localStorage.setItem(this.props.params.id, parseInt(temp, 10) - 1);
        }
    }

    render() {
        const displayTemp = parseInt(localStorage.getItem(this.props.params.id), 10);
        return (
            <div class='temp-body'>
                <div class='temp-container'>
                    <div class='temperature-display'>
                        {/* displays the temp in F */}
                        <div className='actual-temp'>{displayTemp}°F</div>
                    </div>
                    <div class='button-div'>
                        {/* buttons for the temp */}
                        <button onClick={() => this.changeTemp(1)}><b>+</b></button>
                        <button onClick={() => this.changeTemp(-1)}><b>-</b></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Temperature);