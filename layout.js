export default function layout(content) { 
    return `
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <link rel="icon" href="/assets/icon.svg">
        <link rel="stylesheet" href="/assets/styles.css">
    </head>
    <body>
        <header>
            <h1>My Website</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/items">Items</a>
            </nav>
        </header>
        <main>
        ${content}
        </main>
        <footer>
            <p>&copy; the developers</p>
        </footer>
    </body>
</html>
`;
}
