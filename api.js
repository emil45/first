const fetch = require("node-fetch")

TOKEN = ""
APIURL = "https://api-fxpractice.oanda.com/v3/";


class Account {
    constructor(id) {
        this.id = id;
    }

    getOrders() {
        fetch(this.url + "orders", this.authHeader)
        .then( response => response.json())
        .then( otders => console.log(orders))
    }
}

class Client {
    constructor(url) {
        this.url = url;  
        this.authHeader = {headers: {Authorization: `Bearer ${TOKEN}`}};
    }

    async getAccounts() {
        let response = await fetch(this.url + "accounts", this.authHeader);
        let responseJSON = await response.json();
        return responseJSON.accounts.map(account => new Account(account.id))
    };
}

var clinet = new Client(APIURL);

clinet.getAccounts().then(accounts => console.log(accounts));
