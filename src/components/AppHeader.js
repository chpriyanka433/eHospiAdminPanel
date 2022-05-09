import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMenu } from '@coreui/icons';
import { AppBreadcrumb } from './index';
import { AppHeaderDropdown } from './header/index';
import Clock from 'react-live-clock';
const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <Clock
          style={{
            fontWeight: 'bold',
            fontSize: '2em',
            color: '#246073',
          }}
          format={'HH:mm:ss'}
          ticking={true}
          timezone={'India'}
        />

        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/*<CIcon icon={logo} height={48} alt="Logo" />*/}
        </CHeaderBrand>
        <CHeaderNav className="d-none  me-auto">
          <CNavItem>
            <CNavLink
              to="/dashboard"
              component={NavLink}
              activeClassName="active"
            >
              Dashboard
            </CNavLink>
            <CNavLink to="/Add Doctor" component={NavLink}></CNavLink>
            <CNavLink to="/Add Department" component={NavLink}></CNavLink>
            <CNavLink to="/Add schedule" component={NavLink}></CNavLink>
            <CNavLink to="/Add patient" component={NavLink}></CNavLink>
            <CNavLink to="/Add bed" component={NavLink}></CNavLink>
            <CNavLink to="/Add payment" component={NavLink}></CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
