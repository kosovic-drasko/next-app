import { NextRequest, NextResponse } from "next/server";

// interface Props{
//     params:{id:number}
// }
export function GET
    (request: NextRequest,
        { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json
            ({ eror: 'Korisnika nema' })
    return NextResponse.json({ id: 1, name: 'Mosh' })



}


