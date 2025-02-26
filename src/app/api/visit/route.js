import { sequelize, initializeDatabase } from "../../../utils/connectDB"
import Visitor from "../../../model/Queries"
import { NextResponse } from "next/server"

initializeDatabase()

export const POST = async (req) => {
  try {
    const data = await req.json()
    const visit = await Visitor.create(data)
    return NextResponse.json({ message: "Visited data created successfully", data: visit })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Failed to store visitor data" }, { status: 500 })
  } finally {
    try {
      await sequelize.close()
      console.log("Sequelize connection closed.")
    } catch (error) {
      console.error("Error closing Sequelize connection:", error)
    }
  }
}

