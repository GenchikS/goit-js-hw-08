const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

// console.log(basicLightbox);  //  перевірка підключення бібліотеки
  
  const gallery = document.querySelector (`.gallery`);

  gallery.insertAdjacentHTML('beforeend',createGalleryPhoto(images));  //  виклик ф-цшї об'єкту images та додвання елементів до gallery
  gallery.addEventListener(`click`, clickGetPhoto);


 function createGalleryPhoto(arr) {
    return arr.map(
      ({preview, original, description}) => 
    `<li class="gallery-item">
            <a class="gallery-link" href="${original}">
              <img
                class="gallery-image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
          `).join(``)
};

function clickGetPhoto(event) {

  // console.log(`event`, event)  //  на якому event сталася подія
  // console.log(`eventTarget`, event.target)  //  елемент img в li class="gallery-item"

  const sourcePhoto = event.target; //  делегування. Звернення до дітей батька, занурення
  // console.log(`sourcePhoto`, sourcePhoto) //  перевірка занурення
  const sourcePhotoAll = sourcePhoto.dataset.source;  //  звернення до посилання data-source="${original}" в елементі sourcePhoto
  // console.log(`sourcePhotoAll`, sourcePhotoAll);  //  перевірка посилання

  // console.log(`currentTarget`, event.currentTarget);  //  звернення до батька при клікі на будь-яке фото
  
  //  перевірка на нажаття між єлементами (на батька) на варіант 1
  //   if (event.target === event.target.classList.contains(`gallery`)) {  //  перевірка на нажаття між єлементами (на батька)
  //     return  //  при true перериваємо і нічого не повертаємо
  //   }

  // перевірка на нажаття між єлементами (на батька) на варіант 2 (метод .closest())
  const parent = event.target.closest(`.gallery-item`);  //  звернення при клікі на будь-яку вкладеність дітей до батька
  // console.log(`parent`, parent);  //  перевірка звернення

  const instance = basicLightbox.create(`
     <div class="modal-img">
     <img src="${sourcePhotoAll}" width="1112" height="640">
     </div>
  `);

  instance.show();  //  виклик бібліотеки show
  event.preventDefault();  //  заборона дій браузера на загрузку фото на ПК
  
  const clickclose = document.querySelector(`.modal-img`)  //  звернення до модального вікна
  // console.log(`clickclose`, clickclose);  //  перевірка модельного вікна

  clickclose.addEventListener(`click`, clickclosePhoto);

  function clickclosePhoto() {
      instance.close();   //  закривання модального вікна
  }
}


