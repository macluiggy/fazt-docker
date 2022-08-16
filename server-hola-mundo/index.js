//@ts-check
import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();
const router = express.Router();

mongoose.connect(
  "mongodb://luiggy:password@monguito:27017/miapp?authSource=admin"
);

app.get("/", async (req, res) => {
  console.log("listando... chanchitos...");
  const animales = await Animal.find();
  return res.send(animales);
});

app.get("/crear", async (req, res) => {
  console.log("creando...");
  const animal = new Animal({
    tipo: "Chanchito",
    estado: "Feliz",
  });
  await animal.save();
  return res.send(animal);
});

app.get("/test", async (req, res) => {
  console.log("probando...");
  return res.send('probando');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", port);
});

// export default app
// para conectarse a un contenedor docker de mongo
// docker create -p27017:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=luiggy -e MONGO_INITDB_ROOT_PASSWORD=password -e MONGO_INITDB_DATABASE=animales -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -e MONGO_INITDB_DATABASE=animales -d mongo
