import { error } from "console";

export async function POST(request: Request){
    const body = await request.json();
    const {tag, token} = body;

    if(!tag || !token){
        return Response.json({error: "Missing tag or token"}, {status: 400})
    }


}