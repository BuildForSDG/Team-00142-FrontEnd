import React,{Component} from 'react'
class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
        username: ''
    }
}
handleUsernameChange = () =>{
    this.setState({
username:event.target.value
    } )
}

    render(){
        return(
            <form>
            <div>
            <label>Username </label>
            <input
             type='text'
             value={this.state.username}
             onChange={this.handleUsernameChange}
             />
            </div>
            </form>
        )
    }
}
export default Login 