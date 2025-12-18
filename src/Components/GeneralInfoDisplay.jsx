
import '../Style/GeneralInfoDisplay.css';

export function GeneralInfoDisplay({Name, Email, PhoneNumber} ){
    
    return(

       

        <div className='DisplayForm'>
           <div className='Name'>{Name}</div>

           <div className='EmailPhoneNumber'>

            <div>
            {Email} |
            </div>

           <div>
             {PhoneNumber}
           </div>
           
           </div>
        </div>
   

    )
   
}