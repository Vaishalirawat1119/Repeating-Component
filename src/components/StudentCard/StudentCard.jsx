import React from 'react'
import './StudentCard.css'



const StudentCard = (props) => {
    console.log(props.userData);
    
    

  return (
    
        <>
        {
            props.userData.map((el,index) => {
                console.log(el,index);
                
                return(
                    
                    <div className='card-parent' key = {index}>
                        <div className='card-child-image'>
                        <img src={el.image} alt="Image-Card" />
                        </div>

                        <div className='card-child-desc'>
                            <h2>{el.userName}</h2>
                            <p>{el.userDescription}</p>
                            <button>Read More</button>
                        </div>
                    </div>   
                )
            }) 
        }
        </>        
  )
}

export default StudentCard
