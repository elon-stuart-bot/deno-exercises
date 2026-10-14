function server() { 
    return new Response("hello world");
}

Deno.serve(server);
