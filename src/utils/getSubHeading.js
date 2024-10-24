export function getSubHeading(numberOfTask) {
  switch (true) {
    case numberOfTask > 4:
      return `${numberOfTask} zadań`;
    case numberOfTask > 1:
      return `${numberOfTask} zadania`;
    case numberOfTask === 1:
      return `1 zadanie`;
    case numberOfTask === 0:
      return `Brak zadań`;
  }
}
