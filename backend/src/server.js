const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors')

const app = express();
app.use(express.json());

app.use(cors());

app.use(router)

// conectando ao banco de dados mongo
mongoose.connect('mongodb+srv://joaonovoestagiario:joaonovoestagiario@api.iapslvw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// rodandoo servidor
app.listen(7777, () => {
  console.log('Servidor rodando na porta 7777');
});
