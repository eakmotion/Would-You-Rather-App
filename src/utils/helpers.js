export function getNumberWithOrdinal(number) {
  const suffixes = [ 'th', 'st', 'nd', 'rd' ];
  let value = number % 100;

  return number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

export function getTotalScore(questions, answers) {
  return questions.length + Object.keys(answers).length;
}
