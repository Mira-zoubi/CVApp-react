import { useState } from 'react'
import '../Style/ExperienceInfoForm.css';
export function ExperienceInfoForm({CompanyName, PositionTitle, BeginDate, FinishDate , setCompanyName, setPositionTitle, setBeginDate, setFinishDate}){

return (
    <>
    <form className= "Form ">
        
        <h3 className='FormTitle'> Experience </h3>

        <div className='label-input'>
            
            <label className='Label'>Company Name:</label>
        <input className='Input' type='text' value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)}/>
             </div>
        
  <div className='label-input'>
            <label className='Label'>Postion Title:</label>
        <input className='Input' type='text' value={PositionTitle} onChange={(e)=>setPositionTitle(e.target.value)}/>
    </div>

            <div className='label-input'>
            <label className='Label'>Start Date:</label>
        <input  className='Input' type='number' value={BeginDate} onChange={(e)=>setBeginDate(e.target.value)}/>

    </div>
     <div className='label-input'>
            <label className='Label'>Finish Date:</label>
        <input className='Input' type='number' value={FinishDate} onChange={(e)=>setFinishDate(e.target.value)}/>
        </div>
    </form>
    
    
    </>
)

}