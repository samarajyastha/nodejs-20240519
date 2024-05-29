export default (role) => {
  return (req, res, next) => {
    //authorize user
    if (!req.user.roles.includes(role)) {
      return res.status(403).send("Access Denied");
    }

    next();
  };
};

// 200 => OK, success, 201, 

// 400 => client side error, 401=> unauth, 403=> unauthorized, 404 => not found, 409 => duplicate, 422 => unprocessable entity

// 500 => server side error 
