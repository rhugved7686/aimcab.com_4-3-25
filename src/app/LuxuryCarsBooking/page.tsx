// pages/index.js (or any other appropriate page in your Next.js app)
'use client';
import { useState } from 'react';

export default function Home() {
  const [tripType, setTripType] = useState('One Way');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    selectPackage: '4',
    dateend: '',
    timeend: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setTripType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle the form submission logic here
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-2">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://aimcabbooking.com/images/logo-png.png"
              alt="logo"
              className="w-12 h-10"
            />
            <span className="text-white text-xl ml-3">AIMCAB</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="tel:9130030054">
                  <i className="fas fa-phone-alt fa-lg"></i>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/index.php">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/luxury-cars-booking.php">
                  Luxury Cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/#service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-2" href="https://aimcabbooking.com/#login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="shadow1 bg-white mt-20 p-8">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12 text-right shadow13 py-4">
              <h2 className="text-2xl text-gray-800">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  width="22"
                  data-icon="phone-alt"
                  className="svg-inline--fa fa-phone-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
                <a href="tel:+919130030054">+91 9130030054</a>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-1/3 p-4 bg-gray-100 rounded-lg mx-auto" id="booking-form">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center text-2xl font-semibold">BOOK A CAB NOW</h2>

          {/* Trip Type Selection */}
          <div className="space-y-2">
            <h4 className="text-left text-sm">Trip Type</h4>
            <select
              className="w-full p-2 bg-yellow-300"
              name="trip"
              value={tripType}
              onChange={handleSelectChange}
              required
            >
              <option value="One Way">One Way Trip</option>
              <option value="Round">Round Trip</option>
              <option value="Rental">Rental</option>
            </select>
          </div>

          {/* One Way Trip Inputs */}
          {tripType === 'One Way' && (
            <div>
              <input
                className="w-full p-2 mb-2"
                name="from"
                type="text"
                placeholder="PickUp Location"
                value={formData.from}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-2 mb-2"
                name="to"
                type="text"
                placeholder="Drop Location"
                value={formData.to}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Rental Package Selection */}
          {tripType === 'Rental' && (
            <div>
              <h5 className="text-left text-sm">Choose Package</h5>
              <select
                className="w-full p-2 bg-yellow-300"
                name="mySelect"
                value={formData.selectPackage}
                onChange={handleChange}
              >
                <option value="4">4Hrs 40Kms</option>
                <option value="6">6Hrs 60Kms</option>
                <option value="8">8Hrs 80Kms</option>
              </select>
            </div>
          )}

          {/* Date and Time Inputs */}
          <div>
            <h5 className="text-left text-sm">Choose Date and Time</h5>
            <input
              className="w-1/2 p-2 mb-2"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className="w-1/2 p-2 mb-2"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Return Date and Time (for Round Trip) */}
          {tripType === 'Round' && (
            <div>
              <h5 className="text-left text-sm">Return Date and Time</h5>
              <input
                className="w-1/2 p-2 mb-2"
                name="dateend"
                type="date"
                value={formData.dateend}
                onChange={handleChange}
              />
              <input
                className="w-1/2 p-2 mb-2"
                name="timeend"
                type="time"
                value={formData.timeend}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Personal Details Inputs */}
          <div>
            <input
              className="w-full p-2 mb-2"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 mb-2"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 mb-2"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white p-2 rounded-lg"
          >
            Book Now
          </button>
        </form>
      </section>

      <div className="homebanner btHome">
      <div className="container mx-auto p-4">
        <div className="hMsearchbx clearfix PR" title="Cab booking form">
          <h1 className="text-2xl font-bold text-center mb-8">Book Your Luxury Car</h1>

          {/* Tabs */}
          <ul className="tripselection nav-tabs flex space-x-4 border-b-2 mb-6">
            <li className="active">
              <a href="#oneway" className="text-lg text-blue-600 hover:text-blue-800">Oneway trip</a>
            </li>
            <li className="active">
              <a href="#roundtrip" className="text-lg text-blue-600 hover:text-blue-800">Round Trip</a>
            </li>
          </ul>

          <div className="tab-content select_detail">
            {/* Oneway trip form */}
            <div className="tab-pane in fade active" id="oneway">
              <form
                method="get"
                action="luxury-redirect.php"
                role="form"
                id="busform"
                className="form-horizontal space-y-4"
              >
                <input id="trip" type="hidden" name="trip" value="One Way" />
                <div className="inpbx">
                  <label className="block font-medium">From</label>
                  <input
                    name="from"
                    id="from"
                    placeholder="Enter Pick Up City"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input id="origin" type="hidden" name="origin" />
                </div>

                <div className="inpbx">
                  <label className="block font-medium">To</label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    placeholder="Enter Destination City"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input id="destination" type="hidden" name="destination" />
                </div>

                <div id="result">
                  <input id="distance" type="hidden" name="distance" />
                  <input id="source_pincode" type="hidden" name="source_pincode" />
                  <input id="destination_pincode" type="hidden" name="destination_pincode" />
                </div>

                <div className="minpbx-split flex space-x-4">
                  <div className="inpbx w-1/3">
                    <label className="block font-medium">Departure</label>
                    <input
                      type="date"
                      name="date"
                      required
                      placeholder="Journey Start Date"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="inpbx timebx">
                  <label className="block font-medium">Pickup Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    placeholder="Journey Start Date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <button className="btn_big w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
                  Search
                </button>
              </form>
            </div>

            {/* Round Trip form */}
            <div className="tab-pane fade" id="round">
              <form
                method="get"
                action="luxury-redirect.php"
                role="form"
                id="oform"
                className="form-horizontal space-y-4"
              >
                <input id="trip" type="hidden" name="trip" value="Round" />
                <div className="inpbx">
                  <label className="block font-medium">From</label>
                  <input
                    type="text"
                    name="from"
                    id="from_round"
                    placeholder="Enter Pick Up City"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input id="origin1" type="hidden" name="origin1" />
                </div>

                <div className="inpbx">
                  <label className="block font-medium">To</label>
                  <input
                    type="text"
                    id="to_round"
                    name="to"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Destination City"
                    required
                  />
                  <input id="destination1" type="hidden" name="destination1" />
                </div>

                <div id="result1">
                  <input id="distance1" type="hidden" name="distance" />
                  <input id="source_pincode1" type="hidden" name="source_pincode" />
                  <input id="destination_pincode1" type="hidden" name="destination_pincode" />
                </div>

                <div className="minpbx-split flex space-x-4">
                  <div className="inpbx w-1/2">
                    <label className="block font-medium">Departure</label>
                    <input
                      type="date"
                      name="date"
                      required
                      placeholder="Journey Start Date"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="inpbx w-1/2">
                    <label className="block font-medium">Return</label>
                    <input
                      type="date"
                      name="dateend"
                      required
                      placeholder="Journey End Date"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="inpbx timebx">
                  <label className="block font-medium">Pickup Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    placeholder="Journey Start Date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="inpbx timebx">
                  <label className="block font-medium">Drop Time</label>
                  <input
                    type="time"
                    name="timeend"
                    required
                    placeholder="Journey Start Date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <button className="btn_big w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      {/* Header Section */}
      <div className="container-fluid">
        <div
          className="row shadow-sm p-3 mb-5 bg-white rounded"
          style={{ padding: '10px' }}
        >
          <div className="col-sm-1"></div>
          <div className="col-sm-11">Home / Luxury Cars</div>
        </div>
      </div>

      {/* Car Image Section */}
      <div
        className="container maimcontainerbody shadow-sm p-3 mb-5 bg-white rounded"
        style={{ paddingBottom: '50px' }}
      >
        <div className="row">
          <div className="col-sm-12">
            <img
              src="images/3.jpg"
              alt="car-2"
              style={{
                height: '300px',
                width: '100%',
                padding: '10px',
                borderRadius: '25px',
              }}
              className="responsive"
            />
          </div>
        </div>
      </div>

      {/* Pricing Table Section */}
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <table className="table table-striped">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Trip</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Driver Allowance</th>
                  <th scope="col">Base Kilometer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Outstation</th>
                  <td>₹80/KM</td>
                  <td>₹500/Day</td>
                  <td>300/Day</td>
                </tr>
                <tr>
                  <th scope="row">8hour/80km</th>
                  <td>₹9000</td>
                  <td>N.A.</td>
                  <td>N.A.</td>
                </tr>
              </tbody>
            </table>
            <p style={{ color: 'red', fontSize: '13px' }}>
              * Toll and parking as per the receipt.
            </p>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>

      {/* More About Section */}
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 textclasshead">
            <p>More About</p>
            <h4>
              <b>Luxury Cars On rent in India</b>
            </h4>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p style={{ fontSize: '15px' }}>
              Luxury cars have always been a symbol of status, class, and
              luxury. However, not everyone can afford to own a luxury car due to
              its high price. But that doesn't mean you can't experience the thrill
              of driving a luxury car. Luxury cars on rent have become a popular
              choice for people who want to experience the luxury of driving a
              high-end car without owning one.
            </p>
            <br />
            <p>
              Renting a luxury car is also a great option for those who want to
              make a statement at an event or for special occasions like weddings,
              prom nights, or corporate events. Luxury cars on rent offer a range of
              options including BMW, Mercedes-Benz, and Toyota cars.
              <br />
              BMW is a German luxury car brand known for its sleek design, powerful
              engines, and advanced technology features. BMW offers a wide range of
              luxury cars including sedans, coupes, convertibles, and SUVs. The BMW
              7 Series is one of the most popular luxury cars on rent, known for its
              luxurious features, smooth ride, and advanced technology.
              <br />
              Mercedes-Benz is another German luxury car brand known for its
              innovative engineering, advanced safety features, and luxurious
              interiors. Mercedes-Benz offers a range of luxury cars including
              sedans, coupes, convertibles, and SUVs. The Mercedes-Benz S-Class is
              one of the most popular luxury cars on rent, known for its comfortable
              ride, advanced technology features, and luxurious interiors.
              <br />
              Toyota is a Japanese car brand known for its reliability, durability,
              and advanced technology features. Toyota offers a range of luxury cars
              including sedans, SUVs, and hybrids. The Toyota Avalon is one of the
              most popular luxury cars on rent, known for its spacious interior,
              advanced safety features, and comfortable ride.
              <br />
              Renting a luxury car has never been easier. Many luxury car rental
              companies offer online booking and delivery services, making it
              convenient for customers to rent a luxury car of their choice. Luxury
              cars on rent come with various packages, including chauffeur-driven
              cars, self-drive cars, and long-term rentals.
              <br />
              In conclusion, renting a luxury car is a great option for those who
              want to experience the thrill of driving a high-end car without owning
              one. Luxury cars on rent offer a range of options including BMW,
              Mercedes-Benz, and Toyota cars. With online booking and delivery
              services, renting a luxury car has become more accessible than ever
              before. So why not make a statement at your next event with a luxury
              car on rent.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Available Luxury Cars Section */}
      <div
        className="container"
        style={{ paddingBottom: '50px' }}
      >
        <div className="row clasforallroutedetails">
          <b style={{ fontSize: '15px' }}>Luxury Car Available</b>
          <hr style={{ borderTop: '2px solid grey' }} />
          <p style={{ lineHeight: '1.8' }}>
            <a href=""> BMW</a>&nbsp; |&nbsp;
            <a href="">Mercedes </a> | &nbsp;
            <a href=""> Toyoto</a> |&nbsp;
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}
