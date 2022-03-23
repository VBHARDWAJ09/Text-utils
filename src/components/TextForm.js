import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleClickUp=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted into Upper Case","success");
    }

    const handleClickLow=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lower Case","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
        
    }
    const handleCopy=()=>{
        var T = document.getElementById('myBox');
        navigator.clipboard.writeText(T.value);
        
        props.showAlert("Copied to Clipboard","success");
    }
    const removeExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }
    const [text,setText]=useState('');
    // setText = "";
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example of text</label> */}
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'rgb(26 74 104)',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox"  value ={text} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleClickUp}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleClickLow}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-4 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
        <p>Text can be read in {0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
