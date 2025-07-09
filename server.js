// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("data/db.json");

// Setup rules
const middlewares = jsonServer.defaults();
app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(jsonServer.bodyParser);
app.use(auth); // ⬅️ Register and Login routes will be available now
app.use(router);

// Run server on port 3001
app.listen(3001, () => {
  console.log("✅ JSON Server with Auth is running on port 3001");
});
