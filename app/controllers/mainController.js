const mainController = {
  home: function (request, response) {
    response.json(`It's alive !`);
  },
};

module.exports = mainController;
