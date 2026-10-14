function server() { 
    return new Response();
}

Deno.serve(server);
