import React, { useState } from 'react';
import './SelectTileForm.css';

const SelectTileForm = ({ onSubmit, types, selected }) => {

    const [formValues, setFormValues] = useState({ type: selected });

    const submitFormHandler = React.useCallback((e) => {
        e.preventDefault();
        onSubmit(e, formValues);
    }, [onSubmit, formValues]);

    const changeValueHandler = React.useCallback((e) => {
        setFormValues({ [e.target.name]: e.target.value });
    }, [])

    return (
        <form onSubmit={submitFormHandler}>
            <div className="select-type">
                {types.map(tile => {
                    return (
                        <div key={`selectType-` + tile.name} className="form-control">
                            <input id={`selectType-` + tile.name} type="radio" name="type" value={tile.name} onChange={changeValueHandler} checked={formValues.type === tile.name} />
                            <label htmlFor={`selectType-` + tile.name}>
                                <span className={"type " + tile.classes}></span>
                            </label>
                        </div>
                    )
                })}
            </div>
            <button type="submit">Confirm</button>
    </form>
    );
}

export default SelectTileForm;