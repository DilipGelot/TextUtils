import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
        document.title='TextUtils Uppercase';
    }
    const handleLoClick =() =>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
        document.title='TextUtils lowercase';
    }
    const handleClearClick =() =>{
        let newText= '';
        setText(newText)
        props.showAlert("Your text are cleared","warning");
        document.title='TextUtils cleared';
    }
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
    const handleCopy = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
        document.title='TextUtils clipboard';
        document.getSelection().removeAllRanges();
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success");
        document.title='TextUtils spaces are removed';
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} placeholder='Enter Your text here'></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Lowercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</b> and  <b>{text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </b>Minutes needs to read this texts</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
