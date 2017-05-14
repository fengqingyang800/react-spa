
export default class AuthModel {
    isLogin = false;
    name = null;

    constructor(obj) {
        this.isLogin = obj.is_login;
        this.name = obj.user_name;
    }
}