import Cookies from "js-cookie";

class Auth {
    constructor() {
        this.token = "";
        const savedCookie = Cookies.get("api_token");
        if (savedCookie) {
            this.token = savedCookie;
        }
    }

    login(token, callback) {
        this.token = token;
        Cookies.set("api_token", token);
        callback();
    }

    logout(callback) {
        this.token = "";
        Cookies.remove("api_token");
        callback();
    }

    isAuthenticated() {
        return this.token !== "";
    }
};

export default new Auth();