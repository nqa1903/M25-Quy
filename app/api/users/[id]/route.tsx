import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function PUT(request:NextRequest, params:{id:string}){
    //B1 : lấy vị trí file cần ghi
    const filePath = path.join(process.cwd() , "database" , "users.json");

    //B2: đọc file
    const users = JSON.parse(fs.readFileSync(filePath,"utf8"));

    //B3 : Tìm kiếm vị rí phần từ cần cập nhật
    const findIndex =users.findIndex((user:any) => user.id === +params.id);
    //B3 : Ghi lại giá trị cho phần tử cần cập nhật
    if(findIndex !== -1){
        users(findIndex).name = "A";
    }
    //B4 : ghi file
    fs.writeFileSync(filePath,JSON.stringify(users),"utf8");
    //B5 : trả về message cho client
    return NextResponse.json("PUT");
}