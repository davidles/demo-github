const mainController = {
    homeRender: function(req, res, next) {
        res.render('index', { title: 'Express' });
      }
}

module.exports = mainController;