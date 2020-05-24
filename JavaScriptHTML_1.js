/**
 * Разработать функцию сортировки числовых значений в одномерном массиве.
a) Функция принимает на вход не сортированный массив, и режим сортировки (по возрастанию или по убыванию)
b) возвращает отсортированный массив
*
 */

const sortArray = (arr, mode) => {
  for (let y = 0; y < arr.length; y++) {
    for (let i = y+1; i < arr.length; i++) {
      const temp = arr[y];

      if(mode === "asc") {
        if(arr[i] <= arr[y]) {
          arr[y] = arr[i];
          arr[i] = temp;
        }
      } else if (mode === "desc") {
        if(arr[i] >= arr[y]) {
          arr[y] = arr[i];
          arr[i] = temp;
        }
      } else return;

    }
  }
  return arr;
}
// let sortedArr = [];
// let arr = [7, 9, 5, 3, 1, 2, 3,2,1, -1, -100];
// sortedArr = sortArray(arr, "desc");
// console.log(sortedArr);