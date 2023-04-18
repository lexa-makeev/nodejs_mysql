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
}

module.exports = new UserService();
