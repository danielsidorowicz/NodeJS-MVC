import { readFile } from "fs";
import path from "path";

const __dirname = path.resolve();

const router = async (req, res) => {

    switch (req.method) {
        case "GET":
            const pathToIndex = path.join(__dirname, "app", "views", "index.html")
            readFile(pathToIndex, (error, data) => {
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
        case "POST":

            if (req.url == "/add") {
                // odczytaj dane z body
                // użyj odpowiedniej funkcji z controllera
                // odpowiedz do klienta
                let data = await getreqData(req);
                console.log(data);
                controller.add(data)
                res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
                res.end(JSON.stringify({ status: "status", data: "some data" }))
            }
            else if (req.url == "/getall") {
                //  pobierz dane z tablicy zwierząt i odpowiedz do klienta
            }
            else if (req.url == "/delete") {
                //  usuń dane z tablicy zwierząt i odpowiedz do klienta
            }
            else if (req.url == "/update") {
                //  updatuj dane z tablicy zwierząt i odpowiedz do klienta
            }
            // pozostałe funkcje

            break;

    }
}

export default router