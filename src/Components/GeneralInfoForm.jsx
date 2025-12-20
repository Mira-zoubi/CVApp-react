import { useState } from 'react'
import "../Style/GeneralInfoForm.css";


export function GeneralInfoForm({Name, Email,PhoneNumber,setName,setEmail,setPhoneNumber}){

    return (
<>
           
  <form className= "Form " >
       
    <h2 className='FormTitle'> 👤 Personal Info</h2>

                <div className='label-input'>
        <label className='Label'> Name: </label>
        <input className='Input' type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>  
                </div>
                 
         <div className='label-input'>
         <label  className='Label'> Email:</label>
         <input className='Input' type='text' value={Email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>

 <div className='label-input'> 
         <label  className='Label'> Phone Number: </label>
           <input className='Input' type='number' value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/> 
 </div>
       
    </form>
     
  

</>
      
     
    )
}