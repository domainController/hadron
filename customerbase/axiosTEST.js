const axios = require('axios');

axios.get(`http://localhost:3000/users/${userid}`).then((res) => res.data);
