import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Doctor
const All_Doctor = React.lazy(() => import('./views/Doctor/All Doctor/All Doctor'))
const Add_Doctor = React.lazy(() => import('./views/Doctor/Add Doctor/Add Doctor'))

//Department
const Department_list = React.lazy(() => import('./views/Department/DepartmentList/DepartmentList'))


//Appointment
const Doctor_schedule = React.lazy(() => import('./views/Appointment/Doctor schedule/Doctor schedule'))
const Add_schedule = React.lazy(() => import('./views/Appointment/Add schedule/Add schedule'))

//patient
const Add_patient = React.lazy(() => import('./views/Patient/Add patient/Add patient'))
const All_patient = React.lazy(() => import('./views/Patient/All patient/All patient'))

//Bed Menu
const Add_bed = React.lazy(() => import('./views/Bed Booking/Add bed/Add bed'))
const Bed_expense = React.lazy(() => import('./views/Bed Booking/Bed Expense/Bed Expense'))
const All_bed = React.lazy(() => import('./views/Bed Booking/All bed/All bed'))
const Add_facility = React.lazy(() => import('./views/Bed Booking/Add Bed facility/Add faciility'))
const Add_Amenities = React.lazy(() => import('./views/Bed Booking/Add Amenities/Add Amenities'))
const Add_Services = React.lazy(() => import('./views/Bed Booking/Add Services/Add Services'))

//Running Booking
const Pending_booking = React.lazy(() => import('./views/Bed Bookings/Pending Booking/Pending Booking'))
// const Bed_billing = React.lazy(() => import('./views/Bed Bookings/Bed Billing/Bed Billing'))
// const Closed_booking = React.lazy(() => import('./views/Bed Bookings/Closed Booking/Closed booking'))

//Accepted Booking

const Accepted_booking = React.lazy(() => import('./views/Bed Bookings/Accepted Booking/Accepted Booking'))

//Rejected Booking

const Rejected_booking = React.lazy(() => import('./views/Bed Bookings/Rejected Booking/Rejected Booking'))

//All Booking

const All_booking = React.lazy(() => import('./views/Bed Bookings/All Booking/All Booking'))
//Payment
const Payment = React.lazy(() => import('./views/Payments/Payment/Payment'))
const Add_payment = React.lazy(() => import('./views/Payments/Add payment/Add payment'))

//Manage User
const Add_user = React.lazy(() => import('./views/Manage SubAdmin/Add User/Add User'))
const SubAdmin_list = React.lazy(() => import('./views/Manage SubAdmin/SubAdmin List/SubAdmin List'))

//Hospital SubAdmin
const HospitalSubAmin = React.lazy(() => import('./views/HospitalSubAdmin/AddHospital SubAdmin/AddHospital SubAdmin'))
const HospitalSubAminList = React.lazy(() => import('./views/HospitalSubAdmin/Hospital SubAdmin List/Hospital SubAdmin List'))

//Manage Hospital SubAdmin
const ManageHospitalAdmin = React.lazy(() => import('./views/Manage HospitalSubAdmin/Manage HospitalAdmin/Manage HospitalAdmin'))
const HospitalSubAmin_List = React.lazy(() => import('./views/Manage HospitalSubAdmin/Manage HospitalSubAdmin/Hospital SubAdmin List'))

//User
const User_list = React.lazy(() => import('./views/Users/Users List/Users List'))
const Bookings = React.lazy(() => import('./views/Bookings/Bookings/Bookings'))

//Hospital
const Hospital_add = React.lazy(() => import('./views/Hospital/Hospital Add/Hospital Add'))
const Hospital_List = React.lazy(() => import('./views/Hospital/Hospitals List/Hospitals List'))
const SignUplist_List = React.lazy(() => import('./views/Hospital/SignUp List/SignUp List'))
const AccepetdHospital_List = React.lazy(() => import('./views/Hospital/Accepeted Hospital/Accepeted Hospital'))
const RejectedHospital_List = React.lazy(() => import('./views/Hospital/Rejected Hospital/Rejected Hospital'))
const Pending_List = React.lazy(() => import('./views/Hospital/Pending Hospital/Pending Hospital'))

//Insurance
const Insurance_list = React.lazy(() => import('./views/Insurance/Insurance List/Insurance List'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  { path: '/Doctor', name: 'Doctor', component: All_Doctor, exact: true },
  { path: '/Doctor/All Doctor', name: 'All Doctor', component: All_Doctor },
  { path: '/Doctor/Add Doctor', name: 'Add Doctor', component: Add_Doctor },

  { path: '/Hospital', name: 'Hospital', component: Hospital_add, exact: true },
  { path: '/Hospital/Hospital Add', name: 'Hospital Add', component: Hospital_add },
  { path: '/Hospital/Hospitals List', name: 'Hospitals List', component: Hospital_List },
  { path: '/Hospital/SignUp List', name: 'SignUp List', component:  SignUplist_List},
  { path: '/Hospital/Accepted Hospital', name: 'Accepted Hospital', component:  AccepetdHospital_List},
  { path: '/Hospital/Rejected Hospital', name: 'Rejected Hospital', component:  RejectedHospital_List},
  { path: '/Hospital/Pending Hospital', name: 'Pending Hospital', component:  Pending_List},


  { path: '/Insurance', 
  name: 'Insurance List', 
  component: Insurance_list, 
  exact: true},

  { path: '/Insurance/Insurance List',
   name: 'Insurance List',
   component: Insurance_list},
  
  
  { path: '/Users List', name: 'Users List', component: User_list, exact:true },
  { path: '/Users List/Users List', name: 'Users List', component: User_list },


  { path: '/Bookings', name: 'Bookings', component: Bookings, exact:true },
  { path: '/Bookings/Bookings', name: 'Bookings', component: Bookings },
  
  { path: '/Department', name: 'Department', component: Department_list, exact: true },
  { path: '/Department/DepartmentList', name: 'DepartmentList', component: Department_list },
 
  
  { path: '/Appointment', name: 'Appointment', component: Doctor_schedule, exact: true },
 
  { path: '/Appointment/Doctor schedule', name: 'Doctor schedule', component: Doctor_schedule },
  { path: '/Appointment/Add schedule', name: 'Add schedule', component: Add_schedule },

  { path: '/Patient', name: 'Patient', component: All_patient, exact: true },
  { path: '/Patient/All patient', name: 'All patient', component: All_patient },
  { path: '/Patient/Add patient', name: 'Add patient', component: Add_patient },
  
  { path: '/Bed Booking', name: 'Bed Booking', component: All_bed, exact: true },
  { path: '/Bed Booking/All bed', name: 'All bed', component: All_bed },
  { path: '/Bed Booking/Add bed', name: 'Add bed', component: Add_bed },
  { path: '/Bed Booking/Bed Expense', name: 'Bed Expense', component: Bed_expense },
  { path: '/Bed Booking/Add Bed facility', name: 'Add Bed facility', component: Add_facility },
  { path: '/Bed Booking/Add Amenities', name: 'Add Amenities', component: Add_Amenities },
  { path: '/Bed Booking/Add Services', name: 'Add Servies', component: Add_Services},

  { path: '/Bed Bookings', name: 'Bed Bookings', component:Pending_booking, exact: true },
  { path: '/Bed Bookings/Pending Booking', name: 'Pending Booking', component: Pending_booking },
  // { path: '/Bed Bookings/Bed Billing', name: 'Bed Blling', component: Bed_billing },
  // { path: '/Bed Bookings/Closed Booking', name: 'closed Booking', component: Closed_booking },
  { path: '/Bed Bookings/Accepted Booking', name: 'Accepted Booking', component: Accepted_booking },
  { path: '/Bed Bookings/Rejected Booking', name: 'Rejected Booking', component: Rejected_booking },
  
  { path: '/Bed Bookings/All Booking', name: 'All Booking', component: All_booking },

  { path: '/Payments', name: 'Payments', component: Add_payment, exact: true },
  { path: '/Payments/Payment', name: 'Payment', component: Payment },
  { path: '/Payments/Add payment', name: 'Add payment', component: Add_payment},

  { path: '/Manage SubAdmin', name: 'Manage SubAdmin', component: Add_user, exact: true},
  { path: '/Manage SubAdmin/Add User', name: 'Add User', component: Add_user},
  { path: '/Manage SubAdmin/SubAdmin List', name: 'SubAdmin List', component: SubAdmin_list},

  { path: '/HospitalSubAdmin', name: 'HospitalSubAdmin', component: Add_user, exact: true},
  { path: '/HospitalSubAdmin/AddHospital SubAdmin', name: 'AddHospital SubAdmin', component: HospitalSubAmin},
  { path: '/HospitalSubAdmin/Hospital SubAdmin List', name: 'Hospital SubAdmin List', component: HospitalSubAminList},


  { path: '/Manage HospitalSubAdmin', name: 'Manage HospitalSubAdmin', component: ManageHospitalAdmin, exact: true},
  { path: '/Manage HospitalSubAdmin/Manage HospitalAdmin', name: 'Manage HospitalAdmin', component: ManageHospitalAdmin},
  { path: '/Manage HospitalSubAdmin/Hospital SubAdmin List', name: 'Hospital SubAdmin List', component: HospitalSubAmin_List},



]
export default routes
