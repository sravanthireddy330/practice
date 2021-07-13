import React,{Fragment} from 'react';
import Header from './Header';
import Footer  from './Footer';
import "./myapp.css"

const Home = () => {
    return(
        <Fragment>
            <Header/>
            <h1>Hi ! Welcome to React JS</h1>
            <Footer  text = 'React JS 'year = '2021' month = 'July'/>
        </Fragment>
    )
}

export default Home
