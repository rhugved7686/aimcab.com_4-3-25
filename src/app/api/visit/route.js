import sequelize, { initializeDatabase } from "../../../utils/connectDB";
import Visitor from "../../../model/Queries";
import { NextResponse } from "next/server";


initializeDatabase();


export const POST = async(req)=>{
    try {

        const data =await req.json();
        const visit = Visitor.create(data);
        return  NextResponse.json({message:"Visited data create successfully", data: visit});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed to store visitor data"});
    }
    finally {
        try {
            await sequelize.close();
            console.log('Sequelize connection closed.');
        } catch (error) {
            console.error('Error closing Sequelize connection:', error);
        }
    }
}

