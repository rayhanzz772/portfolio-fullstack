const express = require('express')
const cors = require('cors')
const path = require('path')
const http = require("http");
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    data: null,
  });
});

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡ Server running on PORT: ${port}`);
});

module.exports = app;