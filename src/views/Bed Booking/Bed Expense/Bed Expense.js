import React, { useRef, useState } from "react";
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
//upload image
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'
//crop image

import 'react-image-crop/dist/ReactCrop.css';
const Bed_expense = () => {
    const [imageSrc, setImageSrc] = useState()
    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    const dispatch = useDispatch()
    /*const priceRef = useRef()
    const [priceValue, setPriceValue] = useState(100)

    const price1Ref = useRef()
    const [price1Value, setPrice1Value] = useState(100)

    const price2Ref = useRef()
    const [price2Value, setPrice2Value] = useState(100)*/
    //charges
    const Fbexpress = useRef();
    const Rpo = useRef();
    const Visitcharges = useRef();

    //facility
    const Linen = useRef();
    const Television = useRef();
    const AttendantCouch = useRef();
    const FullyEquiped = useRef();
    const [check, setCheck] = useState([])

    //Charges
    const HandleChangeFbexpress = () => {
        let clickedThreeValue = Fbexpress?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeVisitcharges = () => {
        let clickedThreeValue = Visitcharges?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeRpo = () => {
        let clickedThreeValue = Rpo?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }

    //facility
    const HandleChangeTelevision = () => {
        let clickedThreeValue = Television?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeLinen = () => {
        let clickedThreeValue = Linen?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeAttendantCouch = () => {
        let clickedThreeValue = AttendantCouch?.current?.defaultValue;
        filteredArray(clickedThreeValue);
    }
    const HandleChangeFullyEquiped = () => {
        let clickedThreeValue = FullyEquiped?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }

    const filteredArray = (clicked) => {
        setCheck((prevState) => {
            let isIndexFound = prevState.indexOf(clicked);
            console.log(isIndexFound, 'isIndexFound');
            if (isIndexFound === -1) {
                prevState.push(clicked);
                return prevState;
            }
            else {
                prevState.splice(isIndexFound, 1);
                return prevState;
            }
        });

    }
    const onClear = (e) => {
        e.preventDefault();
        setCheck([]);
        Linen.current.clearValue();
        Television.current.checked = false;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch((check))

    }
    const option = [
        { value: 'General Ward', label: 'General Ward' },
        { value: 'Private Wards', label: 'Private Wards' },
        { value: 'Semi_Private Wards', label: 'Semi_Private Wards' },
        { value: 'CCU', label: 'CCU' },
        { value: 'ICCU', label: 'ICCU' },
        { value: 'Deluxe Room', label: 'Deluxe Room' },
        { value: 'SICU', label: 'SICU' },


    ]
    const option1 = [
        { value: 'Manual Beds', label: 'Manual Beds' },
        { value: 'Low Beds', label: 'Low Beds' }
    ]
    /* const setPrice = () => {
         setPriceValue(priceRef.current.value);
 
     }
     const setPrice1 = () => {
         setPrice1Value(price1Ref.current.value);
 
     }
 
     const setPrice2 = () => {
         setPrice2Value(price2Ref.current.value);
 
     }
     const [total, setTotalAmmount] = useState('0')
 
     const Total1 = () => {
         if (setPrice1) {
             return Number.parseInt(price1Ref.current.value);
         }
     }
     const Total2 = () => {
         if (setPrice) {
             return Number.parseInt(priceRef.current.value);
         }
     }
     const Total3 = () => {
         if (setPrice2) {
             return Number.parseInt(price2Ref.current.value);
         }
     }*/

    /*const getTotal = () => {
        const result = Total1() + Total2() + Total3();
    
        return result;
    }*/
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    return (
        <>
            <section className="content ">
                <div className="container-fluid">
                    <h6 style={{ marginLeft: '15px' }}>Bed Expense</h6>
                    <div className="row clearfix">
                        <div className="Expansecontainer">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="cointainer px-xxl-0 px-lg-5 px-md-4 px-sm-3 d-flex mt-4">
                                        <div className="Bed col-sm-4 col-md-3">
                                            Bed Availability
                                        </div>
                                        <div className="Availablebed col-sm-4 text align-right">
                                            <button className="number " type='button' style={{ background: "green", color: 'white', borderRadius: '5px', marginRight: '25px' }}>133</button>
                                            <div>Available Beds</div>
                                        </div>
                                        <div className="BedUpdate col-sm-4 text align-right">
                                            <button className=" date" style={{ background: "#056078", color: 'white', borderRadius: '5px' }}>{date}</button>
                                            <div>Last Update</div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row clearfix">
                                                <div className="col-sm-6">
                                                    <lable style={{ color: '#056078' }}>Room/ward Type</lable>
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <Select options={option} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <lable style={{ color: '#056078' }}>Bed Type</lable>
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <Select options={option1} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Selectcharges">
                                                    <h6 style={{ color: '#056078' }}>Select Charges</h6>
                                                    <div className="">
                                                        <ul>
                                                            <div className="row d-flex"
                                                                style={{
                                                                    justifyContent: 'space-around',
                                                                    flexDirection: '',
                                                                    listStyle: 'none',
                                                                }}
                                                            >
                                                                <div className=" col-sm-4">
                                                                    <div className="">
                                                                        <li>
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={HandleChangeFbexpress}
                                                                                value="Fbexpress"
                                                                                id="expressfacility"
                                                                                ref={Fbexpress}
                                                                            />
                                                                            <label className=" m-3" style={{ fontSize: "small" }} htmlFor="expressfacility">
                                                                                F&B Express ₹2000
                                                                            </label>
                                                                        </li>
                                                                    </div>

                                                                    <h5 style={{
                                                                        marginButtom: '4rem'
                                                                    }}></h5>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="" >
                                                                        <li>
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={HandleChangeRpo}
                                                                                value="Rpo"
                                                                                id="Rpofacility"
                                                                                ref={Rpo}
                                                                            />
                                                                            <label className="m-2" style={{ fontSize: "small", color: "#056078" }} htmlFor="Rpofacility">
                                                                                RPO ₹3000
                                                                            </label>
                                                                        </li>
                                                                    </div>
                                                                    <h5 style={{
                                                                        marginButtom: '4rem'
                                                                    }}></h5>

                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="">
                                                                        <li>
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={HandleChangeVisitcharges}
                                                                                value="Visitcharges"
                                                                                // checked={check.includes('3 months')}
                                                                                id="Visitchargesfacility"
                                                                                ref={Visitcharges}
                                                                            />
                                                                            <label className="m-3" style={{ fontSize: "small" }} htmlFor="Visitchargesfacility">
                                                                                Visit Charges ₹4000
                                                                            </label>
                                                                        </li>
                                                                    </div>
                                                                    <h5 style={{
                                                                        marginButtom: '4rem'
                                                                    }}></h5>

                                                                </div>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="imagecontainer">
                                                    <h6>Upload Image</h6>
                                                    <div className="image3" style={{ marginBottom: '15px', marginRight: '20px' }}><ImageUpload

                                                        handleImageSelect={handleImageSelect}
                                                        imageSrc={imageSrc}
                                                        setImageSrc={setImageSrc}
                                                        style={{
                                                            marginLeft: '0px',
                                                            width: 70,
                                                            height: 80,
                                                            background: '#056078',
                                                            borderRadius: '5px',
                                                            marginButtom: '20px'
                                                        }}
                                                    />
                                                    </div>

                                                </div>

                                                <div className="savebutton text align-center" style={{ color: 'white', marginTop: '20px', marginLeft: '20px' }}>
                                                    <button type="button" style={{ background: '#056078', color: 'white', borderRadius: '5' }}>Save</button>
                                                </div>
                                            </div>
                                            <div class="row clearfix" style={{paddingTop:'20px'}}>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">S.No</th>
                                                            <th scope="col">Patient Name</th>
                                                            <th scope="col">Bed charges per day</th>
                                                            <th scope="col">miscellaneous</th>
                                                            <th scope="col">Total charges</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Dipanshu</td>
                                                            <td>400</td>
                                                            <td>300</td>
                                                            <td>700 </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Dewesh</td>
                                                            <td>4000</td>
                                                            <td>300</td>
                                                            <td>4300 </td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Raju</td>
                                                            <td>2000</td>
                                                            <td>500</td>
                                                            <td>2500 </td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Ashish</td>
                                                            <td>1000</td>
                                                            <td>500</td>
                                                            <td>1500 </td>
                                                        </tr>


                                                    </tbody>
                                                </table>


                                            </div>


                                            <div className="Approvalsave row">
                                                <div className=" Approvalsave1 col-md-12   d-flex text align-center">

                                                    <div className="col-6">
                                                        <button type="submit" onClick={onClear} className=" Approval1   g-bg-cyan" style={{ borderRadius: '5px' }}>Send For Approval</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="submit" onClick={onClear} className=" Approval1 g-bg-cyan" style={{ borderRadius: '5px' }}>Reset</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}
export default Bed_expense;

