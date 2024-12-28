import sequelize from "../../../utils/connectDB";
import Visitor from "../../../model/Queries";
import { NextResponse } from "next/server";


export const POST = async(req)=>{
    try {

        const data =await req.json();
        console.log(data);
        const visit = Visitor.create(data);

        return  NextResponse.json({message:"Visited data create successfully", data: visit});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed to store visitor data"});
    }
}

