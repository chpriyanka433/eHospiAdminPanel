import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const Bedbookings = (props) => {
    const showModalHandler10 = () => {
        props.BedbookingBtn(false);
    }


    return (
        <>
            <div className="Bedcontainer">
                <button onClick={showModalHandler10} style={{ position: 'absolute', right: '5px', top: '0px', border: 'none', color: '#056078' }}>&#10006; </button>
                <div className="div1 text align-center" style={{ fontSize: '20px', color: '#056078' }}>Total Hospita Beds Updates</div>
                <div className="div1container d-flex text align-center mt-5">
                    <div className="col-sm-6">
                        <button type='button' style={{ background: 'black', color: 'white', borderRadius:'5px'}}>
                            <CountUp start={10} end={60} duration={4}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </button>
                        <h6 style={{color:'#056078'}}>Available bed</h6>
                    </div>
                    <div className="col-sm-6">
                        <button type='button' style={{ background: 'black', color: 'white',borderRadius:'5px' }}>
                            <CountUp start={0} end={50} duration={4}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </button>
                        <h6 style={{color:'#056078'}}>Last Updates</h6>
                    </div>

                </div>
            </div>
        </>

    )

}
export default Bedbookings;