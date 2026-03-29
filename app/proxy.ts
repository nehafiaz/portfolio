import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Example: Proxy to a 3rd party analytics or email service
    // const response = await fetch('https://analytics.service.com/v1/event', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // });

    return NextResponse.json({ success: true, message: "Proxied event successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Proxy failed" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
    return NextResponse.json({ status: "Proxy Active", path: req.nextUrl.pathname });
}
