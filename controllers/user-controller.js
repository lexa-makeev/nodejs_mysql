const userService = require("../service/user-service");

class UserController {
    async registration(req, res, next) {
        try {
            const { email, pass, role, name, fam, otch } = req.body;
            const userData = await userService.registration(
                email,
                pass,
                role,
                name,
                fam,
                otch
            );
            res.send(userData);
        } catch (error) {
            res.status(500).send("Ошибка при сохранении пользователя");
        }
    }
    async get_user(req, res, next) {
        try {
            const userData = await userService.get_user();
            res.send(userData);
        } catch (error) {
            res.status(500).send("Ошибка");
        }
    }
}
module.exports = new UserController();
