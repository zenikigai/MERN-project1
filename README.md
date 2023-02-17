# Fullstack (M.E.R.N) first project

This project is a continuation of my [MERN form](https://github.com/zenikigai/MERNform/blob/main/README.md) project. Adding a home page, simple text animation and many more. This project is intended towards beginners on full stack because I'm also beginner, and this is how i learn it. 

## Technology i use
* [Vite](https://vitejs.dev/) + [ReactJs](https://reactjs.org/)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [NodeJs](https://nodejs.org/en/)
* [nodemon](https://nodemon.io/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [bcryptjs](https://openbase.com/js/bcryptjs/documentation)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### How this works

So this project is actually about user registration, Focus more towards backend. First,  user needs to do a registration. The input will be stored to database based on user model that we define on ```user.js```, If the email already exists, we will response with ```res.status(422).json({error: "Email already exist"}); ``` otherwise create the user using ```try{} catch(){}``` and encrypt the password using hashSync() function, passing the password and bcrypt.genSaltSync() as the argument. After the registration is successful, the user will be redirected to the login page, here we render "Registration successful, now you can login" telling the user that the registration is successful. That text only appears if the user passes the registration, and does not directly go to "/login". on "/login" page we need to find specific email using .findOne() method and passing email as object. the password that user type will be compared to password that we have on our database using "bcrypt.compareSync()" If the login is successful, we will assign token as cookie for the user, and also user will be redirected back to home page. Actually, the are many more to explain, especially the flow between the frontend to backend. But it's your task to learn and figure it out as it is intended for.

### Installation

* Make sure you have [Node](https://nodejs.org/en/) installed on your system,
* Make a new Atlas cluster on [MongoDB](https://www.mongodb.com/), copy your connection string
* Make a ```.env```, inside your .env make a new variable like this ```MONGO_URL='paste your connection string here```
* I suggest you to open 2 terminal session, one for client and second for backend
* Navigate to your first terminal, ```cd client``` and ```npm i``` to install the dependency on client directory, after that done now you can run ```npm run dev``` to see the preview.
* Navigate to your second terminal ```cd server``` and ```npm i``` again to install all dependency for the backend, run ```nodemon index.js``` to start the server.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
