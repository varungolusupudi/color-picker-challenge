import { useState } from "react";

const ColorChanger = () => {

    const [curColor, setCurColor] = useState('');
    const [color, setColor] = useState('');

    const handleChange = (event) => {
        setCurColor(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setColor(curColor);
        setCurColor("");
    }

    return (
        <div>
            <input onChange={handleChange} value={curColor} className="my-6 border-black border-solid border-2 py-2" type="text" name="colorInput" />
            <button onClick={handleSubmit} className="mx-4 rounded-lg border-black border-solid border-2 py-2 px-4" type="submit">Click</button>
            <h1>Color Preview:</h1>
            {<div style={{backgroundColor: color}}>
                <p>Whoa</p>
            </div>}
        </div>
    );
}

export default ColorChanger;