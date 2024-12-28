import Image from 'next/image';

export default function PuneRoute() {
  // List of cities and routes
  const routes = [
    { "name": "Mumbai to Kolhapur", "description": "A comfortable and scenic journey from Mumbai to Kolhapur, where you can experience the historic Mahalakshmi Temple and explore the rich cultural heritage of the city.", "link": "/City/MumbaiToKolhapur" },
    { "name": "Mumbai to Satara", "description": "A peaceful and scenic drive from Mumbai to Satara, known for its historical forts, temples, and the beautiful Kaas Plateau, a UNESCO World Heritage site.", "link": "/City/MumbaiToSatara" },
    { "name": "Mumbai to Shirdi", "description": "A spiritual journey from Mumbai to Shirdi, home to the revered Sai Baba Temple, offering a serene and peaceful experience for devotees and tourists alike.", "link": "/City/MumbaiToShirdi" },
    { "name": "Mumbai to Mahabaleshwar", "description": "A scenic and refreshing journey from Mumbai to Mahabaleshwar, a beautiful hill station known for its stunning views, lush greenery, and pleasant weather.", "link": "/City/MumbaiToMahabaleshwar" },
    { "name": "Mumbai to Panchgani", "description": "A charming drive from Mumbai to Panchgani, a peaceful hill station surrounded by hills, lush forests, and cool climate, perfect for a relaxing getaway.", "link": "/City/MumbaiToPanchgani" },
    { "name": "Mumbai to Nashik", "description": "A scenic drive from Mumbai to Nashik, known for its vineyards, temples, and historical significance, making it a perfect blend of culture and nature.", "link": "/City/MumbaiToNashik" },
    { "name": "Mumbai to Thane", "description": "A smooth journey from Mumbai to Thane, a bustling city that combines urban convenience with scenic lakes and hills, offering a perfect escape.", "link": "/City/MumbaiToThane" },
    { "name": "Mumbai to Kalyan", "description": "A convenient ride from Mumbai to Kalyan, a city known for its rich history, vibrant markets, and proximity to beautiful temples and landmarks.", "link": "/City/MumbaiToKalyan" },
    { "name": "Mumbai to Ahmednagar", "description": "A comfortable ride from Mumbai to Ahmednagar, a historic city known for its forts, temples, and rich cultural heritage.", "link": "/City/MumbaiToAhmednagar" },
    { "name": "Mumbai to Solapur", "description": "A smooth and scenic ride from Mumbai to Solapur, a city renowned for its historical sites, temples, and vibrant textile industry.", "link": "/City/MumbaiToSolapur" },
    { "name": "Mumbai to Alibaug", "description": "A relaxing ride from Mumbai to Alibaug, a coastal town famous for its beaches, fort, and serene atmosphere.", "link": "/City/MumbaiToAlibaug" },
    { "name": "Mumbai to Lonavala", "description": "A scenic drive from Mumbai to Lonavala, a popular hill station known for its lush green landscapes, valleys, and pleasant weather.", "link": "/City/MumbaiToLonavala" },
    { "name": "Mumbai to Igatpuri", "description": "A serene drive from Mumbai to Igatpuri, a tranquil hill station nestled in the Western Ghats, offering scenic landscapes and a refreshing escape.", "link": "/City/MumbaiToIgatpuri" },
    { "name": "Mumbai to Bhimashankar", "description": "A spiritual journey from Mumbai to Bhimashankar, home to the famous Bhimashankar Temple, set amidst lush forests and tranquil surroundings.", "link": "/City/MumbaiToBhimashankar" },
    { "name": "Mumbai to Aurangabad", "description": "A scenic ride from Mumbai to Aurangabad, known for its historical landmarks, including the Ellora and Ajanta Caves, rich in culture and heritage.", "link": "/City/MumbaiToAurangabad" },
    { "name": "Mumbai to Khandala", "description": "A picturesque journey from Mumbai to Khandala, a popular hill station known for its scenic landscapes, pleasant weather, and beautiful viewpoints.", "link": "/City/MumbaiToKhandala" },
    { "name": "Mumbai to Pandharpur", "description": "Embark on a spiritual journey from Mumbai to Pandharpur, home to the revered Vithoba temple, a pilgrimage destination for devotees seeking blessings.", "link": "/City/MumbaiToPandharpur" },
    { "name": "Mumbai to Baramati", "description": "Travel from Mumbai to Baramati, a town known for its agricultural heritage and the famous Baramati Temple, offering a peaceful and scenic escape.", "link": "/City/MumbaiToBaramati" },
    { "name": "Mumbai to Lavasa", "description": "Embark on a refreshing journey from Mumbai to Lavasa, a picturesque hill station known for its scenic views, tranquil lakes, and beautiful landscapes.", "link": "/City/MumbaiToLavasa" },
    { "name": "Mumbai to Dapoli", "description": "Experience a serene and scenic drive from Mumbai to Dapoli, a coastal town known for its beautiful beaches, lush greenery, and historic forts.", "link": "/City/MumbaiToDapoli" },
    { "name": "Mumbai to Ganpati Pule", "description": "Embark on a peaceful journey from Mumbai to Ganpati Pule, a popular destination known for its beautiful beaches and the famous Ganapati temple.", "link": "/City/MumbaiToGanpatiPule" },
    { "name": "Mumbai to Ratnagiri", "description": "Experience a scenic journey from Mumbai to Ratnagiri, a coastal town known for its beautiful beaches, historical forts, and the famous Ratnagiri mangoes.", "link": "/City/MumbaiToRatnagiri" },
    { "name": "Mumbai to Islampur", "description": "Embark on a peaceful journey from Mumbai to Islampur, a town known for its serene landscapes, temples, and rich cultural heritage.", "link": "/City/MumbaiToIslampur" },
    { "name": "Mumbai to Karad", "description": "Enjoy a scenic and comfortable ride from Mumbai to Karad, a town known for its historic temples and picturesque surroundings.", "link": "/City/MumbaiToKarad" },
    { "name": "Mumbai to Chiplun", "description": "Embark on a beautiful journey from Mumbai to Chiplun, a town nestled between lush greenery and serene rivers, known for its scenic beauty.", "link": "/City/MumbaiToChiplun" },
    { "name": "Mumbai to Sangli", "description": "Travel from Mumbai to Sangli, a city known for its rich history, temples, and vibrant culture, offering a unique blend of tradition and modernity.", "link": "/City/MumbaiToSangli" },
    { "name": "Mumbai to Miraj", "description": "Enjoy a peaceful journey from Mumbai to Miraj, a city known for its historical sites, temples, and vibrant cultural heritage.", "link": "/City/MumbaiToMiraj" },
    { "name": "Mumbai to Hubali", "description": "Experience a scenic and comfortable ride from Mumbai to Hubali, a city known for its rich history, cultural heritage, and vibrant markets.", "link": "/City/MumbaiToHubali" },
    { "name": "Mumbai to Belgaon", "description": "Travel from Mumbai to Belgaon, a city known for its natural beauty, vibrant culture, and historical landmarks.", "link": "/City/MumbaiToBelgaon" },
    { "name": "Mumbai to Nippani", "description": "Embark on a journey from Mumbai to Nippani, a town known for its peaceful atmosphere and proximity to picturesque landscapes.", "link": "/City/MumbaiToNippani" },
    { "name": "Mumbai to Goa", "description": "Enjoy a relaxed ride from Mumbai to Goa, a popular coastal destination renowned for its pristine beaches, vibrant nightlife, and scenic beauty.", "link": "/City/MumbaiToGoa" },
    { "name": "Mumbai to Malvan", "description": "Take a scenic drive from Mumbai to Malvan, a coastal town famous for its beautiful beaches, fresh seafood, and historical forts.", "link": "/City/MumbaiToMalvan" },
    { "name": "Mumbai to Karwar", "description": "Journey from Mumbai to Karwar, a town known for its serene beaches, lush landscapes, and rich cultural heritage.", "link": "/City/MumbaiToKarwar" },
    { "name": "Mumbai to Hyderabad", "description": "Travel comfortably from Mumbai to Hyderabad, a city renowned for its historical monuments, rich culture, and delectable cuisine.", "link": "/City/MumbaiToHyderabad" },
    { "name": "Mumbai to Bangalore", "description": "Experience a smooth and scenic journey from Mumbai to Bangalore, a city known for its technology industry, gardens, and vibrant nightlife.", "link": "/City/MumbaiToBangalore" },
    { "name": "Mumbai to Indore", "description": "Travel from Mumbai to Indore, a city known for its historical landmarks, vibrant culture, and delicious street food.", "link": "/City/MumbaiToIndore" },
    { "name": "Mumbai to Ujjain", "description": "Embark on a spiritual journey from Mumbai to Ujjain, a city famous for its ancient temples and rich religious history.", "link": "/City/MumbaiToUjjain" },
    { "name": "Mumbai to Nagpur", "description": "Enjoy a smooth ride from Mumbai to Nagpur, a city known for its historical significance, vibrant markets, and orange orchards.", "link": "/City/MumbaiToNagpur" },
    { "name": "Mumbai to Amravati", "description": "Take a journey from Mumbai to Amravati, a city known for its rich cultural heritage, historic sites, and proximity to nature.", "link": "/City/MumbaiToAmravati" },
    { "name": "Mumbai to Dhule", "description": "Travel comfortably from Mumbai to Dhule, a city known for its historical landmarks and its connection to the Maratha Empire.", "link": "/City/MumbaiToDhule" },
    { "name": "Mumbai to Jalgaon", "description": "Journey from Mumbai to Jalgaon, a city famous for its mangoes, cotton industry, and scenic landscapes.", "link": "/City/MumbaiToJalgaon" },
    { "name": "Mumbai to Jalna", "description": "Take a smooth ride from Mumbai to Jalna, a city known for its agricultural richness, particularly in sugarcane production.", "link": "/City/MumbaiToJalna" },
    { "name": "Mumbai to Beed", "description": "Travel from Mumbai to Beed, a city rich in history, agriculture, and a great place to experience rural Maharashtra.", "link": "/City/MumbaiToBeed" },
    { "name": "Mumbai to Barshi", "description": "Enjoy a scenic journey from Mumbai to Barshi, a small town known for its religious significance and historical temples.", "link": "/City/MumbaiToBarshi" },
    { "name": "Mumbai to Akkalkot", "description": "Embark on a spiritual journey from Mumbai to Akkalkot, a town renowned for its temple dedicated to Shri Swaminarayan.", "link": "/City/MumbaiToAkkalkot" },
    { "name": "Mumbai to Tuljapur", "description": "Experience a spiritual journey from Mumbai to Tuljapur, a town famous for its historic temple of Goddess Tulja Bhavani.", "link": "/City/MumbaiToTuljapur" },
    { "name": "Mumbai to Akola", "description": "Travel comfortably from Mumbai to Akola, a city known for its agricultural importance and rich history.", "link": "/City/MumbaiToAkola" }

];
return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB Mumbai Routes</h1>
        <p className="mt-2 text-lg">Book your cab and explore Pune with ease</p>
      </header>

      {/* Route Information Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Popular Routes in Pune</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render routes */}
          {routes.map((route, index) => (
            <a
              key={index}
              href={route.link}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-500">{route.name}</h3>
              <p className="text-gray-600 mt-2">{route.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}