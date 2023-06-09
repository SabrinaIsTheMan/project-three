import '../styles/Form.css';
import '../styles/Buttons.css';
import { useState } from 'react';

function CatForm({ handleSubmit }) {

    const [groomValue, setGroomValue] = useState(3);
    const [groomCheck, setGroomCheck] = useState(true);

    const handleGroomChange = (event) => {
        setGroomValue(event.target.value);
    }

    const handleGroomCheck = (event) => {
        setGroomCheck(!groomCheck);

        if (event.target.checked === false) {
            setGroomValue(null); //console will warn that we should be not passing null as props, but this is a null for an api param so we need it
        } else {
            setGroomValue(3); //back to default when checked
        }
    }

    const [playValue, setPlayValue] = useState(3);
    const [playCheck, setPlayCheck] = useState(true);

    const handlePlayChange = (event) => {
        setPlayValue(event.target.value);
    }

    const handlePlayCheck = (event) => {
        setPlayCheck(!playCheck);

        if (event.target.checked === false) {
            setPlayValue(null);
        } else {
            setPlayValue(3);
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

    return (
        <form className="form catForm" onSubmit={(event) => { handleSubmit(event, [groomValue, playValue, shedValue]) }}>
            <legend>Filter cat breeds by:</legend>

            <div className="fieldsets catFieldsets">
                <fieldset>
                    <input
                        type="checkbox"
                        name="groomCheck"
                        id="groomCheck"
                        checked={groomCheck}
                        onChange={handleGroomCheck}
                        aria-label="Grooming Checkbox"
                    />
                    <label htmlFor="groomValue"><label htmlFor="groomCheck">Grooming:</label></label>
                    <input
                        type="range"
                        id="groomValue"
                        name="groomValue"
                        step="1" min="1" max="5"
                        onChange={handleGroomChange}
                        value={groomValue}
                        disabled={!groomCheck}
                    />
                </fieldset>

                <fieldset>

                    <input
                        type="checkbox"
                        name="playCheck"
                        id="playCheck"
                        checked={playCheck}
                        onChange={handlePlayCheck}
                        aria-label="Playfulness Checkbox"
                    />
                    <label htmlFor="playValue"><label htmlFor="playCheck">Playfulness:</label></label>
                    <input
                        type="range"
                        id="playValue"
                        name="playValue"
                        step="1" min="1" max="5"
                        onChange={handlePlayChange}
                        value={playValue}
                        disabled={!playCheck}
                    />
                </fieldset>

                <fieldset>
                    <input
                        type="checkbox"
                        name="shedCheck"
                        id="shedCheck"
                        checked={shedCheck}
                        onChange={handleShedCheck}
                        aria-label="Shedding Checkbox"
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
            </div>

            <button type="Submit" className="catButton">Submit</button>
        </form>
    )
}

export default CatForm;
