export async function POST(req) {
    const { username, password } = await req.json();
  
    const storedUsername = process.env.USERNAME;
    const storedPassword = process.env.PASSWORD;
    
    if (username === storedUsername && password === storedPassword) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }
  }
  