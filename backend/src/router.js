const { nanoid } = require('nanoid');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()//utilizando a ferramenta que vai pegar somente as rotas na aplicação

// Definindo o esquema do link encurtado
const esquema = new mongoose.Schema({
    original: String,
    curto: String,
  });
  // Criando o modelo do link encurtado
  const Link = mongoose.model('Link', esquema);

router.post('/encurtar', async (req, res) => {
    const { original } = req.body;
    const curto = nanoid(4); //sequência aleatória de 7 caracteres
  
    try {
      const link = new Link({
        original,
        curto,
      });
  
      await link.save();
      res.json({ curto });
    } catch (error) {
      res.status(500/*erro no server*/).json({ error: 'Ocorreu um erro ao encurtar o link.' });
    }
  });
  
  // rota para redirecionar para o link original
  router.get('/estagiario/:curto', async (req, res) => {
    const { curto } = req.params;
  
    try {
      const link = await Link.findOne({ curto });
  
      if (link) {
        res.redirect(link.original);
      } else {
        res.status(404).json({ error: 'Link não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao redirecionar para o link original.' });
    }
  });


  module.exports = router
