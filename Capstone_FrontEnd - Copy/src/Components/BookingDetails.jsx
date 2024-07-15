// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // // import BookingDetails from './BookingDetails';

// // // const BookingDetailsComponents = ({ bookingId }) => {
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [cancellationMessage, setCancellationMessage] = useState('');

// // //   const cancelBooking = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await axios.delete(`http://localhost:3000/api/bookings`);
// // //       if (response.status === 200) {
// // //         setCancellationMessage('Booking successfully canceled.');
// // //         // Optionally, update the UI or take further action (e.g., refresh booking details)
// // //       } else {
// // //         setError('Failed to cancel booking.');
// // //       }
// // //     } catch (error) {
// // //       setError('Failed to cancel booking.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Booking Details</h2>
// // //       {loading && <p>Cancelling booking...</p>}
// // //       {error && <p>{error}</p>}
// // //       {cancellationMessage && <p>{cancellationMessage}</p>}
// // //       <button onClick={cancelBooking} disabled={loading}>
// // //         Cancel Booking
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default BookingDetailsComponents;
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const BookingDetailsComponents = ({ bookingId }) => {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [bookingDetails, setBookingDetails] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchBookingDetails = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:3000`);
// // // //         setBookingDetails(response.data); // Assuming response.data contains booking details
// // // //       } catch (error) {
// // // //         setError('Failed to fetch booking details.');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchBookingDetails();
// // // //   }, [bookingId]);

// // // //   const cancelBooking = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
// // // //       if (response.status === 200) {
// // // //         setBookingDetails(prevDetails => ({
// // // //           ...prevDetails,
// // // //           status: 'Cancelled', // Update status in local state
// // // //         }));
// // // //         // Optionally, update the UI or take further action (e.g., refresh booking details)
// // // //       } else {
// // // //         setError('Failed to cancel booking.');
// // // //       }
// // // //     } catch (error) {
// // // //       setError('Failed to cancel booking.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Booking Details</h2>
// // // //       {loading && <p>Loading booking details...</p>}
// // // //       {error && <p>{error}</p>}
// // // //       {bookingDetails && (
// // // //         <div>
// // // //           <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
// // // //           <p><strong>Seat Number:</strong> {bookingDetails.seatNumber}</p>
// // // //           <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
// // // //           <p><strong>Date:</strong> {bookingDetails.date}</p>
// // // //           <p><strong>From:</strong> {bookingDetails.from}</p>
// // // //           <p><strong>To:</strong> {bookingDetails.to}</p>
// // // //           {bookingDetails.status && <p><strong>Status:</strong> {bookingDetails.status}</p>}
// // // //           {!bookingDetails.status && (
// // // //             <button onClick={cancelBooking} disabled={loading}>
// // // //               Cancel Booking
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookingDetailsComponents;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const BookingDetailsComponents = ({ bookingId }) => {
// // // //   const [bookingDetails, setBookingDetails] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [cancellationMessage, setCancellationMessage] = useState('');

// // // //   useEffect(() => {
// // // //     // Fetch booking details based on bookingId
// // // //     const fetchBookingDetails = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:3000/api/booking`);
// // // //         setBookingDetails(response.data); // Assuming API returns booking details in JSON format
// // // //       } catch (error) {
// // // //         setError('Failed to fetch booking details.');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchBookingDetails();
// // // //   }, [bookingId]);

// // // //   const cancelBooking = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
// // // //       if (response.status === 200) {
// // // //         setCancellationMessage('Booking successfully canceled.');
// // // //         // Optionally, update UI or redirect after cancellation
// // // //       } else {
// // // //         setError('Failed to cancel booking.');
// // // //       }
// // // //     } catch (error) {
// // // //       setError('Failed to cancel booking.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (loading) return <p>Loading booking details...</p>;
// // // //   if (error) return <p>{error}</p>;
// // // //   if (!bookingDetails) return null; // Handle case when details are still loading or not available

// // // //   return (
// // // //     <div>
// // // //       <h2>Booking Details</h2>
// // // //       <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
// // // //       <p><strong>Seat Number:</strong> {bookingDetails.seatNumber}</p>
// // // //       <p><strong>From:</strong> {bookingDetails.origin}</p>
// // // //       <p><strong>To:</strong> {bookingDetails.destination}</p>
// // // //       <p><strong>Date:</strong> {bookingDetails.date}</p>
// // // //       <button onClick={cancelBooking} disabled={loading}>
// // // //         Cancel Booking
// // // //       </button>
// // // //       {cancellationMessage && <p>{cancellationMessage}</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // // // export default BookingDetailsComponents;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const BookingDetailsComponents = ({ bookingId }) => {
// // // //   const [bookingDetails, setBookingDetails] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [cancellationMessage, setCancellationMessage] = useState('');

// // // //   useEffect(() => {
// // // //     const fetchBookingDetails = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:3000/api/bookings/${bookingId}`);
// // // //         setBookingDetails(response.data); // Assuming API returns booking details in JSON format
// // // //       } catch (error) {
// // // //         setError('Failed to fetch booking details.');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchBookingDetails();
// // // //   }, [bookingId]);

// // // //   const cancelBooking = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
// // // //       if (response.status === 200) {
// // // //         setCancellationMessage('Booking successfully canceled.');
// // // //         // Optionally, update UI or redirect after cancellation
// // // //       } else {
// // // //         setError('Failed to cancel booking.');
// // // //       }
// // // //     } catch (error) {
// // // //       setError('Failed to cancel booking.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (loading) return <p>Loading booking details...</p>;
// // // //   if (error) return <p>{error}</p>;
// // // //   if (!bookingDetails) return null; // Handle case when details are still loading or not available

// // // //   return (
// // // //     <div>
// // // //       <h2>Booking Details</h2>
// // // //       <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
// // // //       <p><strong>Seat Number:</strong> {bookingDetails.seatNumber}</p>
// // // //       <p><strong>From:</strong> {bookingDetails.origin}</p>
// // // //       <p><strong>To:</strong> {bookingDetails.destination}</p>
// // // //       <p><strong>Date:</strong> {bookingDetails.date}</p>
// // // //       <button onClick={cancelBooking} disabled={loading}>
// // // //         Cancel Booking
// // // //       </button>
// // // //       {cancellationMessage && <p>{cancellationMessage}</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookingDetailsComponents;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // // const API_URL = 'http://localhost:3000'; 

// // // const BookingDetailsComponents = ({ bookingId }) => {
// // //   const [bookingDetails, setBookingDetails] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [cancellationMessage, setCancellationMessage] = useState('');

// // //   useEffect(() => {
// // //     // Function to fetch booking details based on bookingId
// // //     const fetchBookingDetails = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const response = await axios.get(`http://localhost:3000/booking`);
// // //         setBookingDetails(response.data); // Assuming API returns booking details in JSON format
// // //       } catch (error) {
// // //         setError('Failed to fetch booking details.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchBookingDetails();
// // //   }, [bookingId]);

// // //   // Function to handle cancellation of the booking
// // //   const cancelBooking = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
// // //       if (response.status === 200) {
// // //         setCancellationMessage('Booking successfully canceled.');
// // //         // Optionally, update UI or redirect after cancellation
// // //       } else {
// // //         setError('Failed to cancel booking.');
// // //       }
// // //     } catch (error) {
// // //       setError('Failed to cancel booking.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Loading state while fetching data
// // //   if (loading) return <p>Loading booking details...</p>;

// // //   // Error state if unable to fetch data
// // //   if (error) return <p>{error}</p>;

// // //   // Display booking details once loaded
// // //   return (
// // //     <div>
// // //       <h2>Booking Details</h2>
// // //       {bookingDetails && (
// // //         <div>
// // //           <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
// // //           <p><strong>Seat Number:</strong> {bookingDetails.selectedSeats.join(', ')}</p>
// // //           <p><strong>From:</strong> {bookingDetails.origin}</p>
// // //           <p><strong>To:</strong> {bookingDetails.destination}</p>
// // //           <p><strong>Date:</strong> {new Date(bookingDetails.createdAt).toLocaleDateString()}</p>
// // //           <button onClick={cancelBooking} disabled={loading}>
// // //             Cancel Booking
// // //           </button>
// // //         </div>
// // //       )}
// // //       {cancellationMessage && <p>{cancellationMessage}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default BookingDetailsComponents;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const BookingDetailsComponents = ({ bookingId }) => {
// //   const [bookingDetails, setBookingDetails] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [cancellationMessage, setCancellationMessage] = useState('');

// //   useEffect(() => {
// //     // Fetch booking details based on bookingId
// //     const fetchBookingDetails = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await axios.get(`http://localhost:3000/api/bookings/${bookingId}`);
// //         setBookingDetails(response.data); // Assuming API returns booking details in JSON format
// //       } catch (error) {
// //         setError('Failed to fetch booking details.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBookingDetails();
// //   }, [bookingId]);

// //   const cancelBooking = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.delete(`http://localhost:3000/api/bookings`);
// //       if (response.status === 200) {
// //         setCancellationMessage('Booking successfully canceled.');
// //         // Optionally, update UI or redirect after cancellation
// //       } else {
// //         setError('Failed to cancel booking.');
// //       }
// //     } catch (error) {
// //       setError('Failed to cancel booking.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) return <p>Loading booking details...</p>;
// //   if (error) return <p>{error}</p>;
// //   if (!bookingDetails) return null; // Handle case when details are still loading or not available

// //   return (
// //     <div>
// //       <h2>Booking Details</h2>
// //       <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
// //       <p><strong>Seat Number:</strong> {bookingDetails.seatNumber}</p>
// //       <p><strong>From:</strong> {bookingDetails.origin}</p>
// //       <p><strong>To:</strong> {bookingDetails.destination}</p>
// //       <p><strong>Date:</strong> {bookingDetails.date}</p>
// //       <button onClick={cancelBooking} disabled={loading}>
// //         Cancel Booking
// //       </button>
// //       {cancellationMessage && <p>{cancellationMessage}</p>}
// //     </div>
// //   );
// // };

// // export default BookingDetailsComponents;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BookingDetails = ({ bookingId }) => {
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [cancellationMessage, setCancellationMessage] = useState('');

//   useEffect(() => {
//     const fetchBookingDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:3000/api/bookings/${bookingId}`);
//         setBookingDetails(response.data); // Assuming backend returns booking details in JSON format
//       } catch (error) {
//         setError('Failed to fetch booking details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookingDetails();
//   }, [bookingId]);

//   const cancelBooking = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
//       if (response.status === 200) {
//         setCancellationMessage('Booking successfully cancelled.');
//         // Optionally, update UI or redirect after cancellation
//       } else {
//         setError('Failed to cancel booking.');
//       }
//     } catch (error) {
//       setError('Failed to cancel booking.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading booking details...</p>;
//   if (error) return <p>{error}</p>;
//   if (!bookingDetails) return null;

//   return (
//     <div>
//       <h2>Booking Details</h2>
//       <p><strong>Bus Name:</strong> {bookingDetails.busName}</p>
//       <p><strong>Seat Number:</strong> {bookingDetails.seatNumber}</p>
//       <p><strong>From:</strong> {bookingDetails.origin}</p>
//       <p><strong>To:</strong> {bookingDetails.destination}</p>
//       <p><strong>Date:</strong> {bookingDetails.date}</p>
//       <button onClick={cancelBooking} disabled={loading}>
//         Cancel Booking
//       </button>
//       {cancellationMessage && <p>{cancellationMessage}</p>}
//     </div>
//   );
// };

// export default BookingDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingDetails = ({ bookingId }) => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancellationMessage, setCancellationMessage] = useState('');

  useEffect(() => {
    const fetchBookingDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/bookings/${bookingId}`);
        setBookingDetails(response.data); // Assuming backend returns booking details in JSON format
      } catch (error) {
        setError('Failed to fetch booking details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const cancelBooking = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
      if (response.status === 200) {
        setCancellationMessage('Booking successfully cancelled.');
        // Optionally, update UI or redirect after cancellation
      } else {
        setError('Failed to cancel booking.');
      }
    } catch (error) {
      setError('Failed to cancel booking.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>{error}</p>;
  if (!bookingDetails) return null;

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Customer Name:</strong> {bookingDetails.customerName}</p>
      <p><strong>Phone Number:</strong> {bookingDetails.phoneNumber}</p>
      <p><strong>Email:</strong> {bookingDetails.email}</p>
      <p><strong>Bus ID:</strong> {bookingDetails.busId}</p>
      <p><strong>Selected Seats:</strong> {bookingDetails.selectedSeats.join(', ')}</p>
      {/* Add more fields as per your booking details */}
      
      <button onClick={cancelBooking} disabled={loading}>
        Cancel Booking
      </button>
      {cancellationMessage && <p>{cancellationMessage}</p>}
    </div>
  );
};

export default BookingDetails;
