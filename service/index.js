const express = require('express');
const app = express()
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js')


const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

let users = []
let scores_astronomy = []
let scores_potions = []
let authCookieName = 'token';

let apiRouter = express.Router();
app.use('/api',apiRouter);



// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  console.log("api/auth/create backend")
  if (await findUser('username', req.body.username)) {
    console.log("if ...")
    res.status(409).send({ msg: 'Existing user' });
  } else {
    console.log("else...")
    const user = await createUser(req.body.username, req.body.schoolName, req.body.password);
    console.log("out of createuser...")
    setAuthCookie(res, user.token);
    console.log("having set cookies..")
    console.log(authCookieName)
    res.send({ username: user.username });
    console.log()
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      console.log("in login...")
      console.log("having set cookies...")
      console.log(authCookieName)
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  console.log("verifyAuth")
  console.log(user)
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};


// GetScores
apiRouter.get('/astronomyscores', verifyAuth, (_req, res) => {
  res.send(scores_astronomy);
});

apiRouter.get('/potionsscores', verifyAuth, (_req, res) => {
  res.send(scores_potions);
});

// SubmitScore
apiRouter.post('/astronomyscore', verifyAuth, (req, res) => {
  scores_astronomy = updateScoresAstronomy(req.body);
  res.send(scores_astronomy);
});

apiRouter.post('/potionsscore', verifyAuth, (req, res) => {
  scores_potions = updateScoresPotions(req.body);
  res.send(scores_potions);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});



// updateScores considers a new score for inclusion in the high scores.
async function updateScoresAstronomy(newScore) {
  await DB.addScoreAstronomy(newScore);
  return await DB.getHighScoresAstronomy();
  }

async function updateScoresPotions(newScore) {
  await DB.addScorePotions(newScore);
  return await DB.getHighScoresPotions();

}

async function createUser(username, school, password) {
  console.log("In create user")
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    school: school,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  console.log("findUser")
  console.log(value)
  console.log(!value)
  console.log()
  if (!value) {
    console.log("finduser - !value if statement")
    return null;
  }
  if (field === 'token') {
    let mything = await DB.getUserByToken(value);
    console.log(mything)
    return mything
  }
  let mything = await DB.getUser(value);
  console.log(mything)
  return mything
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


