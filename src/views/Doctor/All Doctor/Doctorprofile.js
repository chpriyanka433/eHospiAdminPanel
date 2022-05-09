import React,{useState} from "react";


const DoctorProfile=(props)=>{
  const showModalHandler = () => {
    props.doctorFilterBtn(false);
  }
    
    return(
        <>
      <div><button onClick={showModalHandler} style={{position: 'absolute',right:'5px', top:'0px', border:'none', color:'blue'}}>&#10006; </button></div>
      <div className="card">
          <div className="body"
          style={{ backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: '20px'
          }}
          >
            <div className="col-sm-12 member-card verified" style={{marginTop: '30px'}} >                       
              <div className="col-sm thumb-xl member-thumb"
              >
               <img src="https://media.istockphoto.com/photos/doctor-talking-with-patient-in-doctors-office-picture-id107429830?k=20&m=107429830&s=612x612&w=0&h=HF8xpiiCeQeX79pJtUMWJltpFex7xmLquPf4r1Kh2Es=" className="img-thumbnail rounded-circle" alt="profile-image" />                              
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. Aman dubey</h4>
                <h5 className="text-muted">Dentist</h5>
                <h1 className="text-muted">Orthopaedic Clinic Singapore</h1>
                <p className="text">
                The musculoskeletal system of our body comprises of bones, muscles,
                cartilage, tendons, ligaments, joints and other connective tissue. 
                It provides form, support, stability, and movement to the body. Injury
                or degeneration of any of these components can cause pain, loss of function, 
                and prevent us from doing the activities we enjoy. The Bone & Joint Centre is 
                a specialised orthopaedic clinic that offers prompt and evidence-based treatment 
                to all parts of the body including the knee, foot and ankle, shoulder and elbow, 
                hip and spine, as well as hand and wrist; ultimately aiming towards a positive long
                term outcome. Our professional team will ensure that each patient is well taken care
                of, and in doing so, add value to their quality of life.
                </p> 
              </div>
              <button className='btn btn-sm' style={{borderRadius: '10px'}}  > 
               </button>                          
            
            </div>
          </div>
        </div>
      
    
     
    
    
        </>
    )
}
export default DoctorProfile;