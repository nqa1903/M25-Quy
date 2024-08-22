import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    //B1 : lấy ra đường dẫn file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");

    //B2 : sử dụng fs để đọc file
    const data = fs.readFileSync(filePath, "utf8");

    //B3 : ép kiểu ừ dạng json sang ts
    const users = JSON.parse(data);

    // trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (error) {}
  return NextResponse.json({ message: "sai rồi ní ơi" });
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //B1 : lấy dữ liệu từ phía client
    const userRequest = await request.json();

    //B2 : lấy ra đường dẫn của file cần ghi
    const filePath = path.join(process.cwd(), "database", "users.json");

    //B3 : đọc file cần ghi vào
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    //B4 : push dữ liệu vào trong mảng
    users.push(userRequest);

    //B5 : ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
    return NextResponse.json({ message: "được rồi nè" });
  } catch (error) {
    return NextResponse.json({ message: "sai rồi ní ơi" });
  }
}
