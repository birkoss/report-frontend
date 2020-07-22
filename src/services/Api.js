class Api {
    constructor() {
        this.url = "http://localhost:8000/";
        this.token = "";
    }

    setToken(token) {
        this.token = token;
    }

    get(endpoint) {
        return this.query(endpoint, "GET");
    }

    post(endpoint, data) {
        return this.query(endpoint, "POST", data);
    }

    delete(endpoint) {
        return this.query(endpoint, "DELETE");
    }

    query(endpoint, method, data = null) {
        return new Promise((resolve, reject) => {

            let headers = new Headers();
            if (this.token !== "") {
                headers.append("Authorization", "Token " + this.token);
            }
            headers.append("Content-Type", "application/json");
        
            let request = new Request(this.url + endpoint, {
                headers,
                method,
                body: data !== null ? JSON.stringify(data) : null,
            });

            fetch(request)
            .then((response) => response.json())
            .then((jsonResponse) => {
                resolve(jsonResponse);
            })
            .catch((error) => {
                reject(error);
            });

        });
    }
}

export default new Api();