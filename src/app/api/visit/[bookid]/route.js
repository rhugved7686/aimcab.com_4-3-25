import Visitor from "../../../../model/Queries";
import { NextResponse } from "next/server";


export const GET = async (req,{params})=>{
    try {
        const {bookid} =await params;
        const data = await Visitor.findOne({where:{bookid}});
        return NextResponse.json({message:"Fetch visitor details successfully", data});
    } catch (error) {
        return NextResponse.json({message:"Fetch visitor details failed", error}, {status: 500});
    }
}