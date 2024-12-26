import Image from 'next/image';

export default function PuneRoute() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB Pune Routes</h1>
        <p className="mt-2 text-lg">Book your cab and explore Pune with ease</p>
      </header>



      {/* Route Information Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Popular Routes in Pune</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
        <a href="/container/city" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-500">Demo</h3>
            <p className="text-gray-600 mt-2">A comfortable and hassle-free ride from Pune to Mumbai, ensuring you reach your destination with ease.</p>
          </a>

          <a href="/PuneToMumbai" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-500">Pune to Mumbai</h3>
            <p className="text-gray-600 mt-2">A comfortable and hassle-free ride from Pune to Mumbai, ensuring you reach your destination with ease.</p>
          </a>

          <a href="/PuneToKolhapur" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Kolhapur</h3>
            <p className="text-gray-600 mt-2">Enjoy a smooth and scenic journey from Pune to Kolhapur, perfect for both business and leisure trips.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Satara</h3>
            <p className="text-gray-600 mt-2">Travel comfortably from Pune to Satara and enjoy a peaceful ride through the scenic Western Ghats.</p>
          </a>
          <a href="/PuneToShirdi" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Shirdi</h3>
            <p className="text-gray-600 mt-2">Embark on a serene journey from Pune to Shirdi and experience divine blessings at the holy Sai Baba temple.</p>
          </a>
          <a href="/PuneToMahabaleshwar" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Mahabaleshwar</h3>
            <p className="text-gray-600 mt-2">Enjoy a refreshing escape from Pune to Mahabaleshwar, surrounded by scenic hills and serene views.</p>
          </a>
          <a href="/PuneToPanchgani" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Panchgani</h3>
            <p className="text-gray-600 mt-2">Take a scenic drive from Pune to Panchgani, a charming hill station known for its lush landscapes and cool climate.</p>
          </a>
          <a href="/PuneToNashik" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Nashik</h3>
            <p className="text-gray-600 mt-2">Embark on a peaceful journey from Pune to Nashik, a city known for its rich history, vineyards, and sacred temples.</p>
          </a>
          <a href="/PuneToThane" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Thane</h3>
            <p className="text-gray-600 mt-2">Travel comfortably from Pune to Thane, a bustling city offering a perfect blend of urban convenience and scenic beauty.</p>
          </a>
          <a href="/PuneToKalyan" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Kalyan</h3>
            <p className="text-gray-600 mt-2">Enjoy a smooth ride from Pune to Kalyan, a vibrant city known for its rich history and bustling markets.</p>
          </a>
          <a href="/PuneToAhmednagar" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Ahmednagar</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic drive from Pune to Ahmednagar, a historic city known for its forts, temples, and cultural heritage.</p>
          </a>
          <a href="/PuneToSolapur" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Solapur</h3>
            <p className="text-gray-600 mt-2">Experience a smooth journey from Pune to Solapur, a city known for its historical sites, temples, and thriving textile industry.</p>
          </a>
          <a href="/PuneToAlibaug" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Alibaug</h3>
            <p className="text-gray-600 mt-2">Enjoy a coastal getaway from Pune to Alibag, a beautiful beach destination perfect for relaxation and water activities.</p>
          </a>
          <a href="/PuneToLonavala" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Lonavala</h3>
            <p className="text-gray-600 mt-2">Take a picturesque drive from Pune to Lonavala, a popular hill station known for its lush greenery, scenic viewpoints, and serene atmosphere.</p>
          </a>
          <a href="/PuneToKarjat" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Karjat</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic drive from Pune to Karjat, a peaceful getaway surrounded by nature, perfect for treks, waterfalls, and relaxation.</p>
          </a>
          <a href="/PuneToIgatpuri" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Igatpuri</h3>
            <p className="text-gray-600 mt-2">Enjoy a tranquil journey from Pune to Igatpuri, a serene hill station known for its lush landscapes, scenic views, and peaceful atmosphere.</p>
          </a>
          <a href="/PuneToBhimashankar" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Bhimashankar</h3>
            <p className="text-gray-600 mt-2">Experience a spiritual and scenic journey from Pune to Bhimashankar, home to the famous Jyotirlinga temple and surrounded by lush greenery.</p>
          </a>
          <a href="/PuneToAurangabad" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Aurangabad</h3>
            <p className="text-gray-600 mt-2">Embark on a historic journey from Pune to Aurangabad, a city rich in culture, with ancient monuments like the Ajanta and Ellora caves.</p>
          </a>
          <a href="/PuneToKhandala" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Khandala</h3>
            <p className="text-gray-600 mt-2">Enjoy a refreshing drive from Pune to Khandala, a picturesque hill station known for its scenic valleys, lush greenery, and serene ambiance.</p>
          </a>
          <a href="/PuneToPandharpur" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Pandharpur</h3>
            <p className="text-gray-600 mt-2">Embark on a spiritual journey from Pune to Pandharpur, home to the revered Vithoba Temple, a major pilgrimage site for devotees.</p>
          </a>
          <a href="/PuneToBaramati" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Baramati</h3>
            <p className="text-gray-600 mt-2">Take a smooth drive from Pune to Baramati, a city known for its agricultural significance, vibrant culture, and historical landmarks.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Lavasa</h3>
            <p className="text-gray-600 mt-2">Enjoy a scenic drive from Pune to Lavasa, a picturesque hill station known for its stunning lake views, vibrant architecture, and serene atmosphere.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Dapoli</h3>
            <p className="text-gray-600 mt-2">Embark on a relaxing journey from Pune to Dapoli, a coastal town known for its pristine beaches, tranquil environment, and historical forts.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Ganpati Pule</h3>
            <p className="text-gray-600 mt-2">Take a peaceful drive from Pune to Ganpatipule, a coastal town famous for its serene beaches and the revered Ganapati temple.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Ratnagiri</h3>
            <p className="text-gray-600 mt-2">Enjoy a scenic drive from Pune to Ratnagiri, a coastal gem known for its beautiful beaches, historic forts, and delicious Alphonso mangoes.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Islampur</h3>
            <p className="text-gray-600 mt-2">Take a smooth journey from Pune to Islampur, a town known for its agricultural richness, scenic landscapes, and peaceful atmosphere.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Karad</h3>
            <p className="text-gray-600 mt-2">Enjoy a peaceful drive from Pune to Karad, a town known for its beautiful landscapes, historical sites, and the confluence of the Krishna and Koyna rivers.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Chiplun</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic drive from Pune to Chiplun, a charming town nestled between the Western Ghats and the Arabian Sea, known for its lush greenery and tranquil surroundings.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Sangli</h3>
            <p className="text-gray-600 mt-2">Take a pleasant drive from Pune to Sangli, a city known for its rich cultural heritage, famous vineyards, and the historic Sangli Fort.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Miraj</h3>
            <p className="text-gray-600 mt-2">Enjoy a scenic journey from Pune to Miraj, a city known for its historical significance, rich culture, and the famous Miraj Fort.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Hubali</h3>
            <p className="text-gray-600 mt-2">Embark on a journey from Pune to Hubli, a vibrant city in Karnataka known for its rich cultural heritage, thriving markets, and proximity to scenic attractions like the Unkal Lake.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Balgaon</h3>
            <p className="text-gray-600 mt-2">Take a scenic drive from Pune to Belgaum, a city known for its historical landmarks, lush greenery, and the famous Belgaum Fort.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Nippani</h3>
            <p className="text-gray-600 mt-2">Enjoy a drive from Pune to Nippani, a town known for its cultural heritage, vibrant markets, and its proximity to the beautiful hills and forests of Karnataka.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Goa</h3>
            <p className="text-gray-600 mt-2">Set off on a scenic drive from Pune to Goa, where you can enjoy beautiful beaches, vibrant nightlife, and a blend of cultural heritage and natural beauty.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Malvan</h3>
            <p className="text-gray-600 mt-2">Take a picturesque drive from Pune to Malvan, a coastal town known for its pristine beaches, vibrant marine life, and the historic Sindhudurg Fort.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Karwar</h3>
            <p className="text-gray-600 mt-2">Enjoy a scenic journey from Pune to Karwar, a coastal town known for its serene beaches, beautiful landscapes, and rich maritime history.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Hyderabad</h3>
            <p className="text-gray-600 mt-2">Take a journey from Pune to Hyderabad, a vibrant city famed for its historic monuments, delectable cuisine, and a fusion of old-world charm and modernity.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Banglore</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic drive from Pune to Bangalore, a bustling tech hub known for its pleasant climate, lush gardens, and vibrant cultural scene.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Indore</h3>
            <p className="text-gray-600 mt-2">Take a road trip from Pune to Indore, a vibrant city known for its rich history, delectable street food, and a perfect blend of traditional culture and modern life.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Ujjain</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Ujjain, a city renowned for its ancient temples, spiritual heritage, and the famous Kumbh Mela, offering a peaceful and divine experience.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Nagpur</h3>
            <p className="text-gray-600 mt-2">Take a road trip from Pune to Nagpur, a vibrant city known for its rich history, cultural landmarks, and being the 'Orange City' of India.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Amravati</h3>
            <p className="text-gray-600 mt-2">Journey from Pune to Amravati, a city known for its rich agricultural heritage, historical sites, and vibrant cultural traditions.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Dhule</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Dhule, a city known for its historical significance, vibrant culture, and as a key commercial hub in Maharashtra.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Jalgaon</h3>
            <p className="text-gray-600 mt-2">Embark on a journey from Pune to Jalgaon, a city famous for its banana production, historical sites, and the nearby Ajanta Caves, a UNESCO World Heritage site.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Jalna</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Jalna, a city known for its agricultural prosperity, particularly in cotton and grapes, as well as its rich cultural and historical heritage.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Beed</h3>
            <p className="text-gray-600 mt-2">Journey from Pune to Beed, a historic city in Maharashtra, known for its ancient temples, agricultural significance, and vibrant local culture.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Barshi</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Barshi, a town renowned for its historical landmarks, temples, and agricultural significance in the Maharashtra region.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Akkalkot</h3>
            <p className="text-gray-600 mt-2">Embark on a journey from Pune to Akkalkot, a town famous for the revered Shri Swaminarayan Temple and its spiritual significance in Maharashtra.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Tuljapur</h3>
            <p className="text-gray-600 mt-2">Take a trip from Pune to Tuljapur, home to the ancient and sacred Tulja Bhavani Temple, a prominent pilgrimage site in Maharashtra.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Akola</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Akola, a vibrant city in Maharashtra known for its rich history, agricultural importance, and cultural heritage.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Surat</h3>
            <p className="text-gray-600 mt-2">Embark on a journey from Pune to Surat, a bustling city in Gujarat famous for its diamond cutting industry, vibrant textile markets, and rich cultural heritage.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Ahmedabad</h3>
            <p className="text-gray-600 mt-2">Experience a smooth journey from Pune to Ahmedabad, a vibrant city in Gujarat known for its rich history, cultural landmarks, and thriving business hubs.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Vapi</h3>
            <p className="text-gray-600 mt-2">Travel comfortably from Pune to Vapi, a city in Gujarat known for its industrial hubs, scenic surroundings, and proximity to the beautiful beaches of Daman.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Silvasa</h3>
            <p className="text-gray-600 mt-2">Enjoy a scenic drive from Pune to Silvassa, a peaceful destination known for its lush greenery, wildlife sanctuaries, and serene atmosphere.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Tarapur</h3>
            <p className="text-gray-600 mt-2">Embark on a smooth and pleasant journey from Pune to Tarapur, a town known for its vibrant industrial presence and beautiful surroundings.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Baroda</h3>
            <p className="text-gray-600 mt-2">Travel comfortably from Pune to Baroda, experiencing a blend of modernity and tradition in Gujarat's cultural and industrial hub.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Rajkot</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic journey from Pune to Rajkot, where history, culture, and modernity come together in the heart of Gujarat.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Bharuch</h3>
            <p className="text-gray-600 mt-2">Enjoy a comfortable drive from Pune to Bharuch, experiencing both scenic views and the charm of this historic city in Gujarat.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Anand</h3>
            <p className="text-gray-600 mt-2">Embark on a smooth journey from Pune to Anand, a perfect blend of scenic landscapes and cultural richness.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Bhavnagar</h3>
            <p className="text-gray-600 mt-2">Experience a seamless journey from Pune to Bhavnagar, where vibrant culture meets coastal beauty.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Deu</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic journey from Pune to Diu, a peaceful coastal retreat with beautiful beaches and rich history.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Dama</h3>
            <p className="text-gray-600 mt-2">Enjoy a serene drive from Pune to Daman, a charming coastal destination known for its beautiful beaches and historical significance.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Valsad</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic journey from Pune to Valsad, a peaceful city in Gujarat known for its lush greenery and vibrant culture.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Navasari</h3>
            <p className="text-gray-600 mt-2">Experience a smooth ride from Pune to Navsari, a charming city in Gujarat, known for its rich history and beautiful landscapes.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Nadiad</h3>
            <p className="text-gray-600 mt-2">Embark on a scenic journey from Pune to Nadiad, a historic city in Gujarat, known for its temples and vibrant culture.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Dahej</h3>
            <p className="text-gray-600 mt-2">Travel from Pune to Dahej, a thriving industrial town in Gujarat, offering a perfect blend of business and scenic coastal beauty.</p>
          </a>
          <a href="/PuneToSatara" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Pune to Jamnagar</h3>
            <p className="text-gray-600 mt-2">Embark on a journey from Pune to Jamnagar, a city known for its rich history, vibrant culture, and beautiful coastal landscapes.</p>
          </a>
        </div>
      </section>

      {/* Scrolling Car Images */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Our Fleet</h2>
        <div className="flex overflow-x-auto space-x-6 py-8 px-4">
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car5.jpg" // Replace with your image path
              alt="Car 1"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Hatchback</p>
          </div>

          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car1.jpeg" // Replace with your image path
              alt="Car 1"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <br />
            <p className="text-center mt-2 text-gray-600">Sedan</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/suv.jpg" // Replace with your image path
              alt="Car 2"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">SUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/muv.png" // Replace with your image path
              alt="Car 4"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <br />
            <p className="text-center mt-2 text-gray-600">MUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car2.jpg" // Replace with your image path
              alt="Car 3"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Luxury</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-500 text-white py-4 text-center mt-16">
        <p>&copy; 2024 AIMCAB - Your trusted cab service in Pune</p>
      </footer>
    </div>
  );
}
