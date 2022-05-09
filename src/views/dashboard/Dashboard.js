import React, { useState } from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import Modal from 'react-modal'
import Bedbookings from './Bedbookings'
import Patients from './Patients'
import Doctors from './Doctors'
//import MedicationIcon from '@mui/icons-material/Medication';
//import BedIcon from '@mui/icons-material/Bed';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faUserDoctor, faHospitalUser, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/


const Dashboard = () => {
    const [Bedbooking, setBedbooking] = useState(false)
    const BedbookingBtn = (bool) => {
        setBedbooking(bool)
    }
    const [Patient, setPatient] = useState(false)
    const PatientBtn = (bool) => {
        setPatient(bool)
    }
    const [Doctor, setDoctor] = useState(false)
    const DoctorBtn = (bool) => {
        setDoctor(bool)
    }
    return (
        <>
            <div>
                <section className="content home">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-3 col-sm-6" onClick={() => setPatient(true)}>
                                <div className="info-box-4 hover-zoom-effect">
                                    <div className="col-lg-12 d-flex content" style={{ color: 'white' }}>
                                        <div className="col-lg-6" style={{ paddingTop: '0px' }} >
                                            <div className="text" style={{ color: 'white', fontSize: '25px', paddingTop: '8px' }}>Total </div>
                                            <div className="text" style={{ color: 'white', fontSize: '25px' }}> Patient</div>
                                            <div className="row d-flex text align-center" style={{ color: 'white', fontSize: '10px' }}>
                                                <div className="d-flex" style={{ fontSize: '10px' }}>decrease by</div>
                                                <h1 className='mb-2 d-flex' style={{ fontSize: '10px', color: 'white' }}>
                                                    <CountUp start={10} end={100} duration={5}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    %
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '5px' }}>
                                            <div className=' text align-right' style={{ color: 'white', fontSize: '25px' }}><FontAwesomeIcon icon={faHospitalUser} style={{}} /></div>
                                            <div className="number text align-right d-flex " style={{ justifyContent: 'center' }}>
                                                <h1 className='mb-2' style={{ fontSize: '20px', color: 'white', marginLeft: '25px' }}>
                                                    <CountUp start={10} end={100} duration={5}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6" onClick={() => setDoctor(true)}>
                                <div className="info-box-5 hover-zoom-effect">
                                    <div className="col-lg-12  d-flex content" style={{ color: 'white' }}>
                                        <div className="col-lg-6" style={{ paddingTop: '10px', fontSize: '25px' }}>
                                            <div className="text" styel={{ color: 'white', fontSize: '25px' }}>Total </div>
                                            <div className="text" style={{ fontSize: '25px' }}>Doctors</div>
                                            <div className=" text d-flex text align-center" style={{ color: 'white', fontSize: '10px' }}>
                                                <div style={{ fontSize: '10px' }}>increase by</div>
                                                <h1 className='mb-1' style={{ fontSize: '10px', color: 'white' }}>
                                                    <CountUp start={0} end={50} duration={5}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    %
                                                </h1>

                                            </div>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '10px', fontSize: '23px' }}>
                                            <div className="text align-right" style={{ color: 'white' }} ><FontAwesomeIcon color='bluelight' icon={faUserDoctor} style={{ margin: "10px" }} /></div>
                                            <div className="numbertext align-right ">
                                                <h1 className='mb-0' style={{ fontSize: '20px', color: 'white', marginRight: '10px' }}>
                                                    <CountUp start={4} end={70} duration={3}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6" onClick={() => setBedbooking(true)}>
                                <div className=" d-flex info-box-6 hover-zoom-effect">
                                    <div className="col-lg-12 d-flex  text align-left content">
                                        <div className="col-lg-6" style={{ paddingTop: '0px', fontSize: '25px' }}>
                                            <div className="text" style={{ color: 'white' }}>Total </div>
                                            <div className="text" style={{ color: 'white', fontSize: '23px' }}>Hospital Beds</div>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '15px', fontSize: '23px' }}>
                                            <div className="text align-right" style={{ color: 'white' }} ><FontAwesomeIcon color='bluelight' size='40' icon={faBed} style={{ margin: "10px" }} /></div>
                                            <div className="number text align-right" >
                                                <h1 className='mb-0' style={{ fontSize: '20px', color: 'white', marginRight: '15px' }}>
                                                    <CountUp start={5} end={60} duration={3}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="info-box-7 hover-zoom-effect">
                                    <div className=" col-lg-12 d-flex content" style={{ color: 'white' }}>
                                        <div className="col-lg-6" style={{ paddingTop: '5px', fontSize: '25px' }}>
                                            <div className="m-t-6 " style={{}}> Total </div>
                                            <div className="text d-flex" style={{ fontSize: '23px' }}>Hospital Earning
                                                <h1 className='mb-1' style={{ fontSize: '10px', color: 'white' }}>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '15px', fontSize: '25px' }}>
                                            <div className="text align-right" style={{ color: 'white' }} ><FontAwesomeIcon color='bluelight' size='40' icon={faMoneyCheck} style={{ margin: "10px" }} /></div>
                                            <div className=" text align-right number" style={{ fontSize: '20px', marginLeft: '10px' }}>₹
                                                <CountUp start={1000} end={10000} duration={3}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="header">
                                            <h2> New Patient List  </h2>
                                        </div>
                                        <div className="body">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Username</th>
                                                            <th>Diseases</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>depanshu </td>
                                                            <td>kumar</td>
                                                            <td>@Depanshu</td>
                                                            <td>
                                                                <span className="label label-info">fever</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Aman </td>
                                                            <td>kumar</td>
                                                            <td>@Aman </td>
                                                            <td><span className="label label-info">Cancer</span> </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>deepa </td>
                                                            <td>kumar</td>
                                                            <td>@deepa</td>
                                                            <td><span className="label label-warning">Lakva</span> </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Rohan </td>
                                                            <td>kumar</td>
                                                            <td>@Rohan </td>
                                                            <td><span className="label label-success">Dental</span> </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Margaret </td>
                                                            <td>Griffin</td>
                                                            <td>@Margaret </td>
                                                            <td><span className="label label-info">Cancer</span> </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>pawan </td>
                                                            <td>panday</td>
                                                            <td>@Margaret </td>
                                                            <td><span className="label label-info">Cancer</span> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="card">
                                        <div className="header">
                                            <h2>PATIENT prograss</h2>
                                        </div>
                                        <div className="body">
                                            <ul className="basic-list">
                                                <li>Depanshu <span className="label-danger label">21%</span></li>
                                                <li>rajiv <span className="label-success label">50%</span></li>
                                                <li>Aman<span className="label-success label">90%</span></li>
                                                <li>Mr. Aman Dubey <span className="label-info label">75%</span></li>
                                                <li>shiva <span className="label-warning label">60%</span></li>
                                                <li>Anand <span className="label-success label">91%</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="card">
                                        <div className="header">
                                            <h2>PATIENT Reports</h2>
                                        </div>
                                        <div className="body">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>First Name</th>
                                                            <th>Charts</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Deepanshu</td>
                                                            <td>
                                                                <span className="sparkbar">5,8,6,3,5,9,2</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Aman Dubey</td>
                                                            <td>
                                                                <span className="sparkbar">10,8,9,3,5,8,5</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Arun</td>
                                                            <td>
                                                                <span className="sparkbar">7,5,9,3,5,2,5</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Anand</td>
                                                            <td>
                                                                <span className="sparkbar">1,8,2,3,9,8,5</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Depanshu</td>
                                                            <td>
                                                                <span className="sparkbar">1,8,2,3,9,8,5</span>
                                                            </td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="header">
                                            <h2>Visits from countries</h2>

                                        </div>
                                        <div className="body">
                                            <ul className="country-state">
                                                <li className="m-b-20">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="mb-0">6350</h5>
                                                        <small>From India 58%</small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '58%' }}> <span className="sr-only">58% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li className="m-b-20">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="mb-0">3250</h5>
                                                        <small>From UAE 90%</small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}> <span className="sr-only">90% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li className="m-b-20">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="mb-0">1250</h5>
                                                        <small>From Australia 70%</small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}> <span className="sr-only">70% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li className="m-b-20">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="mb-0">1350</h5>
                                                        <small>From USA 70%</small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}> <span className="sr-only">70% Complete</span></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="mb-0">1250</h5>
                                                        <small>From UK 65%</small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}> <span className="sr-only">65% Complete</span></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>   </div>


                </section>

            </div>
            <Modal
                id="Bedbooking-modal"
                isOpen={Bedbooking}
                closeTimeoutMS={100}
                shouldCloseOnEsc={true}
                onRequestClose={() => setBedbooking(false)}
                style={{
                    overlay: {
                        zIndex: '1000',
                    },
                    content: {
                        maxWidth: '600px',
                        height: '37%',
                        margin: 'auto',
                        alignItems: 'center',
                        borderRadius: '15px',
                    },
                }}
            >
                <Bedbookings BedbookingBtn={BedbookingBtn} />
            </Modal>
            <Modal
                id="Patient-modal"
                isOpen={Patient}
                closeTimeoutMS={100}
                shouldCloseOnEsc={true}
                onRequestClose={() => setPatient(false)}
                style={{
                    overlay: {
                        zIndex: '1000',
                    },
                    content: {
                        maxWidth: '600px',
                        height: '37%',
                        margin: 'auto',
                        alignItems: 'center',
                        borderRadius: '15px',
                    },
                }}
            >
                <Patients PatientBtn={PatientBtn} />
            </Modal>
            <Modal
                id="Doctor-modal"
                isOpen={Doctor}
                closeTimeoutMS={100}
                shouldCloseOnEsc={true}
                onRequestClose={() => setDoctor(false)}
                style={{
                    overlay: {
                        zIndex: '1000',
                    },
                    content: {
                        maxWidth: '600px',
                        height: '37%',
                        margin: 'auto',
                        alignItems: 'center',
                        borderRadius: '15px',
                    },
                }}
            >
                <Doctors DoctorBtn={DoctorBtn} />
            </Modal>



        </>
    );
};
export default Dashboard;