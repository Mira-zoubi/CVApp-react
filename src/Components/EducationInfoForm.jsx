import '../Style/EducationInfoForm.css';

export function EducationInfoForm({School, Degree, StartDate, EndDate, setSchool, setDegree, setStartDate, setEndDate}){
    return(
        <>
     

              <form className='Form'>
   
  <h2 className='FormTitle'> Education </h2>
    <div className='label-input'>
  <label className='Label'>School: </label>
        <input className='Input' type='text' value={School} onChange={(e)=>setSchool(e.target.value)}/>
    </div>
      
<div  className='label-input'>
<label className='Label'>Degree: </label>
        <input className='Input' type='text' value={Degree} onChange={(e)=>setDegree(e.target.value)}/>
</div>
        
<div  className='label-input'>
 <label className='Label'>Start Date:</label>
        <input className='Input' type='number' value={StartDate} onChange={(e)=>setStartDate(e.target.value)}/>
</div>
       
<div  className='label-input'>
<label className='Label'>End Date:</label>
        <input className='Input' type='number' value={EndDate} onChange={(e)=>setEndDate(e.target.value)}/>
</div>
        
        
            </form>

      
      
        
        </>
    )
}
