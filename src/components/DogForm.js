import '../styles/Form.css';
import '../styles/Buttons.css';
import { useState } from 'react';

function DogForm({handleSubmit}) {

    const [barkValue, setBarkValue] = useState(3);
    const [barkCheck, setBarkCheck] = useState(true);

    const handleBarkChange = (event) => {
        setBarkValue(event.target.value);
    }

    const handleBarkCheck = (event) => {
        setBarkCheck(!barkCheck);

        if (event.target.checked === false) {
            setBarkValue(null); //console will warn that we should be not passing null as props, but this is a null for an api param so we need it
        } else {
            setBarkValue(3); //back to default when checked
        }
    }

    const [energyValue, setEnergyValue] = useState(3);
    const [energyCheck, setEnergyCheck] = useState(true);

    const handleEnergyChange = (event) => {
        setEnergyValue(event.target.value);
    }

    const handleEnergyCheck = (event) => {
        setEnergyCheck(!energyCheck);

        if (event.target.checked === false) {
            setEnergyValue(null);
        } else {
            setEnergyValue(3);
        }
    }

    const [shedValue, setShedValue] = useState(3);
    const [shedCheck, setShedCheck] = useState(true);

    const handleShedChange = (event) => {
        setShedValue(event.target.value);
    }

    const handleShedCheck = (event) => {
        setShedCheck(!shedCheck);

        if (event.target.checked === false) {
            setShedValue(null);
        } else {
            setShedValue(3);
        }
    }

    const [trainValue, setTrainValue] = useState(3);
    const [trainCheck, setTrainCheck] = useState(true);

    const handleTrainChange = (event) => {
        setTrainValue(event.target.value);
    }

    const handleTrainCheck = (event) => {
        setTrainCheck(!trainCheck);

        if (event.target.checked === false) {
            setTrainValue(null);
        } else {
            setTrainValue(3);
        }
    }

    return (
        <form className="form dogForm" onSubmit={(event) => { handleSubmit(event, [barkValue, energyValue, shedValue, trainValue]) }}>
            <legend>Filter dog breeds by:</legend>

            <div className="fieldsets dogFieldsets">
                <fieldset>
                    <input
                        type="checkbox"
                        name="barkCheck"
                        id="barkCheck"
                        checked={barkCheck}
                        onChange={handleBarkCheck}
                        aria-label="Barking Checkbox"
                    />
                    <label htmlFor="barkValue"><label htmlFor="barkCheck">Barking:</label></label>
                    <input
                        type="range"
                        id="barkValue"
                        name="barkValue"
                        step="1" min="1" max="5"
                        onChange={handleBarkChange}
                        value={barkValue}
                        disabled={!barkCheck}
                    />
                </fieldset>

                <fieldset>
                    <input
                        type="checkbox"
                        name="energyCheck"
                        id="energyCheck"
                        checked={energyCheck}
                        onChange={handleEnergyCheck}
                        aria-label="Energy Checkbox"
                    />
                    <label htmlFor="energyValue"><label htmlFor="energyCheck">Energy:</label></label>
                    <input
                        type="range"
                        id="energyValue"
                        name="energyValue"
                        step="1" min="1" max="5"
                        onChange={handleEnergyChange}
                        value={energyValue}
                        disabled={!energyCheck}
                    />
                </fieldset>

                <fieldset>
                    <input
                        type="checkbox"
                        name="shedCheck"
                        id="shedCheck"
                        checked={shedCheck}
                        onChange={handleShedCheck}
                        aria-label="Sheeding Checkbox"
                    />
                    <label htmlFor="shedValue"><label htmlFor="shedCheck">Shedding:</label></label>
                    <input
                        type="range"
                        id="shedValue"
                        name="shedValue"
                        step="1" min="1" max="5"
                        onChange={handleShedChange}
                        value={shedValue}
                        disabled={!shedCheck}
                    />
                </fieldset>

                <fieldset>
                    <input
                        type="checkbox"
                        name="trainCheck"
                        id="trainCheck"
                        checked={trainCheck}
                        onChange={handleTrainCheck}
                        aria-label="Trainability Checkbox"
                    />
                    <label htmlFor="trainValue"><label htmlFor="trainCheck">Trainability:</label></label>
                    <input
                        type="range"
                        id="trainValue"
                        name="trainValue"
                        step="1" min="1" max="5"
                        onChange={handleTrainChange}
                        value={trainValue}
                        disabled={!trainCheck}
                    />
                </fieldset>
            </div>
            <button type="Submit" className="dogButton">Submit</button>
        </form>
    )
}

export default DogForm;
