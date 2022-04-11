const checkAuthentication = (req, res, next) => {
    // req.isAuthenticated() will return true if user is logged in
    if (req.isAuthenticated()) {
        console.log('Yaaay!!!');
      return next();
    }
    console.log('Nooooo');
    return res.status(401).send({ message: 'User Unauthorized!' });
  };
  
  export default checkAuthentication;
  