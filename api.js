const fetch = require("node-fetch")

const TOKEN = "";
const API_URL = "https://api-fxpractice.oanda.com/v3/";
const AUTH_HEADER = {headers: {Authorization: `Bearer ${TOKEN}`}};


class Account {
    constructor(id) {
        this.id = id;
        this.accountURL = `${APIURL}/${this.id}/`
    }

    getOrders() {
        fetch(this.url + "orders", this.authHeader)
        .then( response => response.json())
        .then( otders => console.log(orders))
    }

    async summary() {
        let response = await fetch(this.accountURL + "summary", AUTH_HEADER);
        console.log(response);
    }
}

class Client {
    constructor(url) {
        this.clientURL = `${APIURL}`;
    }

    async getAccounts() {
        let response = await fetch(this.clientURL + "accounts", AUTH_HEADER);
        let responseJSON = await response.json();
        return responseJSON.accounts.map(account => new Account(account.id))
    };
}



async function main() {
    var clinet = new Client();
    accounts = await clinet.getAccounts();
    console.log(accounts);
}

main();