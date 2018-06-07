exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Lec 4',
    message: 'hello world',
  });
};
