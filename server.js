const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Эндпоинт для активации устройства
app.post('/api/device/activate', (req, res) => {
  const { device_code } = req.body;

  if (!device_code) {
    return res.status(400).json({ message: 'Device code is required!' });
  }

  console.log(`Device activated with code: ${device_code}`);

  // Ответ для устройства
  res.status(200).json({
    message: 'Device activated successfully!',
    device_code,
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
