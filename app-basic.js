// Example with very basic authentication
const app = require("express")();
const basicAuth = require("express-basic-auth");
app.use(
  basicAuth({
    users: { admin: "supersecret" },
    // Example using environment variables instead:
    // users: { [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD },
    challenge: true,
  })
);
app.use("/", (req, res) => {
  res.send("Success");
});
app.listen(3000, () => {
  console.log(`Ouvrez http://localhost:3000`);
});
