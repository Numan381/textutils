import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    } 
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    } 
    const handleClearClick = ()=>{
        let newText = (' ');
        setText(newText);
    } 
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    } 

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
  } 

    const handleOnChange = (event)=>{
        // console.log("ON Change");
        setText(event.target.value);

    } 
    const [text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" placeholder='Enter text here!' value={text}  onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uperCase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces from text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length }minutes Read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Enter something to preview it here!"}</p>
</div>
</>
  )
}
