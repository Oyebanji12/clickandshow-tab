import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineDoubleRight} from "react-icons/ai"


const Tab = () => {
    const [loading, setLoading]= useState (true)
    const [jobs, setJobs]= useState ([])
     const [value, setValue]= useState (0)

    

    useEffect(()=>{
        axios.get('https://course-api.com/react-tabs-project')
        .then((response)=>{
        setJobs(response.data)
        console.log(response.data)
        })
        setLoading(false)

        
       
    }, []);
    if(loading){
        return(
            <div className="title">
                <h2>Loading.....</h2>

            </div>
        )
    }
    


const { company, dates, duties, title } = jobs[value] || {}

  return (
    
    <div>
    <section className='section'>
          <div className='title'>
            <h2>Experience</h2>
            <div className='underline'></div>
        </div>  
        <div className="jobs-center">
            {/* btn container */}
            <div className='btn-container'>
                {jobs.map((item, index)=>{
                    return(
                        <button key={item.id} onClick={()=> setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} >
                            {item.company}
                        </button>
                        
                        
                    )
                })}

            </div>
        
            {/* job info */}
            <article className='job-info'>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-date'>{dates}</p>
                  <div className="job-desc">
                    <p><AiOutlineDoubleRight className='job-icon' /> {duties}</p>        
                </div> 
            </article>
            <div className='last-btn-container'>
                <button className='last-btn'>more info</button>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Tab

