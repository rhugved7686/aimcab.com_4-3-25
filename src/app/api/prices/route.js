// import { NextResponse } from "next/server";
// import sequelize, { initializeDatabase } from "../../../utils/connectDB";
// import axios from "axios";

// const google_key = "AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w";


// initializeDatabase();

// export const POST = async (req) => {
//     try {
//         const { tripType, pickup, drop, hours } = await req.json();

//         if (!pickup || !drop || !tripType) {
//             return NextResponse.json({ message: "All fields are mandatory" }, { status: 400 });
//         }

//         const pickup_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(pickup)}&key=${google_key}`;
//         const drop_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(drop)}&key=${google_key}`;

//         try {
//             const pickup_geocode = await axios.get(pickup_url);
//             const drop_geocode = await axios.get(drop_url);

//             // Check for geocode API errors
//             if (pickup_geocode.data.status !== 'OK') {
//                 return NextResponse.json({ message: "Error fetching pickup location data" }, { status: 400 });
//             }
//             if (drop_geocode.data.status !== 'OK') {
//                 return NextResponse.json({ message: "Error fetching drop location data" }, { status: 400 });
//             }

//             const locality1 = pickup_geocode.data.results[0].address_components.find(item => item.types.includes("locality"));
//             const locality2 = drop_geocode.data.results[0].address_components.find(item => item.types.includes("locality"));
//             const optional_locality1 = pickup_geocode.data.results[0].address_components.find(item => item.types.includes("administrative_area_level_3"));
//             const optional_locality2 = drop_geocode.data.results[0].address_components.find(item => item.types.includes("administrative_area_level_3"));

//             const type = tripType === "One Way" ? "oneway_trip" : tripType === "Round" ? "round_trip" : "rental_trip";

//             const fetchDetails = async (tripType, locality1, locality2) => {

//                 if (!locality1 || !locality2 || !locality1.long_name || !locality2.long_name) {
//                     return null;
//                 }

//                 const query = tripType === "Rental"
//                     ? `SELECT * FROM ${type} WHERE city = "${locality1.long_name}" and hours = ${hours}`
//                     : `SELECT * FROM ${type} WHERE destination_city = '${locality2.long_name}' AND source_city = '${locality1.long_name}' LIMIT 1`;

//                 const data = await sequelize.query(query);
//                 console.log(data[0].length > 0);
//                 if (data[0].length > 0) {
//                     return { message: "Data fetched successfully 1", data: data[0][0] };
//                 }

//                 return null;
//             }

//             // console.log(locality1, locality2, optional_locality1, optional_locality2);
//             // const localityCombinations = [
//             //     { locality1, locality2 },
//             //     { locality1, optional_locality2 },
//             //     { optional_locality1, locality2 },
//             //     { optional_locality1, optional_locality2 }
//             //   ];

//             //   for (let { locality1, locality2 } of localityCombinations) {
//             //     console.log(locality1, locality2);
//             //     const result = await fetchDetails(tripType, locality1, locality2);
//             //     if (result) {
//             //       return NextResponse.json(result);
//             //     }
//             //   }

//             // First query
//             const query = tripType === "Rental"
//                 ? `SELECT * FROM ${type} WHERE city = "${locality1.long_name}" and hours = ${hours}`
//                 : `SELECT * FROM ${type} WHERE destination_city = '${locality2.long_name}' AND source_city = '${locality1.long_name}' LIMIT 1`;

//             const data = await sequelize.query(query);
//             if (data[0].length > 0) {
//                 return NextResponse.json({ message: "Data fetched successfully 1", data: data[0][0] });
//             }

//             // Second query
//             const query2 = tripType === "Rental"
//                 ? `SELECT * FROM ${type} WHERE city = "${optional_locality2.long_name}" and hours = ${hours}`
//                 : `SELECT * FROM ${type} WHERE destination_city = '${optional_locality2.long_name}' AND source_city = '${locality1.long_name}' LIMIT 1`;

//             const data2 = await sequelize.query(query2);
//             if (data2[0].length > 0) {
//                 return NextResponse.json({ message: "Data fetched successfully 2", data: data2[0][0] });
//             }

//             // Third query
//             const query3 = `SELECT * FROM ${type} WHERE destination_city = '${locality2.long_name}' AND source_city = '${optional_locality1.long_name}' LIMIT 1`;
//             const data3 = await sequelize.query(query3);
//             if (data3[0].length > 0) {
//                 return NextResponse.json({ message: "Data fetched successfully 3", data: data3[0][0] });
//             }

//             // Fourth query
//             const query4 = `SELECT * FROM ${type} WHERE destination_city = '${optional_locality2.long_name}' AND source_city = '${optional_locality1.long_name}' LIMIT 1`;
//             const data4 = await sequelize.query(query4);
//             if (data4[0].length > 0) {
//                 return NextResponse.json({ message: "Data fetched successfully 4", data: data4[0][0] });
//             }


//             return NextResponse.json({ message: "Failed to fetch data" });

//         } catch (error) {
//             console.error("Error during geocoding or query execution:", error);
//             return NextResponse.json({ message: "Error occurred", error: error.message }, { status: 500 });
//         }

//     } catch (error) {
//         console.error("Error creating trip:", error.message);
//         return NextResponse.json({ message: "Error creating trip", error: error.message }, { status: 500 });
//     } finally {

//         try {
//             await sequelize.close();
//             console.log('Sequelize connection closed.');
//         } catch (error) {
//             console.error('Error closing Sequelize connection:', error);
//         }
//     }
// };


// import { NextResponse } from "next/server"
// import { initializeDatabase, executeQuery } from "../../../utils/connectDB"
// import axios from "axios"

// const google_key = "AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w"

// initializeDatabase()

// const MAX_RETRIES = 3
// const INITIAL_RETRY_DELAY = 500 // 1 second

// async function executeQueryWithRetry(query, params = [], retries = 0) {
//   try {
//     return await executeQuery(query, params)
//   } catch (error) {
//     if (
//       (error.message.includes("max_connections_per_hour") || error.message.includes("Too many connections")) &&
//       retries < MAX_RETRIES
//     ) {
//       const delay = INITIAL_RETRY_DELAY * Math.pow(2, retries)
//       console.log(`Retrying query after ${delay}ms. Attempt ${retries + 1} of ${MAX_RETRIES}`)
//       await new Promise((resolve) => setTimeout(resolve, delay))
//       return executeQueryWithRetry(query, params, retries + 1)
//     }
//     throw error
//   }
// }

// export async function POST(req) {
//   try {
//     const { tripType, pickup, drop, hours } = await req.json()

//     if (!pickup || !drop || !tripType) {
//       return NextResponse.json({ message: "All fields are mandatory" }, { status: 400 })
//     }

//     const pickup_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(pickup)}&key=${google_key}`
//     const drop_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(drop)}&key=${google_key}`

//     try {
//       const [pickup_geocode, drop_geocode] = await Promise.all([axios.get(pickup_url), axios.get(drop_url)])

//       if (pickup_geocode.data.status !== "OK" || drop_geocode.data.status !== "OK") {
//         return NextResponse.json({ message: "Error fetching location data" }, { status: 400 })
//       }

//       const locality1 = pickup_geocode.data.results[0].address_components.find((item) =>
//         item.types.includes("locality"),
//       )
//       const locality2 = drop_geocode.data.results[0].address_components.find((item) => item.types.includes("locality"))
//       const optional_locality1 = pickup_geocode.data.results[0].address_components.find((item) =>
//         item.types.includes("administrative_area_level_3"),
//       )
//       const optional_locality2 = drop_geocode.data.results[0].address_components.find((item) =>
//         item.types.includes("administrative_area_level_3"),
//       )

//       const type = tripType === "One Way" ? "oneway_trip" : tripType === "Round" ? "round_trip" : "rental_trip"

//       const queries = [
//         {
//           query:
//             tripType === "Rental"
//               ? `SELECT * FROM ${type} WHERE city = ? AND hours = ?`
//               : `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
//           params: tripType === "Rental" ? [locality1?.long_name, hours] : [locality2?.long_name, locality1?.long_name],
//         },
//         {
//           query:
//             tripType === "Rental"
//               ? `SELECT * FROM ${type} WHERE city = ? AND hours = ?`
//               : `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
//           params:
//             tripType === "Rental"
//               ? [optional_locality2?.long_name, hours]
//               : [optional_locality2?.long_name, locality1?.long_name],
//         },
//         {
//           query: `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
//           params: [locality2?.long_name, optional_locality1?.long_name],
//         },
//         {
//           query: `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
//           params: [optional_locality2?.long_name, optional_locality1?.long_name],
//         },
//       ]

//       for (let i = 0; i < queries.length; i++) {
//         const { query, params } = queries[i]
//         const data = await executeQueryWithRetry(query, params)
//         if (data.length > 0) {
//           return NextResponse.json({ message: `Data fetched successfully ${i + 1}`, data: data[0] })
//         }
//       }

//       return NextResponse.json({ message: "No matching data found" }, { status: 404 })
//     } catch (error) {
//       console.error("Error during geocoding or query execution:", error)
//       return NextResponse.json({ message: "Error occurred", error: error.message }, { status: 500 })
//     }
//   } catch (error) {
//     console.error("Error processing request:", error.message)
//     return NextResponse.json({ message: "Error processing request", error: error.message }, { status: 500 })
//   }
// }


import { NextResponse } from "next/server"
import { executeQuery } from "../../../utils/connectDB"
import axios from "axios"
import NodeCache from "node-cache"

const google_key = "AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w"
const geocodeCache = new NodeCache({ stdTTL: 3600 }) // Cache geocode results for 1 hour

export async function POST(req) {
  try {
    const { tripType, pickup, drop, hours } = await req.json()

    if (!pickup || !drop || !tripType) {
      return NextResponse.json({ message: "All fields are mandatory" }, { status: 400 })
    }

    const getCachedOrFetchGeocode = async (address, url) => {
      const cachedResult = geocodeCache.get(address)
      if (cachedResult) {
        return cachedResult
      }
      const response = await axios.get(url)
      if (response.data.status === "OK") {
        geocodeCache.set(address, response.data)
      }
      return response.data
    }

    const pickup_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(pickup)}&key=${google_key}`
    const drop_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(drop)}&key=${google_key}`

    try {
      const [pickup_geocode, drop_geocode] = await Promise.all([
        getCachedOrFetchGeocode(pickup, pickup_url),
        getCachedOrFetchGeocode(drop, drop_url),
      ])

      if (pickup_geocode.status !== "OK" || drop_geocode.status !== "OK") {
        return NextResponse.json({ message: "Error fetching location data" }, { status: 400 })
      }

      const locality1 = pickup_geocode.results[0].address_components.find((item) => item.types.includes("locality"))
      const locality2 = drop_geocode.results[0].address_components.find((item) => item.types.includes("locality"))
      const optional_locality1 = pickup_geocode.results[0].address_components.find((item) =>
        item.types.includes("administrative_area_level_3"),
      )
      const optional_locality2 = drop_geocode.results[0].address_components.find((item) =>
        item.types.includes("administrative_area_level_3"),
      )

      const type = tripType === "One Way" ? "oneway_trip" : tripType === "Round" ? "round_trip" : "rental_trip"

      const queries = [
        {
          query:
            tripType === "Rental"
              ? `SELECT * FROM ${type} WHERE city = ? AND hours = ?`
              : `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
          params: tripType === "Rental" ? [locality1?.long_name, hours] : [locality2?.long_name, locality1?.long_name],
        },
        {
          query:
            tripType === "Rental"
              ? `SELECT * FROM ${type} WHERE city = ? AND hours = ?`
              : `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
          params:
            tripType === "Rental"
              ? [optional_locality2?.long_name, hours]
              : [optional_locality2?.long_name, locality1?.long_name],
        },
        {
          query: `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
          params: [locality2?.long_name, optional_locality1?.long_name],
        },
        {
          query: `SELECT * FROM ${type} WHERE destination_city = ? AND source_city = ? LIMIT 1`,
          params: [optional_locality2?.long_name, optional_locality1?.long_name],
        },
      ]

      for (const { query, params } of queries) {
        const data = await executeQuery(query, params)
        if (data.length > 0) {
          return NextResponse.json({ message: "Data fetched successfully", data: data[0] })
        }
      }

      return NextResponse.json({ message: "No matching data found" }, { status: 404 })
    } catch (error) {
      console.error("Error during geocoding or query execution:", error)
      return NextResponse.json({ message: "Error occurred", error: error.message }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing request:", error.message)
    return NextResponse.json({ message: "Error processing request", error: error.message }, { status: 500 })
  }
}


