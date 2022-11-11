export class DogFactsModule {
    constructor() {
        this.url = "https://dog-api.kinduff.com/api/facts"
    }
    
    async getFacts() {
        return await fetch(this.url).then(resp => resp.json())
    }
}