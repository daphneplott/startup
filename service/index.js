const express = require('express');
const app = express()
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');


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
  if (await findUser('username', req.body.uersname)) {
    console.log("if ...")
    res.status(409).send({ msg: 'Existing user' });
  } else {
    console.log("else...")
    const user = await createUser(req.body.username, req.body.schoolName, req.body.password);
    console.log("out of createuser...")
    setAuthCookie(res, user.token);
    console.log("having set cookies..")
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
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// HEY YOU!!! YES, YOU!!! THESE NEXT FEW THINGS MIGHT BREAK... I DON'T KNOW

// GetScores
apiRouter.get('/astronomyscores', verifyAuth, (_req, res) => {
  res.send(scores_astronomy);
});

apiRouter.get('/potionsscores', verifyAuth, (_req, res) => {
  res.send(scores_potions);
});

// SubmitScore
apiRouter.post('/astronomyscore', verifyAuth, (req, res) => {
  scores = updateScoresAstronomy(req.body);
  res.send(scores_astronomy);
});

apiRouter.post('/potionsscore', verifyAuth, (req, res) => {
  scores = updateScoresPotions(req.body);
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
function updateScoresAstronomy(newScore) {
  let found = false;
  for (const [i, prevScore] of scores_astronomy.entries()) {
    if (newScore.score > prevScore.score) {
      scores_astronomy.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores_astronomy.push(newScore);
  }

  if (scores_astronomy.length > 10) {
    scores_astronomy.length = 10;
  }

  return scores_astronomy;
}

function updateScoresPotions(newScore) {
  let found = false;
  for (const [i, prevScore] of scores_potions.entries()) {
    if (newScore.score > prevScore.score) {
      scores_potions.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores_potions.push(newScore);
  }

  if (scores_potions.length > 10) {
    scores_potions.length = 10;
  }

  return scores_potions;
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
  users.push(user);
  console.log(users)

  return user;
}

async function findUser(field, value) {
  console.log("in FindUser...")
  if (!value) return null;
  console.log("finduser else ...")
  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  console.log("in setAuthCookie")
  console.log(res.cookie)
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
  console.log("done with func res.cookie")
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


