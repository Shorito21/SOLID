/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
// class ProgrammingLanguage {
// }

// class Js extends ProgrammingLanguage {
// }

// class Java extends ProgrammingLanguage {
// }

// function JsYearCount() {
//   console.log('Second year');
// }
// function JavaYearCount() {
//   console.log('First year');
// }

// const language: Array<ProgrammingLanguage> = [new Js(), new Java()];

// function AnimalLegCount(arr: Array<ProgrammingLanguage>) {
//   arr.forEach((a) => {
//     if (typeof a === typeof Js) JsYearCount();
//     if (typeof a === typeof Java) JavaYearCount();
//   });
// }

// AnimalLegCount(language);
// .........................................................................
class ProgrammingLanguage {
  countOfYears() {
    // ...
  }
}

class Js extends ProgrammingLanguage {
  countOfYears() {
    console.log('Second year');
  }
}

class Java extends ProgrammingLanguage {
  countOfYears() {
    console.log('First year');
  }
}

const language: Array<ProgrammingLanguage> = [new Js(), new Java()];

function AnimalLegCount(arr: Array<ProgrammingLanguage>) {
  arr.forEach((a) => {
    a.countOfYears();
  });
}

AnimalLegCount(language);
