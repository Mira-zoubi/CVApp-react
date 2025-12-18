import "../Style/ExperienceInfoDisplay.css";

export function ExperienceInfoDisplay({CompanyName, PositionTitle, BeginDate, FinishDate}){

    return (
        <>
        <h3 className='Headline'> Experience</h3>
        <div className="ExperienceForm">

        <div className='Dates'>
            <p> {BeginDate}</p>
            <p>{FinishDate}</p>
        </div>
        <div> 
            <div className="Company"> {CompanyName}</div>
            <div className="Position"> {PositionTitle}</div>
        </div>

        </div>

        
        </>
    )
}