export function getResult(value, random) {
  let result;

  if (value === random) {
    result = `Вітаю ви вгадали число (${random})`;
  } else {
    result = `Ви програли комп’ютер загадав (${random})`;
  }

  return result;
}