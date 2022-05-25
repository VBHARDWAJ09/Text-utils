import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');


    const handleClickUp = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Upper Case", "success");
    }

    const handleClickLow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lower Case", "success");
    }
    const handleCopy = () => {
        var T = document.getElementById('myBox');
        navigator.clipboard.writeText(T.value);

        props.showAlert("Copied to Clipboard", "success");
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }

    const handelCap = () => {
        var str = text;
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        str = splitStr.join(" ");
        str = str.split(/[ ]+/);
        setText(str.join(" "));
        props.showAlert(`Text has been Capitalized`, "success");
    }

    const removeAlphabets = () => {
        if(text.replace(/[0-9]/g, '')===text)    setText("");
        else{
            var str = text.match(/\d/g);
            str = str.join("");
            setText(str);
        }
        props.showAlert(`Alphabets has been removed`,"success")
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(41, 48, 53)', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={(e) => setText(e.target.value)} id="myBox" value={text} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={() => {setText("");props.showAlert("Cleard","success")}}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleClickUp}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleClickLow}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={()=>{setText(text.replaceAll(' ',''));props.showAlert(`All spaces has been removed`,"success")}}>Remove All Spaces</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handelCap}>Capitalize</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={()=>{setText(text.replace(/[0-9]/g, ''));props.showAlert("Numbers has been removed","success")}}>Remove All Numbers</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={removeAlphabets}>Remove All Alphabets</button>
            </div>
            <div className="container my-4 " style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} charcters</p>
                <p>Text can be read in {0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} minutes.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
