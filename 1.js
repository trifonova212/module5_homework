let something = +prompt("Введите значение:");
console.log(typeof something);
if ((isNaN(something)) || (typeof something != 'number')) {
  console.log('Упс, кажется, вы ошиблись')
} else if (something % 2 == 0) {
  console.log('Четное значение')
} else {
  console.log('Нечётное значение')
}

