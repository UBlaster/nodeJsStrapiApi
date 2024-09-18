const axios = require('axios');

// Создаем экземпляр Axios с базовыми настройками
const axiosInstance = axios.create({
  baseURL: 'https://cms.halykmarket.com/api', // Базовый URL для всех запросов
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 3bd956d070fa9400096bcaa8b55f6af33ba1fe4c05698e0729ca635ad5fed1ccad58801249e40b64b3e26c44274c951604544ff29393a38a8af74fc627f47e3d40e86b63ae901641925575f9de3e287aeeabf95b17284941327d1eab006b1a3444e7d8951b4c7c7b9af2131e1d44ab876487fea4731cd5689a2d0bec08c3a388' 
  }
});

// Экспортируем экземпляр для использования в других файлах
module.exports = axiosInstance;