import Trip from "../../../model/Trip"
import { initializeDatabase } from "../../../utils/connectDB";
import { NextResponse } from "next/server";

// Ensure the database connection is initialized
initializeDatabase();

export const POST = async (req) => {
    try {
        // Parse the request body and ensure it's a valid JSON payload
        const data = await req.json();  // Use req.json() to parse JSON request body in Next.js API routes

        // Assuming `Trip` is a Sequelize model, you can save the data to the database here
        // Example: await Trip.create(data);

        return NextResponse.json({ message: "Trip created successfully", data }); // Send a JSON response with a success message
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating trip", error: error.message }, { status: 500 });
    }
};

export const GET = () => {
    return NextResponse.json({ message: "Hello World" });  // Return a JSON response
};
