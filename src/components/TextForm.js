import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
    const handleUpClick = ()=>{
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
        setText(event.target.value);

    } 
    const handleDownload=()=>{
      if(text?.length===0){
        return alert('You cant download an empty file')
      }
      const textBlob=new Blob([text],{type:'text/plain'})
      const url=URL?.createObjectURL(textBlob)
      const anchortag=document?.createElement('a')
      
      anchortag.href=url;
      const fileName=prompt("Enter file name eg:User.txt(Please remember to add extention *.txt)")
      if(fileName?.length===0)return;
      anchortag.download=fileName
      anchortag.click()

    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" placeholder='Enter text here!' value={text}  onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uperCase</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces from text</button>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
{/* <p>{text.split(/([" "])+/g)?.filter((e)=>/([" "])+/g.test(e)).length} words and {text.length} characters</p> */}
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length }minutes Read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
  )
}
