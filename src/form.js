import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import wavy_house from './wavy_house.jpg';
import wavy from './wavy.svg';
import orange_facebook from './orange-facebook.gif';
import google_orange from './google-orange.jpg'


 class Form extends React.Component{
     constructor(props){
         super(props);
         this.state = {id_value: 'Enter email id',password:"password"};
         this.textInput= React.createRef();
         this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(event) {
        this.setState({id_value: event.target.id_value});
        this.setState({password:event.target.password});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.id_value + this.state.password);
        event.preventDefault();
      }
    render(){
        return(
            <div id="form-content" >
                <form onSubmit={this.handleSubmit}>
                    <div style={{float:"right", marginRight:'40px', marginTop:"20px"}}>
                    <img src={wavy_house} height="40px" width="40px"  />
                    <h3>Welcome to DC</h3>
                    <tr >  
                        <td width="100px">
                        <a href="index.html" style={{color:"orangered"}} >Sign In</a>

                        </td>
                        <td>
                        <a href="index.html"  style={{color:"grey"}} >Sign Up</a>

                        </td>
                    </tr>
                    <tr>
                        <td width="100px">
                            <hr style={{marginLeft: "0px", backgroundColor: "orangered"}} />
                        </td>
                        <td>
                            <hr style={{ backgroundColor: "grey"}}  />
                        </td>
                    </tr>
                    <br />
                    <div className="field" style={{backgroundColor:"lightgrey",borderRadius:"10px"}}>
                        <img src={logo} width="20px" height="20px" style={{backgroundColor:"lightgrey",borderRadius:"10px"}}/>
                    <input type="text" size="15" ref={this.textInput} onChange={this.handleChange} value={this.state.id_value} onChange={this.handleChange} style={{backgroundColor:"lightgrey",borderRadius:"10px"}}/>
                    </div>
                    <br />
                    <div className="field" style={{backgroundColor:"lightgrey",borderRadius:"10px"}}>
                        <img src={logo} width="20px" height="20px" style={{backgroundColor:"lightgrey",borderRadius:"10px"}}/>
                    <input type="text" size="15" onChange={this.handleChange} value={this.state.password} style={{backgroundColor:"lightgrey",borderRadius:"10px"}}/>
                    </div>
                    <h5 style={{float:"right"}}>Forgot Password?</h5>
                    <br />
                    <input type="Submit"  onSubmit={this.handleSubmit} value="Login" style={{width:"200px",backgroundColor:"orangered", height:"30px", borderRadius:"10px",color:"white"}} />
                    <br />


                        <tr >
                            <td width="100px">
                            <h5>Login with:</h5>
                            </td>
                            <td width="50px" >
                            <a href=""> <img src={orange_facebook} height="20px" width="20px" /></a>

                            </td>
                            <td>
                            <a href=""> <img src={google_orange} height="30px" width="30px" /></a>

                            </td>
                        </tr>
                        

                    </div>


                    
                </form>

            </div>

        )

    }
       
    
}

export default Form;

