export const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>URL Shortener API</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Inter,Arial,sans-serif;
    background:#0f172a;
    color:#e2e8f0;
    display:flex;
    justify-content:center;
    padding:60px 20px;
}

.container{
    width:100%;
    max-width:900px;
}

.card{
    background:#1e293b;
    border:1px solid #334155;
    border-radius:18px;
    padding:40px;
}

h1{
    font-size:3rem;
    margin-bottom:10px;
}

.subtitle{
    color:#94a3b8;
    margin-bottom:30px;
    line-height:1.7;
}

.section{
    margin-top:35px;
}

.section h2{
    font-size:1.3rem;
    margin-bottom:12px;
}

.endpoint{
    background:#0f172a;
    border:1px solid #334155;
    border-radius:10px;
    padding:14px;
    margin-bottom:10px;
    font-family:monospace;
    overflow-x:auto;
}

.method{
    color:#22c55e;
    font-weight:bold;
    margin-right:10px;
}

.buttons{
    margin-top:35px;
    display:flex;
    gap:15px;
    flex-wrap:wrap;
}

.btn{
    text-decoration:none;
    padding:12px 22px;
    border-radius:8px;
    font-weight:bold;
}

.primary{
    background:#2563eb;
    color:white;
}

.primary:hover{
    background:#1d4ed8;
}

.secondary{
    border:1px solid #475569;
    color:white;
}

.secondary:hover{
    background:#334155;
}

footer{
    margin-top:40px;
    color:#64748b;
    text-align:center;
    font-size:.9rem;
}

code{
    color:#38bdf8;
}
</style>
</head>

<body>

<div class="container">

<div class="card">

<h1>🔗 URL Shortener API</h1>

<p class="subtitle">
A simple REST API for creating and managing shortened URLs.
Built with Node.js, Express, TypeScript and MySQL.
</p>

<div class="section">
<h2>Available Endpoints</h2>

<div class="endpoint">
<span class="method">POST</span>
<code>/api/shorten</code>
</div>

<div class="endpoint">
<span class="method">GET</span>
<code>/:shortCode</code>
</div>

<div class="endpoint">
<span class="method">GET</span>
<code>/api/urls</code>
</div>

</div>

<div class="section">
<h2>Example Request</h2>

<div class="endpoint">
POST /api/shorten

{
    "url":"https://example.com"
}
</div>

</div>

<div class="buttons">

<a class="btn primary"
href="https://github.com/YOUR_USERNAME/url-shortener">
GitHub
</a>

<a class="btn secondary"
href="/api/urls">
View Stored URLs
</a>

</div>

<footer>
Made for learning and portfolio purposes.
</footer>

</div>

</div>

</body>
</html>
`;