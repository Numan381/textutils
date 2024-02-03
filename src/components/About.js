import React from 'react';
// import Navbar from './Navbar';

export default function About(props) {
    
    // const [myStyle, setMyStyle]= useState({

    //     color:'black',
    //     backgroundColor: 'white'
    //     })
  return (

      // <div className="container" style={myStyle} >
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              {/* <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
              <button className="accordion-button" style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743',border:'2px solid',borderColor:props.mode === 'dark' ? 'white' : '#042743' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              {/* <div className="accordion-body"style={myStyle}> */}
              <div className="accordion-body" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <strong>Search on Goolge to know about TextUtills hehehehe! </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              {/* <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> */}
              <button className="accordion-button collapsed" style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743',border:'2px solid',borderColor:props.mode === 'dark' ? 'white' : '#042743' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              {/* <div className="accordion-body"style={myStyle}> */}
              <div className="accordion-body" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <strong>I'm not Wala ! <code>But some time feel single</code></strong>              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              {/* <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> */}
              <button className="accordion-button collapsed" style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743',border:'2px solid',borderColor:props.mode === 'dark' ? 'white' : '#042743' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Accordion Item #3</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              {/* <div className="accordion-body"style={myStyle}> */}
              <div className="accordion-body" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <strong>I'm doing just practice. <code>I have 3 frnds that was circle of my life! </code></strong>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
      </div>

  )
}
