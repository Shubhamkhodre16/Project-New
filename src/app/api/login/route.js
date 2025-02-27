export async function POST(req) {
  console.log("sdsdsdds")
    const { username, password } = await req.json();
    console.log(username,password,"passss");
  
    const storedUsername = process.env.NEXT_PUBLIC_USERNAME;
    const storedPassword = process.env.NEXT_PUBLIC_PASSWORD;
    console.log(storedPassword,storedUsername, "passwordd");
    
    if (username === storedUsername && password === storedPassword) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }
  }
  