// const defaultSource = {
//   writeText(): string {
//     return 'Hello this is my text';
//   }
// };

// function PrintMyText(name: string, randomSource: any) {
//   if (typeof name === 'undefined' || typeof randomSource === 'undefined') {
//     throw new Error('All arguments are required');
//   }

//   return `${randomSource.writeText()} and my name is ${name}`;
// }

// const myTextAndMyAge = PrintMyText('Nikita', defaultSource);
// console.log(myTextAndMyAge);

// .......................................

const defaultSource = {
  writeText(): string {
    return 'Hello this is my default text';
  }
};
interface ISource {
  writeText(): string;
}

function PrintMyText(name: string, randomSource: ISource = defaultSource) {
  if (typeof name === 'undefined' || typeof randomSource === 'undefined') {
    throw new Error('All arguments are required');
  }

  return `${randomSource.writeText()} and my name is ${name}`;
}

const myTextAndMyAge = PrintMyText('Nikita', defaultSource);

const otherTextSource: ISource = {
  writeText: () => {
    return 'Another text';
  }
};
const mySecondTextAndAge = PrintMyText('Nikita Kruhliakou', otherTextSource);

/**
 * if I want to use an object without this field there will be an error for example:
 * const otherTextSource2 = {
 * otherWiteMethod:() =>{
 *  return 5;
 * }
 * }
 * there will be an error
 */
console.log(myTextAndMyAge);
console.log(mySecondTextAndAge);
