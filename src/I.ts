/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
// .........................................
// interface IRequest {
//   HttpRequest(): void;
//   XmlRequest(): void;
//   DominoRequest(): void;
// }

// class Http implements IRequest {
//   HttpRequest() {
//     // ...
//   }

//   XmlRequest() {
//     // ...
//   }

//   DominoRequest() {
//     // ...
//   }
// }

// class Xml implements IRequest {
//   HttpRequest() {
//     // ...
//   }

//   XmlRequest() {
//     // ...
//   }

//   DominoRequest() {
//     // ...
//   }
// }

// class Domino implements IRequest {
//   HttpRequest() {
//     // ...
//   }

//   XmlRequest() {
//     // ...
//   }

//   DominoRequest() {
//     // ...
//   }
// }
// const http = new Http();
// http.HttpRequest();
// const xml = new Xml();
// xml.XmlRequest();
// const domino = new Domino();
// domino.DominoRequest();
// ...............................
interface IHttp {
  HttpRequest(): void;
}

interface IXml {
  XmlRequest(): void;
}

interface IDomino {
  DominoRequest(): void;
}

interface ICatsomRequest {
  CastomRequest(): void;
}

class Http implements IHttp {
  HttpRequest() {
    // ...
  }
}

class Xml implements IXml {
  XmlRequest() {
    // ...
  }
}

class Domino implements IDomino {
  DominoRequest() {
    // ...
  }
}
class CastomRequest implements ICatsomRequest {
  CastomRequest() {
    // ...
  }
}
const http = new Http();
http.HttpRequest();
const xml = new Xml();
xml.XmlRequest();
const domino = new Domino();
domino.DominoRequest();
const castom = new CastomRequest();
castom.CastomRequest();
