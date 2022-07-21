class UserController{

    // [GET] /
    index(req, res){
        var a = 1;
        var b = 2;

        var c = a+b;

        res.send('index user controller');
    }

    abc(req, res){
        res.send('url');
    }
}

module.exports = new UserController;