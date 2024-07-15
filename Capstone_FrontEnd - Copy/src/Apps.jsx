import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaUser, FaHome, FaFileInvoiceDollar, FaBus, FaUsers, FaUserTie } from 'react-icons/fa';
import CustomerList from './Components/login/CustomerList';
import CustomerForm from './Components/login/CustomerForm';
import CustomerEdit from './Components/login/CustomerEdit';
import CustomerDelete from './Components/login/CustomerDelete';
import BusRead from './Components/login/Busread';
import ProductForm from './Components/login/BusCreate';
import ProductEdit from './Components/login/Update';
import ProductDelete from './Components/login/BusDelete';
import Info from './Components/Info';
import Payment from './Components/Payment';
import Bus from './Components/Bus';
import Profile from './Components/profile';
import CreateDriver from './Components/CreateDriver';
import BookingDetailsComponents from './Components/BookingDetails'; 

function Apps() {
  const [showBusDropdown, setShowBusDropdown] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

  const navLinkStyle = {
    color: 'orange',
    borderRadius: '5px',
    padding: '10px 15px',
    margin: '5px 0',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const customDropdownItemStyle = {
    color: '#ca5252',
    text:'bold',
    padding: '10px 20px',
    display: 'block',
    textDecoration: 'none',
  };

  const handleBusDropdownEnter = () => {
    setShowBusDropdown(true);
    setShowCustomerDropdown(false);
  };

  const handleBusDropdownLeave = () => {
    setShowBusDropdown(false);
  };

  const handleCustomerDropdownEnter = () => {
    setShowCustomerDropdown(true);
    setShowBusDropdown(false);
  };

  const handleCustomerDropdownLeave = () => {
    setShowCustomerDropdown(false);
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Navbar bg="dark" variant="dark" className="flex-column p-3" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
        <Navbar.Brand as={Link} to="/" className="mb-3" style={{ color: 'orange', fontFamily: 'Times New Roman', fontSize: '44px' }}>
          My Bus
        </Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" style={{ ...navLinkStyle, backgroundColor: 'transparent' }}>
            <FaHome style={iconStyle} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/billing" style={{ ...navLinkStyle, backgroundColor: 'transparent' }}>
            <FaFileInvoiceDollar style={iconStyle} /> Invoice
          </Nav.Link>
          <Nav.Link as={Link} to="/driver" style={{ ...navLinkStyle, backgroundColor: 'transparent' }}>
            <FaUserTie style={iconStyle} /> Driver
          </Nav.Link>

          {/* <Nav.Link as={Link} to="/booking-details" style={{ ...navLinkStyle, backgroundColor: 'transparent' }}>
            <FaFileInvoiceDollar style={iconStyle} /> Booking Details
          </Nav.Link> */}

          <NavDropdown
            title={<span style={{ ...iconStyle, color: 'orange', display: 'flex', alignItems: 'center' }}><FaBus /> Bus</span>}
            id="bus-dropdown"
            style={{ ...navLinkStyle, marginBottom: '5px' }}
            show={showBusDropdown}
            onMouseEnter={handleBusDropdownEnter}
            onMouseLeave={handleBusDropdownLeave}
          >
            <NavDropdown.Item as={Link} to="/view-bus" style={customDropdownItemStyle}>View Bus</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/bus-form" style={customDropdownItemStyle}>Create a New Bus</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/edit-bus" style={customDropdownItemStyle}>Edit / Update a Bus</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/delete-bus" style={customDropdownItemStyle}>Delete a Bus</NavDropdown.Item>
          </NavDropdown>
          

          {/* <NavDropdown
            title={<span style={{ ...iconStyle, color: 'orange', display: 'flex', alignItems: 'center' }}><FaUsers  /> Customers</span>}
            id="customer-dropdown"
            style={{ ...navLinkStyle, marginBottom: '5px' }}
            show={showCustomerDropdown}
            onMouseEnter={handleCustomerDropdownEnter}
            onMouseLeave={handleCustomerDropdownLeave}
          >
            <NavDropdown.Item as={Link} to="/CustomerList" style={customDropdownItemStyle}>View Customers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/CustomerForm" style={customDropdownItemStyle}>Create a New Customer</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/EditCustomer" style={customDropdownItemStyle}>Edit / Update a Customer</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/DeleteCustomer" style={customDropdownItemStyle}>Delete a Customer</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>

        <Nav className="mt-auto">
          <Button variant="outline-light" as={Link} to="/profile" style={{ color: 'orange', borderColor: 'orange' }}>
            <FaUser style={{ marginRight: '5px', color: 'orange' }} />
            Profile
          </Button>
        </Nav>
      </Navbar>

      <div className="flex-grow-1 p-3" style={{ marginLeft: '250px' }}>
        <Routes>
          <Route path="/" element={<Bus />} />
          <Route path="/CustomerList" element={<CustomerList />} />
          <Route path="/CustomerForm" element={<CustomerForm />} />
          <Route path="/EditCustomer" element={<CustomerEdit />} />
          <Route path="/DeleteCustomer" element={<CustomerDelete />} />
          <Route path="/view-bus" element={<BusRead />} />
          <Route path="/bus-form" element={<ProductForm />} />
          <Route path="/delete-bus" element={<ProductDelete />} />
          <Route path="/edit-bus" element={<ProductEdit />} />
          <Route path="/booking-details" element={<BookingDetailsComponents />} />

          {/* <Route path="/booking-details/:bookingId" element={<BookingDetailsComponents />} /> */}


          {/* <Route path="/booking-details" element={<BookingDetailsComponent />} /> */}

          
          
            {/* <Route path="/booking-details" component={BookingDetails} /> */}

          <Route path="/bus-details" element={<Info />} />
          <Route path="/billing" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/driver" element={<CreateDriver />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default Apps;
