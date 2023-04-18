const { User } = require("../models");
class UserService {
    async registration(email, pass, role, name, fam, otch) {
        const user = await User.create({
            email: email,
            pass: pass,
            role: role,
            name: name,
            fam: fam,
            otch: otch,
        });
        return user;
    }
    async get_user() {
        const user = await User.findAll();
        return user;
    }
}

module.exports = new UserService();
