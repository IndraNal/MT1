import React, {Component} from "react";
import SignIn from "../Components/Form/index";
import Wrapper from "../Components/Wrapper/index"
import Banner from "../Components/Banner";


class Login extends Component {

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

render() {    
    return (
        <div id="login">
        <Wrapper>
            <Banner />
            <SignIn className="signin"> </SignIn> 
        </Wrapper>
        </div>
    );
  
}
}
export default Login;