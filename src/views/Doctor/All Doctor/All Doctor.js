import React, { useState, useEffect } from 'react';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal'
import Doctorprofile from './Doctorprofile'

/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/


const All_Doctor = () => {
  const [doctorFilter, setdoctorFilter] = useState(false)
  const doctorFilterBtn = (bool) => {
    setdoctorFilter(bool)
  }
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo();
  });
  const handleDirect = () => {
    //event.preventDefault();
    history.push('/Doctor Profile');
    //alert("successfully login");
  };

  return (
    <>
      <div className='AllDoctorcontainer'>
        <section className="AllDoctorcontent">
          <div className="container-fluid">
            <div className="block-header">
              <h2>All Doctors</h2>
            </div>
            <div className="row clearfix">
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="  card2">
                  <div className=" doctorbody body">
                    <div className=" doctorcard member-card verified">
                    <div className='image1'>
                      <div className="thumb-xl member-thumb m-b-0"style={{marginTop:'10px'}}>
                        
                        <img src="https://media.istockphoto.com/photos/doctor-talking-with-patient-in-doctors-office-picture-id107429830?k=20&m=107429830&s=612x612&w=0&h=HF8xpiiCeQeX79pJtUMWJltpFex7xmLquPf4r1Kh2Es=" className="img-thumbnail rounded-circle" alt="profile-image" />
                        
                      </div>
                      </div>
                      <div className="contentimg" style={{ color: 'white'}}>
                        <h4 className=" doctorname m-b-0 ">Dr. Aman Dubey</h4>
                        <p className="doctordetails m-b-10" style={{marginBottom:'10px'}}>Dentist</p>
                        <div className= 'doctorcontaint m-b-0 col-sm-12 d-flex' >
                          <div className='col-sm'>
                            <div className=' m-b-0 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>27</div>
                          </div>
                          <div className='col-sm-4'>
                            <div className=' m-b-0   '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>25</div>
                          </div>
                          <div className='col-sm-4'>
                            <div className='m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>

                      </div>
      
                      <button className=' profilebutton m-b-0 btn btn-sm' style={{ borderRadius: '10px', color: 'white' , paddingBottom:'10px'}} onClick={() => setdoctorFilter(true)}
                      >
                        View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://thumbs.dreamstime.com/b/confident-female-doctor-office-desk-sitting-smiling-camera-health-care-prevention-concept-56351853.jpg"
                          className="img-thumbnail rounded-circle"
                          alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Dr. Aman</h4>
                        <p className=" m-b-5 ">ENT Specialist</p>
                        <div className=' doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1600</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>23</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2346</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className=" m-b-5 btn btn-sm black" style={{ borderRadius: '10px', color: 'white' }} onClick={() => setdoctorFilter(true)}>View Profile</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className="  doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyVQ94FUrqREP9RxkL0d-Vh9wJvCpdlf-kg&usqp=CAU" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0 ">Kendra </h4>
                        <p className=" m-b-5 ">ENT Specialist</p>
                        <div className=' doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1500</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>24</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>
                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://images1-fabric.practo.com/doctor/561512/dr-anupama-bhat-601a7ce1b330b.jpg" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Dr Aman </h4>
                        <p className=" m-b-5 ">Dentist</p>
                        <div className=' doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1400</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>29</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>Viev Profile<Link to="Doctor profile"></Link></a>

                    </div>
                  </div>
                </div>
              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">

                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://media.istockphoto.com/photos/indian-doctor-picture-id515908499?b=1&k=20&m=515908499&s=170667a&w=0&h=jNo41V9wON5zUAslXB-1drGE5IJrfx1oHo2klQlmo4M=" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Dr. virendra</h4>
                        <p className=" m-b-5 ">Neurologist</p>
                        <div className=' doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1300</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>28</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>

                    </div>
                  </div>
                </div>

              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://images.picxy.com/cache/2019/9/6/7f9cebc40c28df1428b0f8f00ccabb06.jpg" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Kendra</h4>
                        <p className=" m-b-5 ">Neurologist</p>
                        <div className=  ' doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1000</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>27</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className="  doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://images6.alphacoders.com/885/885213.jpg" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Dr. pawan</h4>
                        <p className=" m-b-5 ">Neurologist</p>
                        <div className='  doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1100</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>24</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className="  doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Aman Pandey</h4>
                        <p className=" m-b-5 ">Neurologist</p>
                        <div className='  doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>25</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>27</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://images.picxy.com/cache/2019/9/6/7f9cebc40c28df1428b0f8f00ccabb06.jpg" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="m-b-0">Punam Pandey</h4>
                        <p className=" m-b-5 ">ENT Specialist</p>
                        <div className='  doctorcontaint m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>25</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>20</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>
                      </div>

                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className=" doctorcard col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card2">
                  <div className="body">
                    <div className="member-card verified">
                      <div className="thumb-xl member-thumb" style={{marginTop:'10px'}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgG-9dNVk0Mqxk1xx0wCspDSg1MaM_IojfA&usqp=CAU" className="img-thumbnail rounded-circle" alt="profile-image" />
                      </div>
                      <div className="contentimg" style={{ color: 'white' }}>
                        <h4 className="doctorcontaint m-b-0">Dr. Arun pandey</h4>
                        <p className=" m-b-5 ">Dentist</p>
                        <div className='m-b-5 col-sm-12 d-flex'>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Patient</div>
                            <div className='' style={{ fontSize: '14px' }}>1200</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Age</div>
                            <div className='col-lg-4' style={{ fontSize: '14px' }}>30</div>
                          </div>
                          <div className='col-lg-4'>
                            <div className=' m-b-5 '>Points</div>
                            <div className='' style={{ fontSize: '14px' }}>2341</div>
                          </div>
                        </div>

                      </div>
                      <a href="javascript:void(0);" className="btn btn-raised btn-sm" style={{ borderRadius: '10px', color: 'white' }}>View Profile</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="row clearfix">
              <div className="col-sm-12 text-center">
                <Link to="Add Doctor">
                  <button className="btn btn-raised g-bg-cyan " style={{ borderRadius: '10px', color: '#056078' }}>Add Doctor</button>
                </Link>
                {/*<a 
      to='/'
      onClick={() => {
        window.location.href = '/Add_Doctor';
      }}
    className="btn btn-raised g-bg-cyan">Add Doctor</a>*/}
                {/*<a href="javascript:void(0);" className="btn btn-raised g-bg-cyan">Add Doctor</a>*/}
              </div>
            </div>
          </div>
        </section>

      </div>
      <Modal
        id="doctors-modal"
        isOpen={doctorFilter}
        closeTimeoutMS={100}
        shouldCloseOnEsc={true}
        onRequestClose={() => setdoctorFilter(false)}
        style={{
          overlay: {
            zIndex: '1000',
          },
          content: {
            maxWidth: '500px',
            // height: '50px',
            height: '80%',
            margin: 'auto',
            // justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <Doctorprofile doctorFilterBtn={doctorFilterBtn} />
      </Modal>
    </>
  )
}
export default All_Doctor;


/*import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Accordion" href="components/accordion" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Click the accordions below to expand/collapse the accordion content.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion*/
