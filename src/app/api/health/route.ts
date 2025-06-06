
export const runtime = "edge"; //entorno de edge

export async function GET() {
    return Response.json({status: "ok"})
}