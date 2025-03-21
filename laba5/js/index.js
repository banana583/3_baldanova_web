class Block {
  constructor(content) {
      this.content = content;
  }
  render() {
      return `<div class="block">${this.content}</div>`;
  }
}

class HeaderBlock extends Block {
  render() {
    return `<header>
              <img src="img/logo.png" width="290" height="150">
            </header>`;
  }
}

class MainBlock extends Block {
  render() {
    return `<main>
              ${this.content}
            </main>`;
  }
}

class FooterBlock extends Block {
  render() {
    return `<footer>
              <p>© 2025 Hoyoverse.</p>
            </footer>`;
  }
}

class NameBlock extends Block {
  render() {
      return `<div class="block"><h1 class="blockh1">${this.content}</h1></div>`;
  }
}

class ImageBlock extends Block {
  render() {
      return `<div class="block"><img class="blockimage" src="${this.content}" width="230" height="230"></div>`;
  }
}

class StatsBlock extends Block {
  render() {
      return `<div class="block">
        <h1 class="blockh1">Характеристики</h1>
        <ul class="stats-list">
          <li><strong>Редкость:</strong> ★★★★★</li>
          <li><strong>Элемент:</strong> Пиро</li>
          <li><strong>Оружие:</strong> Двуручный меч</li>
          <li><strong>Регион:</strong> Мондштадт</li>
          <li><strong>Роль в команде:</strong> Главный DPS</li>
          <li><strong>Основной стат на возвышении:</strong> Крит. урон</li>
        </ul>
      </div>`;
  }
}

class TextBlock extends Block {
  render() {
      return `<div class="block"><h1 class="blockh1">Информация</h1><p>${this.content}</p></div>`;
  }
}

class TalentBlock extends Block {
  render() {
      return `<div class="block">
        <h1 class="blockh1">Таланты</h1>
        <div class="i">
          <img src="img/1.webp" width="100" height="100">
         <p>Закаленный меч</p>
          </div>
        <div class="i">
          <img src="img/2.webp" width="100" height="100">
         <p>Огненный натиск</p>
        </div>
        <div class="i">
          <img src="img/3.webp" width="100" height="100">
          <p>Рассвет</p>
        </div>
      </div>`;
  }
}

class ConstellationBlock extends Block {
  render() {
      return `<div class="block">
        <h1 class="blockh1">Созвездия</h1>
        <table>
          <tbody>
            <tr>
              <td><img src="img/s1.webp" width="30" height="30"></td>
              <td>Раскалённая месть</td>
              <td>Увеличивает урон Дилюка против врагов с HP выше 50% на 15%.</td>
            </tr>
            <tr>
              <td><img src="img/s2.webp" width="30" height="30"></td>
              <td>Тлеющий уголёк</td>
              <td>Когда Дилюк получает урон, его сила атаки увеличивается на 10%, а скорость атаки - на 5%. Длится 10 сек. Может складываться до 3 раз и возникнуть раз в 1.5 сек.</td>
            </tr>
            <tr>
              <td><img src="img/s3.webp" width="30" height="30"></td>
              <td>Стальное пламя</td>
              <td>Увеличивает уровень навыка Огненный натиск на 3. Макс. уровень: 15.</td>
            </tr>
            <tr>
              <td><img src="img/s4.webp" width="30" height="30"></td>
              <td>Палящая комета</td>
              <td>Ритмичная активация навыка Огненный натиск увеличивает наносимый им урон. Активация навыка Огненный натиск через 2 сек. после предыдущего удара увеличивает урон следующего удара на 40% в течение 2 сек.</td>
            </tr>
            <tr>
              <td><img src="img/s5.webp" width="30" height="30"></td>
              <td>Феникс, предвестник зари</td>
              <td>Увеличивает уровень навыка Рассвет на 3. Макс. уровень: 15.</td>
            </tr>
            <tr>
              <td><img src="img/s6.webp" width="30" height="30"></td>
              <td>Клинок, освещающий тьму</td>
              <td>Увеличивает скорость атаки и наносимый урон двух следующих в течение 6 сек. после активации навыка Огненный натиск ударов на 30%. Также, навык Огненный натиск больше не прерывает серию обычных атак.</td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}

function renderPage() {
  const mainContent = [
    new NameBlock("Дилюк Рагвиндр"),
    new ImageBlock("img/ava.jpg"),
    new StatsBlock(),
    new TextBlock("Игровой пиро персонаж в Genshin Impact. Дилюк, родившийся в богатой семье Рагнвиндр, в настоящее время является владельцем Винодельни Рассвет и уважаемым дворянином в Мондштате."),
    new TalentBlock(),
    new ConstellationBlock()
  ].map(block => block.render()).join('');

  const blocks = [
    new HeaderBlock(),
    new MainBlock(mainContent),
    new FooterBlock()
  ];

  document.getElementById("content").innerHTML = blocks.map(block => block.render()).join('');
}

window.onload = renderPage;