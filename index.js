import { readFile } from "fs/promises"
import { join } from "path"
import { cwd } from "process"
import { DogFactsModule } from "./Data/DogFactsModule"

export default {
    port: 3000, 
    async fetch(request) {
        //this serves the api
        if(request.url.includes("api")) {
            let module = new DogFactsModule()
            let fact = await module.getFacts()
            return new Response(file, {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            })
        } else {
            //this serves the SPA application to the client
            if(!request.url.includes(".")) {
                let file = await readFile("./app/dist/index.html")
                return new Response(file, {
                    status: 200,
                    headers: {
                        "content-type": "text/html"
                    }
                })
            } else {
                console.log("request url", request.url)
                return new Response("<p>not found</p>", {
                    status: 404,
                    headers: {
                        "content-type": "text/html"
                    }
                })
            }
        }
    }
}