// src/data/lessonsData.js
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
        video: "/videos/testVideo.mp4",
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
          { question: "2 - 2 = ?", options: [0, 4, 8, 2], answer: 0 }
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
        video: "/videos/testVideo.mp4",
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
          { question: "Тип данных хранящий текст", options: ["int", "string", "bool", "char"], answer: "string" }
        ]
      }
    ]
  },
  alchemy: {
    lesson: 3,
    name: "Химия",
    title: "Химия рективных элементов",
    url: "alchemy",
    passed: false,
    units: [
      {
        unit: 1,
        isTest: false,
        video: "/videos/testVideo.mp4",
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
          { question: "Что означает термин 'трансмутация'?", options: ["Изменение формы", "Изменение вещества", "Изменение цвета", "Изменение температуры"], answer: "Изменение вещества" }
        ]
      }
    ]
  }
};

export default lessonsData;
