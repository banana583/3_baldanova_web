//мигающий текст внизу
setInterval(function() {
    const footerText = document.querySelector('footer p');
    footerText.style.color = footerText.style.color === 'orange' ? 'black' : 'orange';
}, 500);

//перенаправление на YouTube при клике на кнопку
const buyButton = document.getElementById('cta-button');
if (buyButton) {
    buyButton.addEventListener('click', function() {
        window.location.href = "https://www.youtube.com/watch?v=KTfyGVI9Yxc";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙";
    toggleButton.className = "theme-toggle-button";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.fontSize = "1.2em";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    function applyDarkMode(enabled) {
        document.body.classList.toggle("dark-mode", enabled);
        toggleButton.textContent = enabled ? "☀️" : "🌙";
        localStorage.setItem("darkMode", enabled);
    }

    toggleButton.addEventListener("click", () => {
        const darkModeEnabled = document.body.classList.toggle("dark-mode");
        applyDarkMode(darkModeEnabled);

    //получаем ссылку на картинку
    var image = document.getElementById("image");

    //меняем картинку в зависимости от текущей темы
    if (document.body.classList.contains("dark-mode")) {
        image.src = "img/temnizhumaisinba.jpeg";  
    } else {
        image.src = "https://ke-images.servicecdn.ru/cfbvd4183tihsuescau0/t_product_540_high.jpg";  
    }
    });

    if (localStorage.getItem("darkMode") === "true") {
        applyDarkMode(true);
    }
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); //предотвращаем перезагрузку страницы при отправке формы
  
    //получаем значения из полей формы
    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('text').value.trim();
    const image = document.getElementById('imageInput').value.trim();  //обновлено на новый id
  
    //валидация данных
    if (name === "" || text === "" || image === "") {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
  
    //добавляем новый отзыв в массив
    reviews.push({ name, text, image });
  
    //очищаем поля формы
    document.getElementById('reviewForm').reset();
  
    //обновляем ленту отзывов
    renderReviews();
  });
  
  //массив с отзывами
  let reviews = [
    {
      name: 'Чан Вонен',
      text: 'Я намазала ЖУМАЙСЫНБА, и мои волосы стали блестящими, как звезды!',
      image: 'https://i.pinimg.com/736x/30/a0/c3/30a0c3fca9ccfeb797574dc704ff8599.jpg'
    },
    {
      name: 'Ли Минхо',
      text: 'Не просто шампунь, а решение всех проблем, включая утреннюю депрессию.',
      image: 'https://i.pinimg.com/originals/13/cf/e7/13cfe77386b39114386234f0080d38e0.jpg'
    },
    {
      name: 'Брюс Уиллис',
      text: 'Волосы не просто чистые, они начинают притягивать взгляды.',
      image: 'https://i.pinimg.com/736x/b2/93/65/b2936553f21f48b0e654819322ac1ce5.jpg'
    }
  ];
  
  //функция для отображения отзывов
  function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; //очищаем контейнер перед перерисовкой
    
    reviews.forEach(review => {
      const reviewElement = document.createElement('article');
      reviewElement.classList.add('review');
      
      reviewElement.innerHTML = `
        <img src="${review.image}" class="review-image" alt="Отзыв">
        <p>"${review.text}"</p>
        <span>– ${review.name}</span>
      `;
      
      reviewsContainer.appendChild(reviewElement);
    });
  }
  
  //изначальная отрисовка отзывов
  renderReviews();