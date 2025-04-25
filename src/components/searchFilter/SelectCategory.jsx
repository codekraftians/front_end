function SelectCategory() {
    return (
        <div className="flex flex-col md:flex">
            <fieldset className="fieldset">
                <select defaultValue="Pick a browser" className="select select-secondary w-full text-center ">
                    <option disabled={true}>Select Category</option>
                    <option>Online</option>
                    <option>In Person</option>
                </select>
            </fieldset>
        </div>
    );
}

export default SelectCategory;