import React,{Fragment} from 'react';


const Footer = (props) =>{
    // Create Object for CSS
    const myStyle = {
        footer:{
            backgroundColor : '#3F5161',
            color : 'white'
        }
    }

    return(
        <Fragment>
            <hr/><center>
                <footer>
                <h3 style = {myStyle.footer}>&copy; {props.text} {props.year} {props.month} </h3>
                </footer>
            </center>
        </Fragment>
    )
}

export default Footer;