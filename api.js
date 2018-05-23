const fetch = require("node-fetch")

const TOKEN = "";
const API_URL = "https://api-fxpractice.oanda.com/v3";
const AUTH_HEADER = {headers: {Authorization: `Bearer ${TOKEN}`}};


class Account {
    constructor(id) {
        this.id = id;
        this.accountURL = `${API_URL}/accounts/${this.id}`
    }

    getOrders() {
        fetch(`${this.accountURL}/orders`, AUTH_HEADER)
        .then( response => response.json())
        .then( otders => console.log(orders))
    }

    async summary() {
        let response = await fetch(`${this.accountURL}/summary`, AUTH_HEADER);
        let accountSummary = await response.json();
        console.log(accountSummary);
    }
}

class Client {
    constructor(url) {
        this.clientURL = `${API_URL}`;
    }

    async getAccounts() {
        let response = await fetch(`${this.clientURL}/accounts`, AUTH_HEADER);
        let responseJSON = await response.json();
        return responseJSON.accounts.map(account => new Account(account.id))
    };
}

async function main() {
    var clinet = new Client();
    let accounts = await clinet.getAccounts();
    let accountSummary = await accounts[0].summary();
    console.log(accounts);
    console.log(accountSummary);
}

main();