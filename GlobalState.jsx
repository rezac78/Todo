import React,{useState} from 'react';
import simpleContext from './context/simpleContext';
import {toast} from "react-toastify";
const GlobalState=(props)=>{
    const [getWorks,setWorks]=useState([])
    const [getSingleWork,setSingleWork]=useState('')

    const handledeletjob=id=>{
        const works=[...getWorks]
        const filterworks=works.filter(p=>p.id!==id)
        setWorks(filterworks);
        
        const workIndex=works.findIndex(p=>p.id===id);
        const work=works[workIndex];

        toast.error(`${work.job} با موفقیت حذف شد`,{
            position:"top-right",
            closeOnClick:true
        })
    }
    const handleNewjob=()=>{
        const works=[...getWorks]
        const work={
            id:Math.floor(Math.random()*1000),
            job:getSingleWork
        };
        if(work.job!=="" && work.job!==' '){
            works.push(work);
            setSingleWork("")
            setWorks(works)

            toast.success(`کار ${work.job} با موفقیت اضافه شد`,{
                position:"bottom-right",
                closeButton:true,
                closeOnClick:true
            });
        }
    }
    const setWork=event=>{
        setSingleWork(event.target.value)
    };
    const handleNameChang=(event,id)=>{
        const allWorks=getWorks;
        const workIndex=allWorks.findIndex(p=>p.id===id);
        const work=allWorks[workIndex];
        work.job=event.target.value;

        const works=[...allWorks]
        works[workIndex]=work
        setWorks(works)
    }

    return(
        <simpleContext.Provider value={{works:getWorks,work:getSingleWork,handleNameChang:handleNameChang,handleNewjob:handleNewjob,handledeletjob:handledeletjob,setWork:setWork}}>
            {props.children}
        </simpleContext.Provider>
    )
}

export default GlobalState;