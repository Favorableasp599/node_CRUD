const { peliculas } = require("../database/db");
const { v4: uuid } = require("uuid");

const getpeliculas = (req, res) => {
  return res.json({
    ok: true,
    msg: "peliculas encontradas",
    data: peliculas,
  });
};

const createpelicula = (req, res) => {
  const { title,year,price} = req.body;
  const pelicula = {
    id: uuid(),
    title,
    year,
    price,
  };
  peliculas.push(pelicula);
  return res.json({
    ok: true,
    msg: "Pelicula agredada",
    data: pelicula,
  });
};

const updatepelicula = (req, res) => {
  const { id } = req.params;
  const { title,year,price } = req.body;
  const pelicula = peliculas.find((pelicula) => pelicula.id === id);
  pelicula.title = title;
  pelicula.year = year;
  pelicula.price = price;

  return res.json({
    ok: true,
    msg: "Pelicula actualizada",
    data: pelicula,
  });
};

const deletepelicula = (req, res) => {
  const { id } = req.params;
  const pelicula = peliculas.find((pelicula) => pelicula.id === id);
  peliculas.splice(peliculas.indexOf(pelicula), 1);

  return res.json({
    ok: true,
    msg: "Pelicula eliminada",
    data: pelicula,
  });
};
module.exports={
  getpeliculas,
  createpelicula,
  updatepelicula,
  deletepelicula
}