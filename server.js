const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let mobils = [
    { "id": 1, "brand": "Honda", "model": "Civic", "color": "Yellow" },
    { "id": 2, "brand": "Toyota", "model": "Supra", "color": "Red" },
    { "id": 3, "brand": "Ford", "model": "Mustang", "color": "Blue" },
    { "id": 4, "brand": "Chevrolet", "model": "Camaro", "color": "Black" },
    { "id": 5, "brand": "Nissan", "model": "GTR", "color": "White" },
    { "id": 6, "brand": "BMW", "model": "M3", "color": "Grey" },
    { "id": 7, "brand": "Audi", "model": "R8", "color": "Silver" },
    { "id": 8, "brand": "Mercedes-Benz", "model": "AMG GT", "color": "Green" },
    { "id": 9, "brand": "Porsche", "model": "911", "color": "Orange" },
    { "id": 10, "brand": "Lamborghini", "model": "Aventador", "color": "Purple" },
    { "id": 11, "brand": "Ferrari", "model": "488", "color": "Red" },
    { "id": 12, "brand": "McLaren", "model": "720S", "color": "Yellow" }
  ]  

// Endpoint untuk mendapatkan semua mobil
app.get('/api/mobils', (req, res) => {
  res.json(mobils);
});

// Endpoint untuk mendapatkan mobil berdasarkan ID
app.get('/api/mobils/:id', (req, res) => {
  const mobil = mobils.find(m => m.id === parseInt(req.params.id));
  if (mobil) {
    res.json(mobil);
  } else {
    res.status(404).send('Mobil not found');
  }
});

// Endpoint untuk menambahkan mobil baru
app.post('/api/mobils', (req, res) => {
  const newMobil = {
    id: mobils.length + 1,
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color
  };
  mobils.push(newMobil);
  res.status(201).json(newMobil);
});

// Endpoint untuk memperbarui data mobil
app.put('/api/mobils/:id', (req, res) => {
  const mobil = mobils.find(m => m.id === parseInt(req.params.id));
  if (mobil) {
    mobil.brand = req.body.brand;
    mobil.model = req.body.model;
    mobil.color = req.body.color;
    res.json(mobil);
  } else {
    res.status(404).send('Mobil not found');
  }
});

// Endpoint untuk menghapus mobil
app.delete('/api/mobils/:id', (req, res) => {
  const mobilIndex = mobils.findIndex(m => m.id === parseInt(req.params.id));
  if (mobilIndex !== -1) {
    const deletedMobil = mobils.splice(mobilIndex, 1);
    res.json(deletedMobil);
  } else {
    res.status(404).send('Mobil not found');
  }
});

app.listen(port, () => {
  console.log(`Mobil API listening at http://localhost:${port}`);
});
