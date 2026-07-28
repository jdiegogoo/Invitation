const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const IGNORE = new Set([
    ".git",
    ".github",
    "scripts",
    "node_modules"
]);

const projects = [];

for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {

    if (!entry.isDirectory()) continue;

    if (IGNORE.has(entry.name)) continue;

    const folder = path.join(ROOT, entry.name);

    if (!fs.existsSync(path.join(folder, "index.html")))
        continue;

    const preview = fs.existsSync(path.join(folder, "preview.webp"))
        ? `${entry.name}/preview.webp`
        : "https://placehold.co/600x400?text=Preview";

    projects.push({

        folder: entry.name,

        title: entry.name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, l => l.toUpperCase()),

        preview

    });

}

projects.sort((a, b) => a.title.localeCompare(b.title));

const cards = projects.map(project => `

<a class="card" href="./${project.folder}/">

    <img
        src="${project.preview}"
        alt="${project.title}"
        loading="lazy">

    <div class="info">

        <h2>${project.title}</h2>

    </div>

</a>

`).join("");

const html = `<!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Mis Mini Proyectos</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

font-family:Arial,Helvetica,sans-serif;

background:#111827;

color:white;

padding:40px;

}

h1{

margin-bottom:35px;

font-size:40px;

}

.grid{

display:grid;

grid-template-columns:repeat(auto-fill,minmax(320px,1fr));

gap:25px;

}

.card{

background:#1f2937;

border-radius:12px;

overflow:hidden;

text-decoration:none;

color:white;

transition:.25s;

box-shadow:0 5px 20px rgba(0,0,0,.2);

}

.card:hover{

transform:translateY(-6px);

box-shadow:0 15px 30px rgba(0,0,0,.4);

}

.card img{

width:100%;

aspect-ratio:16/9;

object-fit:cover;

display:block;

}

.info{

padding:18px;

}

.info h2{

font-size:22px;

}

</style>

</head>

<body>

<h1>🚀 Mis Mini Proyectos</h1>

<div class="grid">

${cards}

</div>

</body>

</html>`;

fs.writeFileSync(path.join(ROOT, "index.html"), html);

console.log(`\n✅ Index generado (${projects.length} proyectos encontrados)`);