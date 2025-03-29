function createSnowflakes() {
  const snowflakeCount = 100; 
  const snowflakesContainer = document.body;

  for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 10}s`;
      snowflakesContainer.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;

async function fetchDogImage() {
  document.getElementById('output').innerText = 'Загрузка...';
  try {
      const response = await fetch('https://random.dog/woof.json');
      const data = await response.json();
      if (data.url && (data.url.endsWith('.jpg') || data.url.endsWith('.jpeg') || data.url.endsWith('.png') || data.url.endsWith('.gif'))) {
          document.getElementById('output').innerHTML = `<img src="${data.url}" alt="Dog" width="300">`;
      } else {
          document.getElementById('output').innerText = 'Не удалось загрузить изображение собаки';
      }
  } catch (error) {
      document.getElementById('output').innerText = 'Ошибка загрузки изображения';
      showNotification('error', 'Ошибка загрузки изображения');
  }
}

async function fetchCatImage() {
  document.getElementById('output').innerText = 'Загрузка...';
  try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      document.getElementById('output').innerHTML = `<img src="${data[0].url}" alt="Cat" width="300">`;
  } catch (error) {
      document.getElementById('output').innerText = 'Ошибка загрузки изображения';
      showNotification('error', 'Ошибка загрузки изображения');
  }
}

async function fetchRandomUser() {
  document.getElementById('output').innerText = 'Загрузка данных...';
  try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
      if (user) {
        document.getElementById('output').innerHTML = `
        <h3>Случайный пользователь</h3>
        <div class="user-image-container">
            <img src="${user.picture.large}" alt="User Image">
        </div>
        <p><strong>Имя:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Электронная почта:</strong> ${user.email}</p>
        <p><strong>Город:</strong> ${user.location.city}</p>
    `;
    
      } else {
          document.getElementById('output').innerText = 'Не удалось найти пользователя';
      }
  } catch (error) {
      document.getElementById('output').innerText = 'Ошибка загрузки данных';
      showNotification('error', 'Ошибка загрузки данных');
  }
}

async function createPost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  if (title && body) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({ title, body, userId: 1 }),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      showNotification('success', 'Пост успешно создан!');
      displayPost(data);
  } else {
      showNotification('error', 'Заполните все поля!');
  }
}

async function updatePost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  if (title && body) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'PUT',
          body: JSON.stringify({ title, body, userId: 1 }),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      showNotification('success', 'Пост успешно обновлён!');
      displayPost(data);
  } else {
      showNotification('error', 'Заполните все поля!');
  }
}

async function patchPost() {
  const title = document.getElementById('title').value;
  if (title) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'PATCH',
          body: JSON.stringify({ title }),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      showNotification('success', 'Пост успешно частично обновлён!');
      displayPost(data);
  } else {
      showNotification('error', 'Заполните поле заголовка!');
  }
}

async function deletePost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
  });
  if (response.ok) {
      showNotification('success', 'Пост успешно удалён!');
      document.getElementById('data-output').innerHTML = `<p><strong>Пост был удалён.</strong></p>`;
  } else {
      showNotification('error', 'Не удалось удалить пост.');
  }
}

function displayPost(postData) {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post');
  postContainer.innerHTML = `
      <h3>${postData.title}</h3>
      <p>${postData.body}</p>
  `;
  document.getElementById('data-output').appendChild(postContainer);
}

function showNotification(type, message) {
  const notification = document.getElementById('notification');
  notification.classList.add(type);
  notification.innerText = message;
  notification.style.display = 'block';
  setTimeout(() => {
      notification.style.display = 'none';
      notification.classList.remove(type);
  }, 3000);
}