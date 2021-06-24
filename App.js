import React,{Fragment} from 'react';
import Todos from './components/Todo/Todos';
import {ToastContainer} from "react-toastify";
import Header from './components/Header';
import NewWorks from './components/NewWorks';

const App=()=>{
    const styles={
        textAlign:"center",
        backgroundColor:"#1a194f",
        color:"white",
        height: "80vh",
        width: "100%",
        padding:"20px",
        boxShadow: "2px 2px 20px blue",
    }

    return(
        <Fragment>
            <div style={styles}>
                <Header />
                <NewWorks/>
                <Todos />
                <ToastContainer/>
            </div>
        </Fragment>
    )
}


export default App;