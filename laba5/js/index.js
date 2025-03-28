class Block {
  constructor(content = "") {
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
    return `<main>${this.content}</main>`;
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
  constructor(stats) {
      super();
      this.stats = stats;
  }
  render() {
      return `<div class="block">
        <h1 class="blockh1">Характеристики</h1>
        <ul class="stats-list">
          ${this.stats.map(stat => `<li><strong>${stat.name}:</strong> ${stat.value}</li>`).join('')}
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
  constructor(talents) {
      super();
      this.talents = talents;
  }
  render() {
      return `<div class="block">
        <h1 class="blockh1">Таланты</h1>
        ${this.talents.map(talent => `
          <div class="i">
            <img src="${talent.img}" width="100" height="100">
            <p>${talent.name}</p>
          </div>
        `).join('')}
      </div>`;
  }
}

class ConstellationBlock extends Block {
  constructor(constellations) {
      super();
      this.constellations = constellations;
  }
  render() {
      return `<div class="block">
        <h1 class="blockh1">Созвездия</h1>
        <table>
          <tbody>
            ${this.constellations.map(c => `
              <tr>
                <td><img src="${c.img}" width="30" height="30"></td>
                <td>${c.name}</td>
                <td>${c.description}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  }
}

const statsData = [
  { name: "Редкость", value: "★★★★★" },
  { name: "Элемент", value: "Пиро" },
  { name: "Оружие", value: "Двуручный меч" },
  { name: "Регион", value: "Мондштадт" },
  { name: "Роль в команде", value: "Главный DPS" },
  { name: "Основной стат на возвышении", value: "Крит. урон" }
];

const talentsData = [
  { img: "img/1.webp", name: "Закаленный меч" },
  { img: "img/2.webp", name: "Огненный натиск" },
  { img: "img/3.webp", name: "Рассвет" }
];

const constellationsData = [
  { img: "img/s1.webp", name: "Раскалённая месть", description: "Увеличивает урон против врагов с HP выше 50% на 15%." },
  { img: "img/s2.webp", name: "Тлеющий уголёк", description: "Когда Дилюк получает урон, его сила атаки увеличивается на 10%." },
  { img: "img/s3.webp", name: "Стальное пламя", description: "Увеличивает уровень навыка Огненный натиск на 3." },
  { img: "img/s4.webp", name: "Палящая комета", description: "Ритмичная активация навыка Огненный натиск увеличивает урон." },
  { img: "img/s5.webp", name: "Феникс, предвестник зари", description: "Увеличивает уровень навыка Рассвет на 3." },
  { img: "img/s6.webp", name: "Клинок, освещающий тьму", description: "Увеличивает скорость атаки и урон после активации Огненного натиска." }
];

function renderPage() {
  const mainContent = [
    new NameBlock("Дилюк Рагвиндр"),
    new ImageBlock("img/ava.jpg"),
    new StatsBlock(statsData),
    new TextBlock("Дилюк — персонаж игры Genshin Impact, самый богатый холостяк Мондштадта и Пиро-воин с железной волей."),
    new TalentBlock(talentsData),
    new ConstellationBlock(constellationsData)
  ].map(block => block.render()).join('');

  const blocks = [
    new HeaderBlock(),
    new MainBlock(mainContent),
    new FooterBlock()
  ];

  document.getElementById("content").innerHTML = blocks.map(block => block.render()).join('');
}

window.onload = renderPage;