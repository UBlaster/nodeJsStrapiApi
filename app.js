const axios = require('./axiosConfig');
const mainSubcategories = require('./subCategories/mainSubcategories');
const categoryLanding = require('./categoryLanding/categoryLanding');
const brandsData = require('./brandsData/brandsData');
const mainCategories = require('./mainCategories/mainCategories');

const FormData = require('form-data');
const path = require('path'); 
const fs = require('fs');
let imagesResponse = [];

async function uploadImages(data) {
  return await axios.post('/upload',data, {
    headers: {
      ...data.getHeaders(),
    }
  })
  .then(response => {
    console.log('Success:', response.data);
    imagesResponse = response.data;
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
    console.log('Error:', error.response.data.error.details);
  });
}

async function takeImagesAndUpload(pathToimages) {
  const formData = new FormData();
  await appendImages(pathToimages, formData);

  try {
    return await uploadImages(formData);
  } catch (error) {
    console.error('Error: takeImagesAndUpload', error.message);
  }
}

function createNewMethod(data, path) {
  return axios.post(path, {data})
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
    console.log('Error:', error.response.data.error.details);
  });
}

function appendImages(dirPath, formData) {
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const pathToFile = path.join(dirPath, file);
      formData.append('files', fs.createReadStream(pathToFile), file);
    } 
  } catch (error) {
    console.error('Error: appendImages', error.message);
  }
}

function fetchModelData(data) {
 return axios.get(`${data}/53`)
  .then(response => {
    console.log('Success:', response.data);
    return response.data.data;
  }).catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
}

function mapCategories(imagesResponse, categoriesData) {
  console.log('mainSubcategories', imagesResponse, mainSubcategories);
  const categoriesDataMapped = categoriesData.map((category, index) => {
    imagesResponse.find(image => {
      const imageName = image.name.split('.')[0];
      if ( imageName === category.image) {
        category.image = image.id;
        return true;
      }

      if ( imageName === category.media) {
        category.media = image.id;
        console.log('category.media', category.media);
        return true;
      }
      return false;
    });
    return category
  });
  console.log('mappedCategories', categoriesData);
  return categoriesDataMapped;
}


async function appRun() {

  // // Загружаем фото подкатегорий/категорий 2 уровня и загружаем их в можель после маппинга
  // await takeImagesAndUpload('./images')
  // .then(() => {
  //   const mappedCategories = mapCategories(imagesResponse, mainSubcategories);
  //   Promise.all(mappedCategories.map(data => createNewMethod(data, '/main-subcategories')));
  // })
  // .catch(error => {
  //   console.error('Error: takeImagesAndUpload', error.message);
  // });

  // // Загружаем фото категорий/категорий 1 уровня и загружаем их в можель после маппинга
  // await takeImagesAndUpload('./mainCategoriesImages')
  // .then(() => {
  //   const mappedCategories = mapCategories(imagesResponse, mainCategories);
  //   Promise.all(mappedCategories.map(data => createNewMethod(data, '/main-categories')));
  // })
  // .catch(error => {
  //   console.error('Error: takeImagesAndUpload', error.message);
  // });

  // // Загружаем фото баннеров категорий и загружаем их в можель после маппинга
  // await takeImagesAndUpload('./banners')
  // .then(() => {
  //   const mappedCategories = mapCategories(imagesResponse, categoryLanding);
  //   Promise.all(mappedCategories.map(data => createNewMethod(data, '/main-category-landing-carousels')));
  // })
  // .catch(error => {
  //   console.error('Error: takeImagesAndUpload', error.message);
  // });

  // // загружаем фото брендов и загружаем их в можель после маппинга
  // await takeImagesAndUpload('./brandsImages')
  // .then(() => {
  //   const mappedCategories = mapCategories(imagesResponse, brandsData);
  //   Promise.all(mappedCategories.map(data => createNewMethod(data, '/brands')));
  // }).catch(error => {
  //   console.error('Error: takeImagesAndUpload', error.message);
  // });
}


appRun()
