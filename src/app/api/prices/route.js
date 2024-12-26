import { NextResponse } from "next/server";
import sequelize from "../../../utils/connectDB";



export const POST =async (req) => {
    try {
        const {tripType, pickup, drop} = await req.json();
        
        const type = tripType == "oneway" ? "oneway_trip" : tripType == "round" ? "round_trip" : "rental_trip";
        const data = await sequelize.query(`Select * from ${type} where destination_city like '%pune%' and source_city like '%amravati%' limit 10`);
        console.log(type);
        return NextResponse.json({ message: "Data fetch successfully", data});
        
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: "Error creating trip", error: error.message }, { status: 500 });
    }
};