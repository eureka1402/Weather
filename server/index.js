const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/weather", async (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  console.log(req, 'req inside get app')
  const result = await fetch(
    `https://api.weather.yandex.ru/v2/forecast?lat=${latitude}&lon=${longitude}&lang=ru_RU&hours=true`,
    {
      headers: { "X-Yandex-API-Key": "a474de75-376f-442d-86fa-89aa39318830" },
    }
  );
  const data = await result.json();
  console.log(data, 'data inside serer')
  res.json(data);
});

app.post("/new/weather", async (req, res) => {
  console.log(req.body);
  const { latitude, longitude } = req.body;
  const adress = `https://api.weather.yandex.ru/v2/forecast?lat${latitude}&lon=${longitude}&lang=ru_RU&hours=true`;
  console.log(adress);
  const result = await fetch(
    `https://api.weather.yandex.ru/v2/forecast?lat=${latitude}&lon=${longitude}&lang=ru_RU&hours=true`,
   

    {
      headers: { "X-Yandex-API-Key": "a474de75-376f-442d-86fa-89aa39318830" },
    }
  );
  const data = await result.json();
  res.json(data);
});

app.listen(3000, () => console.log("server started"));
