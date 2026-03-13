// SMS Signup API — commented out until Supabase env vars are configured in Vercel
// To re-enable: uncomment everything below and add NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY to Vercel

// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
//
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );
//
// export async function POST(req: NextRequest) {
//   try {
//     const { phone, source } = await req.json();
//
//     if (!phone) {
//       return NextResponse.json({ error: "Phone required" }, { status: 400 });
//     }
//
//     const { error } = await supabase.from("sms_signups").insert({
//       phone,
//       source: source ?? "website",
//       created_at: new Date().toISOString(),
//     });
//
//     if (error) throw error;
//
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("SMS signup error:", err);
//     return NextResponse.json({ error: "Signup failed" }, { status: 500 });
//   }
// }

export async function POST() {
  return Response.json({ error: "SMS signup not yet available" }, { status: 503 });
}
