import '../Style/EducationInfoDisplay.css';

export function EducationInfoDisplay({School, Degree, StartDate, EndDate}){

    return (

<>
<h3 className='Headline'> Education</h3>
 <div className="EducationDisplay-Form">

        <div className='Dates'> 
            <p> {StartDate}</p>
            <p> {EndDate}</p>
        </div>

        <div>
            <div className='School'> {School}</div>
            <div className='Degree'> {Degree}</div>
         </div>
    </div>

</>
    )
   
}