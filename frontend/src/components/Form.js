import React, { Component } from 'react'
import { Button, Form, Container, Header,} from 'semantic-ui-react'
import axios from 'axios';

import '../index.css';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       age: '',
       gender: '',
       state: ''
    }
    
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
 handleClick = () => {
    window.open("https://docs.google.com/spreadsheets/d/1jK8gFI_5RyF1993G3-cp2iIA54h4NdBE_qr4tlJTixE/edit#gid=0");
  };
  submitHandler = e => {
      if(this.state.age<18){
          alert('Sorry- only candidate above 18 years are allowed ')
          return;
      }
    e.preventDefault();
    console.log(this.state);
    

    axios.post('https://sheet.best/api/sheets/b0d964b5-7304-462c-b364-55deab9ff870', this.state)
    .then(response => {
      console.log(response);
      //window.location.href=('')
    })
  }
  
  render() {
    const { age, gender, state } = this.state;    
    return (
      <Container fluid className="container" >
        
        <button style={{float:'',color:'blue',textDecoration:"underline",fontSize:'1.5rem',margin:'20px 0 0 0'}} 
                onClick={this.handleClick}
        >
            Google Sheet Link
        </button>
        <Header as='h2'>Form </Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <select className="form-select" 
                    aria-label="Default select example"
                    name="gender"
                    onChange={this.changeHandler}
                    value={gender}
                    
                    >
                <option>select gender</option>
                <option value="male">male</option>
                <option valve="female">female</option>
                
            </select>
            
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <input placeholder='Enter your state' type="text" name = "state" value = {state} onChange={this.changeHandler}/>
          </Form.Field>
          
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}