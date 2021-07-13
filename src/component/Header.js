import React,{Component, Fragment} from 'react';
import "./myapp.css"

// const Header = () => {
//     return(
//         <Fragment>
//             <center>
//                 <h1>React JS</h1>
//             </center><hr/>
//         </Fragment>
//     )
// }

class Header extends Component{
    constructor (){
        super ()

            this.state = {
                text : 'Enter Text Here',
            }
    }

    onLiveChange = (event) => {
        // console.log(event.target.value)
        this.setState({text : event.target.value ? event.target.value : 'Enter Text Here'})
    }



    render(){
        return(
            <Fragment>
            <center>
                <h1>React JS</h1>
            </center><hr/>
            <header>
                <center>
                    {/* Inline Style CSS */}
                    {/* <div style = {{color : 'white', textAlign : 'center'}}>User Text</div> */}
                    <center>
                        <input onChange={this.onLiveChange}/>
                        <div className = "logo">{this.state.text}</div>

                    </center>
                </center>
            </header>
        </Fragment>

        )
    }
}

export default Header;