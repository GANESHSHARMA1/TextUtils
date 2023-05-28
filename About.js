import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white' 
    // })

    let myStyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? 'black' : 'white' 
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyzeyour text quickly and efficiently. It helps in word count, character count and many more works that you want.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free chracter counter tool that provides instant character count & word count statistics for a given text. It is suitable for writing text with word/ character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
