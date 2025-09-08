const express = require('express');
const cors = require('cors');
const proxyRoutes = require('./routes/proxy');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(require('cors')());
app.use(express.json());


app.use('/proxy', require('./routes/proxy'));

app.listen(PORT, () => {
    console.log(`CORS Proxy server is running on http://localhost:${PORT}`);
});