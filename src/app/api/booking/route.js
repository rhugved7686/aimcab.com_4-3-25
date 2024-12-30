import Trip from "../../../model/Trip"
import sequelize, { initializeDatabase } from "../../../utils/connectDB";
import { NextResponse } from "next/server";

// Ensure the database connection is initialized
initializeDatabase();

export const POST = async (req) => {
    try {
        // Parse the request body and ensure it's a valid JSON payload
        const data = await req.json();  // Use req.json() to parse JSON request body in Next.js API routes
        console.log(data);
        const trip = await Trip.create({...data});
        
        return NextResponse.json({ message: "Trip created successfully", trip }); // Send a JSON response with a success message
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating trip", error: error.message }, { status: 500 });
    }
    finally {
        try {
            await sequelize.close();
            console.log('Sequelize connection closed.');
        } catch (error) {
            console.error('Error closing Sequelize connection:', error);
        }
    }
};


