import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function BusCreate() {
    const [formData, setFormData] = useState({
        busName: '',
        busNumber: '',
        capacity: '',
        busType: '',
        numberOfSeats: '',
        contactNumber: '',
        from: '',
        to: '',
        busRoute: '',
        busRouteTimes: '',
        busRouteFares: '',
        numOfSeats: '',
        runsOnDays: '',
        departure: '',
        arrival: '',
        facilities: '',
        fare: '',
        // reviews: '',
        datesAvailable: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            departure: formData.departure ? new Date(formData.departure).toISOString() : null,
            arrival: formData.arrival ? new Date(formData.arrival).toISOString() : null,
            busRoute: formData.busRoute.split(',').map(item => item.trim()),
            busRouteTimes: formData.busRouteTimes.split(',').map(item => item.trim()),
            busRouteFares: formData.busRouteFares.split(',').map(item => item.trim()),
            runsOnDays: formData.runsOnDays.split(',').map(item => item.trim()),
            facilities: formData.facilities.split(',').map(item => item.trim()),
            reviews: formData.reviews.split(',').map(item => item.trim()),
            datesAvailable: formData.datesAvailable.split(',').map(item => item.trim())
        };

        try {
            const response = await axios.post('http://localhost:3000/bus', formattedData);
            console.log('Response:', response.data); // Log the response data for debugging
            setMessage('Bus created successfully!');
            setError('');
            clearForm();
        } catch (error) {
            setMessage('');
            setError('Error creating bus. Please try again.');
            console.error('Error:', error); // Log the error for further investigation
        }
    };

    const clearForm = () => {
        setFormData({
            busName: '',
            busNumber: '',
            capacity: '',
            busType: '',
            numberOfSeats: '',
            contactNumber: '',
            from: '',
            to: '',
            busRoute: '',
            busRouteTimes: '',
            busRouteFares: '',
            numOfSeats: '',
            runsOnDays: '',
            departure: '',
            arrival: '',
            facilities: '',
            fare: '',
            reviews: '',
            datesAvailable: ''
        });
    };

    return (
        <Container fluid>
            <div style={{ backgroundColor: 'white',color:'black', padding: '20px', borderRadius: '10px' }}>
                <h2 style={{ color: '#ca5252', marginBottom: '20px', textAlign: 'center',fontWeight:'bold' }}>Create a New Bus</h2>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
                    <Form.Group className="mb-3" controlId="busName">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold' }}>Bus Name</Form.Label>
                        <Form.Control type="text" name="busName" value={formData.busName} onChange={handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="busNumber">
                        <Form.Label style={{color: 'grey',fontWeight:'bold'  }}>Bus Number</Form.Label>
                        <Form.Control type="text" name="busNumber" value={formData.busNumber} onChange={handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="capacity">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Capacity</Form.Label>
                        <Form.Control type="number" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="busType">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold' }}>Bus Type</Form.Label>
                        <Form.Control type="text" name="busType" value={formData.busType} onChange={handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="numberOfSeats">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold' }}>Number of Seats</Form.Label>
                        <Form.Control type="number" name="numberOfSeats" value={formData.numberOfSeats} onChange={handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactNumber">
                        <Form.Label style={{color: 'grey',fontWeight:'bold' }}>Contact Number</Form.Label>
                        <Form.Control type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="from">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>From</Form.Label>
                        <Form.Control type="text" name="from" value={formData.from} onChange={handleChange}  required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="to">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>To</Form.Label>
                        <Form.Control type="text" name="to" value={formData.to} onChange={handleChange}  required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="busRoute">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Bus Route</Form.Label>
                        <Form.Control type="text" name="busRoute" value={formData.busRoute} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="busRouteTimes">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Bus Route Times</Form.Label>
                        <Form.Control type="text" name="busRouteTimes" value={formData.busRouteTimes} onChange={handleChange}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="busRouteFares">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Bus Route Fares</Form.Label>
                        <Form.Control type="text" name="busRouteFares" value={formData.busRouteFares} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="numOfSeats">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Seats Available</Form.Label>
                        <Form.Control type="number" name="numOfSeats" value={formData.numOfSeats} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="runsOnDays">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold' }}>Run On Days</Form.Label>
                        <Form.Control type="text" name="runsOnDays" value={formData.runsOnDays} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="departure">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Departure Time</Form.Label>
                        <Form.Control type="datetime-local" name="departure" value={formData.departure} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="arrival">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Arrival Time</Form.Label>
                        <Form.Control type="datetime-local" name="arrival" value={formData.arrival} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="facilities">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Facilities Available</Form.Label>
                        <Form.Control type="text" name="facilities" value={formData.facilities} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fare">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Fare</Form.Label>
                        <Form.Control type="text" name="fare" value={formData.fare} onChange={handleChange}  />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="reviews">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Reviews</Form.Label>
                        <Form.Control type="text" name="reviews" value={formData.reviews} onChange={handleChange}  />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="datesAvailable">
                        <Form.Label style={{ color: 'grey',fontWeight:'bold'  }}>Dates Available</Form.Label>
                        <Form.Control type="text" name="datesAvailable" value={formData.datesAvailable} onChange={handleChange}  />
                    </Form.Group>

                    <div style={{ textAlign: 'center' }}>
                    <Button  variant="primary" type="submit" style={{ width: '30%', backgroundColor:'#ca5252',border:'1px solid black',color:'white',textAlign:'center'}}>
                        Create Bus
                    </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default BusCreate;
