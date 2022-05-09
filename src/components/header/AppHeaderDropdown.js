import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {
  //CAvatar,
  //CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import {
  cilUser, cilSettings
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBell, faUser, faLockOpen } from '@fortawesome/free-solid-svg-icons';


const AppHeaderDropdown = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilUser} className="me-2" style={{ fontWeight: '10' }} />
        Admin Login
        {/* <CAvatar src={avatar8} size="md" />*/}

      </CDropdownToggle>
      <CDropdownMenu className="pt-0" style={{ borderRadius: '4px' }} placement="bottom-end">
        <CDropdownItem className="" style={{ background: '#056078', color: 'white', paddingTop: '20px' }} >
          <div className='Account' style={{ paddingButtom: "20px", fontSize: '15px' }}>Account</div>

        </CDropdownItem>
        <CDropdownItem className="d-flex" style={{ paddingTop: '20px', fontWeight: '10px', textAlign: 'inline' }}>
          <div className='' style={{ fontSize: '16px', paddingRight: '5px' }}>
            <FontAwesomeIcon icon={faBell} style={{ paddingTop: '0px', color: '#056078' }} />

          </div>
          <div className='' style={{ paddingTop: '10px', paddingRight: '5px' }}>Updates</div>
          <div className='' style={{ paddingTop: '0px', color: 'white' }}>
            <h1 className='mb-0' style={{ fontSize: '15px', background: '#056078', borderRadius: '50%', color: 'white' }}>
              <CountUp start={10} end={20} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>

          </div>
        </CDropdownItem>
        <CDropdownItem className="" style={{ paddingTop: '20px' }} >
          <div className='d-flex'>
            <div className='' style={{ marginRight: '5px', paddingTop: '3px' }}>
              <FontAwesomeIcon icon={faMessage} style={{ paddingTop: '0px', color: '#056078' }} />
            </div>
            <div className='text align-center' style={{ paddingTop: '10px', paddingRight: '5px' }}>Messages</div>
            <div className='' style={{ color: 'white', marginRight: '5px' }}>
              <h1 className='mb-0' style={{ fontSize: '15px', background: '#056078', borderRadius: '50%', marginRight: '5px', marginBottom:'10px'}}>
                
                <CountUp style={{fontSize:'5px'}} start={10} end={50} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                
              </h1>

            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem className="" style={{ background: '#056078', color: 'white', paddingTop: '20px' }} >
          <div className='d-flex '>
            <div className='text align-center'><CIcon icon={cilSettings} className="me-2 text align-center" style={{ fontSize: '30px', color: 'white' }} /></div>
            <div className='Account' style={{ paddingTop: '9px' }}>Setting</div>
          </div>
        </CDropdownItem>
        <CDropdownItem className="" style={{ paddingTop: '20px' }} >
          <div className='d-flex' style={{maxHeight: '15px',  alignItems:'center', paddingBottom:'15px'}}>

            <div className='text align-center' style={{}}>
              <FontAwesomeIcon icon={faUser} style={{ color: '#056078', marginRight: '10px' }} />
            </div>

            <div className='Profile' style={{ }}>Profile</div>

          </div>
        </CDropdownItem>
        <CDropdownItem href="#" style={{ paddingTop: '10px'}}>
          <div className='d-flex' style={{alignSelf:'center', marginRight:'20px', justifyContent:'space-between'}}>
            <CIcon className=""
              to='/'
              onClick={() => {
                window.location.href = '/Login';
              }}
            />
            <div className=''> <FontAwesomeIcon icon={faLockOpen} style={{ color: '#056078' }} /></div>
            <div className='' style={{ color: '#056078', paddingTop: '10px', marginRight:'20px' }}>Log out</div>
          </div>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
