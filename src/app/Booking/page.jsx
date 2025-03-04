"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"

export default function Home() {
  const [cars, setCars] = useState([])
  const route = useRouter()
  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState({})

  useEffect(() => {
    const getVisitor = async () => {
      try {
        setLoading(true)
        const res = JSON.parse(localStorage.getItem("trip"))
        console.log(res)
        const trip = res
        const data = await axios.post("/api/prices", {
          pickup: trip.pickup_location,
          drop: trip.drop_location,
          tripType: trip.trip,
          hours: trip.hours,
        })
        console.log(data)

        const tripType = trip.trip
        const distance = tripType == "One Way" ? +trip.oneway_distance : +trip.round_distance
        const diff = new Date(trip.dateend).getTime() - new Date(trip.date).getTime()
        const days = diff / (1000 * 3600 * 24) + 1

        const fetchedCars = [
          {
            id: 1,
            name: "Hatchback",
            model: "Hatchback",
            price: calculateCarPrice("hatchback", tripType, days, distance, data.data.data),
            image: "/images/hatchback.png",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 2,
            name: "Sedan",
            model: "Sedan",
            price: calculateCarPrice("sedan", tripType, days, distance, data.data.data),
            image: "/images/etios.jpg",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 3,
            name: "SUV",
            model: "SUV",
            price: calculateCarPrice("suv", tripType, days, distance, data.data.data),
            image: "/images/muv.png",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 4,
            name: "MUV",
            model: "MUV",
            price: calculateCarPrice("suvplus", tripType, days, distance, data.data.data),
            image: "/images/innova.jpg",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
        ]
        setCars(fetchedCars)
        setLoading(false)
      } catch (error) {
        console.error("Error in getVisitor:", error)
        setLoading(false)
        // Handle the error appropriately, e.g., show an error message to the user
      }
    }
    getVisitor()
  }, [])

  const calculateCarPrice = (carType, tripType, days, distance, prices) => {
    if (!prices || !prices[carType]) {
      console.warn(`Price for ${carType} is not available. Using default price.`)
      return 0
    }

    if (tripType === "One Way") {
      return prices[carType] * Math.floor(distance)
    } else if (tripType === "Round") {
      return distance <= 300 ? days * 300 * prices[carType] : days * 300 + (distance - 300) * prices[carType]
    }
    return prices[carType] || 0
  }

  const handleBookNow = async (car, index) => {
    setLoadingData({ [index]: true })
    try {
      const trip = JSON.parse(localStorage.getItem("trip"))
      const data = {
        name: trip.name,
        user_pickup: trip.pickup_location,
        user_drop: trip.drop_location,
        date: trip.date,
        time: trip.time,
        phone: trip.phone,
        email: trip.email,
        user_trip_type: trip.trip,
        distance: trip.trip === "One Way" ? trip.oneway_distance : trip.trip === "Round" ? trip.round_distance : 0,
        baseAmount: car.price,
        dateend: trip.trip === "Round" ? trip.dateend : null,
        timeend: trip.trip === "Round" ? trip.timeend : null,
        status: 0,
        bookingtype: "website",
        from_location: trip.pickup_location,
        return_date: trip.dateend,
        start_date: trip.date,
        to_location: trip.drop_location,
        trip_type: trip.trip,
        base_amount: car.price,
        bookid: trip.bookid,
        booking_id: trip.bookid,
      }

      console.log("Sending booking data:", data)
      const res = await axios.post("/api/booking", data)

      console.log("Booking response:", res.data)
      setLoadingData({ [index]: false })
      route.push("/ThankYou")
    } catch (error) {
      console.error("Error in handleBookNow:", error)
      setLoadingData({ [index]: false })
      alert("An error occurred while booking. Please try again.")
    }
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-[#CDC7C7] w-full">
        <nav className="bg-[#CDC7C7] mb-0">
          <ul className="flex space-x-4 p-4">
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#service">Services</a>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-[#F8F9FA]">
        {/* Hero Section */}
        <section className="text-center py-4 bg-gradient-to-r from-[#faa499] to-[#f7dd85]">
          <h1 className="text-4xl font-bold">Welcome to Our Car Rental Service</h1>
          <p className="text-xl mt-4">Explore the best cars available for your trips.</p>
        </section>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-xl font-semibold text-gray-600">
              Loading
              <span className="animate-pulse">.</span>
              <span className="animate-pulse animation-delay-200">.</span>
              <span className="animate-pulse animation-delay-400">.</span>
            </div>
          </div>
        ) : (
          <section className="py-16 px-4">
            <h2 className="text-3xl font-semibold text-center">Our Cars</h2>
            <p className="text-lg text-center mt-4">Choose from a variety of cars based on your preferences.</p>

            {/* Responsive grid for car cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cars.map(
                (car, index) =>
                  car.price > 0 && (
                    <div key={car.id} className="card p-6 bg-white shadow-lg rounded-lg w-80">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        width={320}
                        height={130}
                        loading="lazy"
                        className="w-90 h-30 object-cover rounded-lg"
                      />
                      <h3 className="text-2xl mt-4">{car.name}</h3>
                      <p className="mt-4 text-lg">{car.description}</p>

                      {/* Facilities Section */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold">Facilities:</h4>
                        <ul className="mt-2">
                          {car.facilities.map((facility, facilityIndex) => (
                            <li key={facilityIndex} className="flex items-center mt-2">
                              <img
                                src={facility.icon || "/placeholder.svg"}
                                alt={facility.name}
                                className="w-8 h-8 mr-2"
                              />
                              <p>{facility.name}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-xl font-semibold">Rs. {car.price}/-</p>
                        <button
                          className="relative px-6 py-3 text-white bg-yellow-300 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                          disabled={loadingData[index]}
                          onClick={() => handleBookNow(car, index)}
                        >
                          {loadingData[index] ? (
                            <div role="status">
                              <svg
                                aria-hidden="true"
                                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span>Loading...</span>
                            </div>
                          ) : (
                            <span>Book Now</span>
                          )}
                        </button>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </section>
        )}

        {/* Booking Section */}
        <section className="bg-[#f7dd85] py-16 text-center">
          <h2 className="text-3xl font-semibold">Book Your Car</h2>
          <p className="mt-4 text-lg">Book your preferred car today and make your journey comfortable!</p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-[#faa499] to-[#ffc55c] rounded-lg text-white text-xl">
              Book Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-[#FFC107] py-12">
          <div className="footer text-center">
            <h5 className="text-white text-2xl">Quick Links</h5>
            <div className="footerconatiner text-left mt-6">
              <ul className="no-bullets mt-4">
                <li className="py-2">Home</li>
                <li className="py-2">About</li>
                <li className="py-2">Services</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}