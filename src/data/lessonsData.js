const lessonsData = {
  mathematic: {
    lesson: 1,
    name: "Математика",
    title: "Высшая математика",
    url: "mathematic",
    passed: false,
    units: [
      {
        unit: 1,
        isTest: false,
        video: "/videos/test.mp4",
        description: "Введение в математику",
        passed: false
      },
      {
        unit: 2,
        isTest: true,
        video: null,
        description: "Тест по введению в математику",
        passed: false,
        questions: [
          { question: "2 + 2 = ?", options: [3, 4, 5, 2], answer: 4 },
          { question: "2 * 2 = ?", options: [4, 3, 5, 2], answer: 4 },
          { question: "2 - 2 = ?", options: [0, 4, 8, 2], answer: 0 },
          { question: "5 / 5 = ?", options: [0, 1, 2, 5], answer: 1 },
          { question: "Квадрат числа 3 равен?", options: [6, 9, 3, 12], answer: 9 }
        ]
      },
      {
        unit: 3,
        isTest: false,
        video: "",
        description: "Линейная алгебра — основы",
        passed: false
      },
      {
        unit: 4,
        isTest: true,
        video: null,
        description: "Тест по линейной алгебре",
        passed: false,
        questions: [
          { question: "Что такое вектор?", options: ["Число", "Матрица", "Массив чисел", "Уравнение"], answer: "Массив чисел" },
          { question: "Что такое детерминант?", options: ["Число", "Функция", "Матрица", "Вектор"], answer: "Число" },
          { question: "Как обозначается нулевой вектор?", options: ["v₀", "0⃗", "∅", "O"], answer: "0⃗" },
          { question: "Размерность матрицы 2x3 означает:", options: ["2 строки, 3 столбца", "3 строки, 2 столбца", "2 столбца, 3 строки", "Обе квадратные"], answer: "2 строки, 3 столбца" }
        ]
      }
    ]
  },

  programming: {
    lesson: 2,
    name: "Программирование",
    title: "Программирование на языке C++",
    url: "programming",
    passed: false,
    units: [
      {
        unit: 1,
        isTest: false,
        video: "",
        description: "Введение в программирование",
        passed: false
      },
      {
        unit: 2,
        isTest: true,
        video: null,
        description: "Тест по введению в программировании",
        passed: false,
        questions: [
          { question: "Что такое переменная?", options: ["Место в памяти", "Функция", "Цикл", "Условие"], answer: "Место в памяти" },
          { question: "Тип данных хранящий число", options: ["int", "string", "bool", "char"], answer: "int" },
          { question: "Тип данных хранящий текст", options: ["int", "string", "bool", "char"], answer: "string" },
          { question: "Какая команда выводит текст в консоль?", options: ["cout", "cin", "printf", "input"], answer: "cout" },
          { question: "Какой оператор используется для сравнения?", options: ["==", "=", "++", "--"], answer: "==" }
        ]
      },
      {
        unit: 3,
        isTest: false,
        video: "",
        description: "Основы ООП в C++",
        passed: false
      },
      {
        unit: 4,
        isTest: true,
        video: null,
        description: "Тест по ООП",
        passed: false,
        questions: [
          { question: "Что такое класс?", options: ["Тип данных", "Переменная", "Функция", "Цикл"], answer: "Тип данных" },
          { question: "Что такое наследование?", options: ["Передача свойств", "Удаление свойств", "Цикл", "Конструктор"], answer: "Передача свойств" },
          { question: "Какой модификатор доступа делает член доступным только внутри класса?", options: ["private", "public", "protected", "global"], answer: "private" },
          { question: "Что такое инкапсуляция?", options: ["Сокрытие деталей реализации", "Передача свойств", "Создание экземпляров", "Множественное наследование"], answer: "Сокрытие деталей реализации" }
        ]
      }
    ]
  },

  alchemy: {
    lesson: 3,
    name: "Химия",
    title: "Химия реактивных элементов",
    url: "alchemy",
    passed: false,
    units: [
      {
        unit: 1,
        isTest: false,
        video: "",
        description: "Введение в алхимию",
        passed: false
      },
      {
        unit: 2,
        isTest: true,
        video: null,
        description: "Тест по введению в алхимию",
        passed: false,
        questions: [
          { question: "Что такое философский камень?", options: ["Металл", "Камень", "Субстанция", "Эликсир"], answer: "Субстанция" },
          { question: "Какой элемент считается основным в алхимии?", options: ["Золото", "Углерод", "Ртуть", "Свинец"], answer: "Ртуть" },
          { question: "Что означает термин 'трансмутация'?", options: ["Изменение формы", "Изменение вещества", "Изменение цвета", "Изменение температуры"], answer: "Изменение вещества" },
          { question: "Какой металл символизирует солнце?", options: ["Золото", "Серебро", "Медь", "Железо"], answer: "Золото" }
        ]
      }
    ]
  },

  japanese: {
    lesson: 4,
    name: "Японский язык",
    title: "Основы японского языка",
    url: "japanese",
    passed: false,
    units: [
      { unit: 1, isTest: false, video: "", description: "Хирагана и Катакана", passed: false },
      {
        unit: 2,
        isTest: true,
        video: null,
        description: "Тест по азбукам",
        passed: false,
        questions: [
          { question: "Какая азбука используется для заимствованных слов?", options: ["Хирагана", "Катакана", "Кандзи", "Ромадзи"], answer: "Катакана" },
          { question: "Сколько символов в хирагане?", options: ["26", "46", "52", "33"], answer: "46" },
          { question: "Какой символ означает 'а' в хирагане?", options: ["あ", "ア", "か", "さ"], answer: "あ" },
          { question: "Какой символ означает 'ка' в катакане?", options: ["か", "ア", "カ", "サ"], answer: "カ" }
        ]
      },
      { unit: 3, isTest: false, video: "", description: "Основы грамматики", passed: false }
    ]
  },

  english: {
    lesson: 5,
    name: "Английский язык",
    title: "Английский для начинающих",
    url: "english",
    passed: false,
    units: [
      { unit: 1, isTest: false, video: "", description: "Алфавит и произношение", passed: false },
      { unit: 2, isTest: false, video: "", description: "Основы грамматики", passed: false },
      {
        unit: 3,
        isTest: true,
        video: null,
        description: "Тест по грамматике",
        passed: false,
        questions: [
          { question: "He ___ a teacher.", options: ["is", "are", "am", "be"], answer: "is" },
          { question: "I ___ from Japan.", options: ["is", "am", "are", "be"], answer: "am" },
          { question: "They ___ happy.", options: ["is", "are", "am", "be"], answer: "are" },
          { question: "She ___ not here.", options: ["is", "are", "am", "be"], answer: "is" }
        ]
      }
    ]
  },

  history: {
    lesson: 6,
    name: "История",
    title: "Всемирная история",
    url: "history",
    passed: false,
    units: [
      { unit: 1, isTest: false, video: "", description: "Древний мир", passed: false },
      { unit: 2, isTest: false, video: "", description: "Средние века", passed: false },
      {
        unit: 3,
        isTest: true,
        video: null,
        description: "Тест по Древнему миру",
        passed: false,
        questions: [
          { question: "Где возникли первые цивилизации?", options: ["Египет", "Индия", "Месопотамия", "Китай"], answer: "Месопотамия" },
          { question: "Кто построил пирамиды?", options: ["Римляне", "Египтяне", "Греки", "Персы"], answer: "Египтяне" },
          { question: "Как назывался правитель Египта?", options: ["Император", "Фараон", "Король", "Царь"], answer: "Фараон" },
          { question: "Где находился город Вавилон?", options: ["Месопотамия", "Египет", "Персия", "Индия"], answer: "Месопотамия" }
        ]
      }
    ]
  },

  smm: {
    lesson: 7,
    name: "SMM",
    title: "Маркетинг в социальных сетях",
    url: "smm",
    passed: false,
    units: [
      { unit: 1, isTest: false, video: "", description: "Что такое SMM", passed: false },
      { unit: 2, isTest: false, video: "", description: "Создание контент-плана", passed: false },
      {
        unit: 3,
        isTest: true,
        video: null,
        description: "Тест по контент-плану",
        passed: false,
        questions: [
          { question: "Что означает SMM?", options: ["Social Media Marketing", "Sales Management Market", "Social Main Media", "Smart Media Market"], answer: "Social Media Marketing" },
          { question: "Что важно при публикации?", options: ["Контент", "Время", "Аудитория", "Все перечисленное"], answer: "Все перечисленное" },
          { question: "Какой формат контента наиболее вовлекающий?", options: ["Видео", "Фото", "Текст", "Аудио"], answer: "Видео" },
          { question: "Какой инструмент используется для планирования постов?", options: ["Hootsuite", "Excel", "Word", "Zoom"], answer: "Hootsuite" }
        ]
      }
    ]
  }
};

export default lessonsData;
