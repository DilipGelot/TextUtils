import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =() =>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =() =>{
        let newText= '';
        setText(newText)
    }
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} placeholder='Enter Your text here'></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length} words</b> and  <b>{text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").length} </b>Minutes needs to read this texts</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}
