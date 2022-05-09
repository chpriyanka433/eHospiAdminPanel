import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserDoctor,
  faHospital,
  faUserFriends,
  faBookMedical,
  faMoneyCheck,
  faAdd,
  faBed,
  faUser,
  faList,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
//import CIcon from '@coreui/icons-react'
// import {LocalHospitalIcon} from '@mui/icons-material/LocalHospital';
/*import {
  cilHome,
  cibPaypal,
  cilHospital,
  cilStar,
} from '@coreui/icons'*/
//import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: (
      <FontAwesomeIcon
        color="bluelight"
        icon={faHome}
        style={{ margin: '10px' }}
      />
    ),

    //icon:  'fa-solid fa-house',
    //icon: <LocalHospitalIcon />,

    /* badge: {
      color: 'info',
      text: 'NEW',
    },*/
  },

  // {
  //   component: CNavGroup,
  //   name: 'Doctor',
  //   to: '/Doctor',
  //   icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}} />,

  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'All Doctor',
  //       to: '/Doctor/All Doctor',
  //       icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}}/>,
  //     },

  //     {
  //       component: CNavItem,
  //       name: 'Add Doctor',
  //       to: '/Doctor/Add Doctor',
  //       icon: <FontAwesomeIcon icon={faAdd} style={{margin: "10px"}}/>,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "",
  //       to: '/Doctor Profile',

  //     },

  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Hospitals',
    to: '/Hospital',
    icon: <FontAwesomeIcon icon={faUserDoctor} style={{ margin: '10px' }} />,

    items: [
      /*{
        component: CNavItem,
        name: 'HospitalAdd',
        to: '/Hospital/HospitalAdd',
        icon: <FontAwesomeIcon icon={faUser} style={{margin: "10px"}}/>,
      },*/
      {
        component: CNavItem,
        name: 'Hospitals List',
        to: '/Hospital/Hospitals List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Signup List',
        to: '/Hospital/SignUp List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Pending List',
        to: '/Hospital/Pending Hospital',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Accepted List',
        to: '/Hospital/Accepted Hospital',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Rejected List',
        to: '/Hospital/Rejected Hospital',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Insurances',
    to: '/Insurance',
    icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,

    items: [
      {
        component: CNavItem,
        name: 'Insurances List',
        to: '/Insurance/Insurance List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Users',
    to: '/Users List',
    icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,

    items: [
      {
        component: CNavItem,
        name: 'Users List',
        to: '/Users List/Users List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: ' Hospital Bookings',
  //   to: '/Bookings',
  //   icon: <FontAwesomeIcon icon={faUser} style={{margin: "10px"}} />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Bookings_List',
  //       to: '/Bookings/Bookings',
  //       icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}}/>,
  //     }
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Departments',
    to: '/Department',
    icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Departments List',
        to: '/Department/DepartmentList',
        icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Add Department',
      //   to: '/Department/Add Department',
      //   icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      // },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Appointment',
  //   to: '/Appointment',

  //   icon: <FontAwesomeIcon icon={faUserDoctor}style={{margin: "10px"}} />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Doctor schedule',
  //       to: '/Appointment/Doctor schedule',
  //       icon: <FontAwesomeIcon icon={faUserDoctor}style={{margin: "10px"}}/>,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Add schedule',
  //       to: '/Appointment/Add schedule',
  //       icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
  //     },

  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Patient',
  //   to: '/Patient',
  //   icon: <FontAwesomeIcon icon={faUserFriends}style={{margin: "10px"}} />,
  //   // icon: <LocalHospitalIcon />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Add patient',
  //       to: '/Patient/Add patient',
  //       icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All patient',
  //       to: '/Patient/All patient',
  //       icon: <FontAwesomeIcon icon={faUserFriends}style={{margin: "10px"}} />,

  //     },

  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Bed Menu',
    to: '/Bed Booking',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{ margin: '10px' }} />,
    // icon: <LocalHospitalIcon />,
    items: [
      /*{
        component: CNavItem,
        name: 'All bed',
        to: '/Bed Booking/All bed',
        icon: <FontAwesomeIcon icon={faBookMedical} style={{margin: "10px"}}/>,
      },*/

      /*{
        component: CNavItem,
        name: 'Bed Expense',
        to: '/Bed Booking/Bed Expense',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}}/>,
      },*/
      {
        component: CNavItem,
        name: 'Facilities',
        to: '/Bed Booking/Add Bed facility',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Amenities',
        to: '/Bed Booking/Add Amenities',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Services',
        to: '/Bed Booking/Add Services',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Bed Bookings',
    to: '/Bed Bookings',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        //running Booking
        name: 'Pending List',
        to: '/Bed Bookings/Pending Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        //Accept Booking
        name: 'Accepted List',
        to: '/Bed Bookings/Accepted Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        //Rejected Booking
        name: 'Rejected List',
        to: '/Bed Bookings/Rejected Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        //All Booking
        name: 'All List',
        to: '/Bed Bookings/All Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      /* {
        component: CNavItem,
        name: 'Bed Billing',
        to: '/Bed Bookings/Bed Billing',
        icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}}/>,
      }, */
    ],
  },
  /*{
    component: CNavGroup,
    name: 'Payments',
    to: '/Payments',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Payment',
        to: '/Payments/Payment',
        icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: 'Add payment',
        to: '/Payments/Add payment',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      },
    ],
  },*/
  {
    component: CNavGroup,
    name: 'Sub-admins',
    to: '/Manage SubAdmin',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Sub-admin',
        to: '/Manage SubAdmin/Add User',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Sub-admins List',
        to: '/Manage SubAdmin/SubAdmin List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Hospital Admin',
    to: '/Hospital_Sub_Admin',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Hospital Admin',
        to: '/HospitalSubAdmin/AddHospital SubAdmin',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Hospital Admins List',
        to: '/HospitalSubAdmin/Hospital SubAdmin List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: ' Manage_Hospital_SubAdmin',
  //   to: '/Manage HospitalSubAdmin',
  //   icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Manage_HospitalAdmin',
  //       to: '/Manage HospitalSubAdmin/Manage HospitalAdmin',
  //       icon: <FontAwesomeIcon icon={faUser}style={{margin: "10px"}} />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Hospital_SubAdmin_List',
  //       to: '/Manage HospitalSubAdmin/Hospital SubAdmin List',
  //       icon: <FontAwesomeIcon icon={faList}style={{margin: "10px"}} />,
  //     },
  //   ],
  // },
];

export default _nav;
