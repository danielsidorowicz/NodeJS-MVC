import { readFile } from "fs";
import path from "path";
import { createServer } from "http";

const __dirname = path.resolve();

const PORT = 3000;


const server = createServer((req, res) => {
    console.log(req.method)

    switch (req.method) {
        case "GET":
            const mypath = path.join(__dirname, "static", "zadanie01.html")
            readFile(mypath, (error, data) => {
                if (error) {
                    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                    res.end();
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.write(data);
                    res.end();
                }
            });
            break;
        case "POST":
            // odbiór posta
            serverResponse(req, res)

            break;
    }
})

function serverResponse(req, res) {
    let body = "";

    req.on("data", (data) => {
        console.log("data: " + data)
        body += data.toString();
    })

    req.on("end", (data) => {
        console.log(body)
        res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });
        res.end(body);
    })
}

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});