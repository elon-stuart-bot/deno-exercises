function server() { 
    return new Response("<h1>hello world</h1>");
}

Deno.serve(server);
