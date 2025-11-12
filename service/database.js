const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scorePotionsCollection = db.collection('score_potions');
const scoreAstronomyCollection = db.collection('score_astronomy');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function getUser(username) {
  console.log("in getuser")
  console.log()
  return await userCollection.findOne({ 'username' : username });
}

async function getUserByToken(token) {
  console.log("in get user by token")
  console.log(token)
  console.log()
  let mything = await userCollection.findOne({ 'token': token });
  console.log(mything)
  console.log("leaving in get user by token")
  return mything 
  
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ 'username': user.username }, { $set: user });
}

async function addScorePotions(score) {
  console.log("AddScorePotions ...")
  return await scorePotionsCollection.insertOne(score);
}

async function addScoreAstronomy(score) {
    return await scoreAstronomyCollection.insertOne(score);
}

async function getHighScoresPotions() {
  console.log("Get scores potions")
  const query = { 'score': { $gt: 0, $lt: 1100 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = await scorePotionsCollection.find(query, options);
  console.log(cursor.toArray())
  return cursor.toArray();
}

async function getHighScoresAstronomy() {
  const query = { 'score': { $gt: 0, $lt: 1100 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = await scoreAstronomyCollection.find(query, options);
  return cursor.toArray();
}


module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScorePotions,
  addScoreAstronomy,
  getHighScoresPotions,
  getHighScoresAstronomy,
};