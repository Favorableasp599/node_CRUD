const express = require("express");
require("dotenv").config()
const app = express();


//middleware
app.use(express.json());

// RUTAS
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/movies", require("./routes/movies.routes"));

//SERVER
app.listen(process.env.PORT, () => {
  console.log(` servidor corriendo en puerto: ${process.env.PORT }`);
});
