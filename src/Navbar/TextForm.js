import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';


export default function TextForm() {
  const [text, setText] = useState(' ');
  const [color,setColor]=useState("black");
  const HandelUpclick = () => {
  
    let newText = text.toUpperCase();
    setText(newText);
  }

  const HandelClearclick = () => {
  
    let newText = "";
    setText(newText);
  }

  const HandelLoclick = () => {

    let newText = text.toLowerCase();
    setText(newText);
  }

  const Handelonchange = (event) => {
 
    setText(event.target.value);
  }

  const Speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
  }

  let myStyle = {
    
  }

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{color: props.mode === 'dark'?'white' : 'black'}}>
        <div style = {myStyle}>
        <Form.Label ><h1 >Text to Ananlyze</h1></Form.Label>
        </div>
        <Form.Control as="textarea" rows={5} value = {text} onChange = {Handelonchange} style{ {backgroundColor : props.mode === 'dark'?'grey' : 'white',color: props.mode === 'dark'?'white' : 'black'} }/>
      </Form.Group>
    </Form>

    <Button variant="outline-primary mx-1" onClick={HandelUpclick}> Uppercase </Button>
    <Button variant="outline-danger mx-1" onClick={HandelLoclick}> LowerCase </Button>
    <Button variant="outline-success mx-1" onClick={HandelClearclick}> Clear </Button>
    <Button variant="outline-info mx-1" onClick={Speak}> Speak </Button>
    <Button variant="outline-secondary mx-1" onClick={copyText}> Copy </Button>


  <div className="container my-3">
    <h2> Output </h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} Minutes to read </p>
    <h2> Preview </h2>
    <p> {text} </p>
    
  </div>

  </>
  )
}
