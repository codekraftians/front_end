import React from 'react';

function SelectCategory({ onSelect }) {
    const handleChange = (e) => {
        if (onSelect) {
            onSelect(e.target.value);
        }
    };

    return (
        <div className="flex flex-col md:flex">
            <fieldset className="fieldset">
                <select 
                    defaultValue="" 
                    className="select select-secondary text-center"
                    onChange={handleChange}
                >
                    <option value="">All Events</option>
                    <option value="ONLINE">Online</option>
                    <option value="IN_PERSON">In Person</option>
                </select>
            </fieldset>
        </div>
    );
}

export default SelectCategory;