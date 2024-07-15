import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import Swal from 'sweetalert2';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, customerDetails } = location.state || {};

  const {
    selectedSeats,
    bus,
    numPassengers,
    discountAmount,
    GST,
    cartTotal,
    from,
    to,
    fare,
    bookingDate,
  } = bookingDetails || {};
console.log(bus)
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
  );
console.log(selectedSeats)
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePassengerChange = (index, field, value) => {
    const updatedDetails = passengerDetails.map((passenger, i) =>
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengerDetails(updatedDetails);
  };

  const validatePassengerDetails = () => {
    for (const passenger of passengerDetails) {
      if (!passenger.name || !passenger.age || !passenger.gender) {
        return false;
      }
    }
    return true;
  };

  const handlePayment = async () => {
    // Simulate payment processing, replace with actual logic
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(true); // Payment successful
    //   }, 2000); // Simulate 2 seconds delay
    // });
    try{
      return await axios.post("http://localhost:3000/booking",{
        customerName:"",
        phoneNumber:"",
        email:"",
        address:"",
        busId:bus.busId,
        selectedSeats:selectedSeats,
        discountAmount:discountAmount,
        gst:"",
        cartTotal:cartTotal,
        createdAt:"",
        updatedAt:"",
        passengerDetails:passengerDetails
  
      },{
        header:{"Content-type":"application/json"}
      }).then((res)=>{
         return axios.post("http://localhost:3000/seat",{
          busId:bus.busId,
          from:from,
          to:to,
          selectedSeats:selectedSeats,
          bookingDate:bookingDate
         },{
          header:{"Content-type":"application/json"}
        })
      }).catch((rej)=>{
        console.log(rej)
      })
      
     
    }
    catch(err){
      console.log(err)
    }
    

  };

  const handleConfirmBooking = async () => {
    if (!validatePassengerDetails()) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all passenger details.",
        icon: "error"
      });
      return;
    }
  
    setShowPaymentModal(true);
  };

  const handlePayNow = async () => {
    const paymentSuccessful = await handlePayment();

    if (paymentSuccessful) {
      setPaymentSuccess(true);
      
      Swal.fire({
        title: "Payment Successful!",
        text: "",
        icon: "success"
      });

      generatePDF();
      
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  //   // Save PDF with a professional filename
  //   doc.save(`Ticket_Invoice_${bookingData.customerName.replace(/\s/g, '_')}.pdf`);
  // };

  const generatePDF = () => {
    const bookingData = {
      customerName: customerDetails?.name || 'N/A',
      phoneNumber: customerDetails?.phoneNumber || 'N/A',
      email: customerDetails?.email || 'N/A',
      address: customerDetails?.address || 'N/A',
      busId: bus?.busId || 'N/A',
      selectedSeats: selectedSeats || [],
      passenger_details: passengerDetails,
      discountAmount: discountAmount || 0,
      GST: GST || 0,
      cartTotal: cartTotal || 0,
      from,
      to,
      fare,
      busType: bus?.busType || 'N/A',
      bookingDate: bookingDate || 'N/A',
    };
  
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text('My-Bus', 105, 20, 'center');
    doc.setFontSize(18);
    doc.text('Ticket details', 105, 35, 'center');
  
    doc.text('Bus Details:', 20, 100);
    doc.autoTable({
      startY: 105,
      head: [['Attribute', 'Value']],
      body: [
        ['Bus Name', bus.busName],
        ['Bus Number', bus.busNumber],
        ['From', bookingData.from],
        ['To', bookingData.to],
        ['Type', bus.busType],
        ['Fare', `₹ ${bookingData.fare.toLocaleString()}`],
        ['Selected Seats', bookingData.selectedSeats.join(', ')],
        ['Number of Passengers', bookingData.passenger_details.length.toString()],
        ['Booking Date', new Date(bookingData.bookingDate).toLocaleDateString()],
      ],
      didDrawPage: (data) => {
        doc.setFontSize(12);
        doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
      },
    });
  
    doc.setFontSize(14);
    // doc.text(`Discount: ₹ ${bookingData.discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
    // doc.text(`GST (5%): ₹ ${bookingData.GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
    doc.text(`Total: ₹ ${bookingData.fare.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);
  
    doc.save(`Ticket_Invoice_${bookingData.customerName.replace(/\s/g, '_')}.pdf`);
  };
  

  return (
    <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252',fontWeight:'bold' }}>
        Booking Confirmation
      </h2>

      {/* Customer Details */}
      {customerDetails && (
        <div className="mb-4">
          <h4>Customer Details:</h4>
          <p>
            <strong>Name:</strong> {customerDetails.name}
          </p>
          <p>
            <strong>Phone Number:</strong> {customerDetails.phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {customerDetails.email}
          </p>
          <p>
            <strong>Address:</strong> {customerDetails.address}
          </p>
        </div>
      )}

      {/* Bus Details */}
      {bus && (
        <div className="mb-4" style={{ background: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
          <h4 style={{ color: 'grey', fontWeight: 'bold' }}>Bus Details</h4>
          <div className="row mb-3" style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Bus Name</label>
            <div className="col-sm-8">
              <p>{bus.busName}</p>
            </div>
          </div>
          <div className="row mb-3" style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Vehicle Number</label>
            <div className="col-sm-8">
              <p>{bus.busNumber}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Source</label>
            <div className="col-sm-8">
              <p>{from}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Destination</label>
            <div className="col-sm-8">
              <p>{to}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Type</label>
            <div className="col-sm-8">
              <p>{bus.busType}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Boarding time</label>
            <div className="col-sm-8">
              <p>{bus.Route?.departure}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Drop-off time</label>
            <div className="col-sm-8">
              <p>{bus.Route?.arrival}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Fare</label>
            <div className="col-sm-8">
              <p>₹ {fare.toLocaleString()}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Selected Seats</label>
            <div className="col-sm-8">
              <p>{selectedSeats.map((seat) => seat + 1).join(', ')}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Number of Passengers</label>
            <div className="col-sm-8">
              <p>{numPassengers}</p>
            </div>
          </div>
          <div className="row mb-3"style={{color:'grey',fontWeight:'bold'}}>
            <label className="col-sm-4 col-form-label">Journey Date</label>
            <div className="col-sm-8">
              <p>{new Date(bookingDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Passenger Details */}
      <div className="mb-4" style={{ textAlign: 'center' }}>
        <h4 style={{ color: '#ca5252',fontWeight:'bold' }}>Passenger Details:</h4>
        {passengerDetails.map((passenger, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              value={passenger.name}
              onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
              required
              style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey',fontWeight:'bold' }}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Age"
              value={passenger.age}
              onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
              required
              style={{ backgroundColor: 'transparent',border: '2px solid #ca5252', color: 'grey',fontWeight:'bold' }}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Gender"
              value={passenger.gender}
              onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
              required
              style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey',fontWeight:'bold' }}
            />
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{color:'#ca5252',fontWeight:'bold'}}>Payment Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPaymentModal(false)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
      {!paymentSuccess ? (
        <>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Card Number"
            value={creditCardDetails.cardNumber}
            onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
            required
            style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Card Holder Name"
            value={creditCardDetails.cardHolderName}
            onChange={(e) =>
              setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })
            }
            required
            style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Expiry Date (MM/YYYY)"
            value={creditCardDetails.expiryDate}
            onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
            required
            style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="CVV"
            value={creditCardDetails.cvv}
            onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
            required
            style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
          />
          <button className="btn btn-primary" onClick={handlePayNow} style={{ backgroundColor: '#ca5252', border: '2px solid black' }}>
            Pay Now
          </button>
        </>
      ) : (
        <div className="">
          <h4 style={{ color: 'green' }}> Success!</h4>
        </div>
      )}
    </div>


              {/* <div className="modal-body">
                {!paymentSuccess ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Card Number"
                      value={creditCardDetails.cardNumber}
                      onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
                      required
                      style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey',fontWeight:'bold' }}
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Card Holder Name"
                      value={creditCardDetails.cardHolderName}
                      onChange={(e) =>
                        setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })
                      }
                      required
                      style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey',fontWeight:'bold'}}
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Expiry Date (MM/YYYY)"
                      value={creditCardDetails.expiryDate}
                      onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
                      required
                      style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey',fontWeight:'bold'}}
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="CVV"
                      value={creditCardDetails.cvv}
                      onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
                      required
                      style={{ backgroundColor: 'transparent',border: '2px solid #ca5252', color: 'grey',fontWeight:'bold' }}
                    />
                    <button className="btn btn-primary" onClick={handlePayNow} style={{backgroundColor:'#ca5252',border:'2px solid black'}}>
                      Pay Now
                    </button>
                  </>
                ) : (
                  <div className="text-center">
                    <h4 style={{ color: 'green' }}>Payment Successful!</h4>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Confirm Booking Button */}
      {!showPaymentModal && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleConfirmBooking} style={{backgroundColor:'#ca5252',border:'2px solid black'}}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;

