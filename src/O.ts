/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/**
 * class Messanger {
 * name: string;
 * constructor(name: string) {
 * this.name = name;
 * }
 * }
 * const messangers: Array<Messanger> = [new Messanger('VK'), new Messanger('Facebook'), new Messanger('Slack')];
 * function UrlOfMessangers(arr: Array<Messanger>) {
 * arr.forEach((messanger) => {
 * if (messanger.name === 'VK') return 'vk.com';
 * if (messanger.name === 'Facebook') return 'facebook.com';
 * if (messanger.name === 'Slack') return 'slack.com';
 * return '';
 * });
 * }
 * console.log(UrlOfMessangers(messangers));
 */

class Messanger {
  getUrl(): string {
    return '';
  }
}

class Vkk extends Messanger {
  getUrl(): string {
    return 'vk.com';
  }
}

class Facebookk extends Messanger {
  getUrl(): string {
    return 'facebook.com';
  }
}
class Slackk extends Messanger {
  getUrl(): string {
    return 'slack.com';
  }
}

const messangers: Array<Messanger> = [new Vkk(), new Facebookk(), new Slackk()];

function UrlOfMessangers(arr: Array<Messanger>): Array<string> {
  let arrayOfUrl: Array<string> = [];
  arr.forEach((messanger) => {
    arrayOfUrl = [...arrayOfUrl, messanger.getUrl()];
  });
  return arrayOfUrl;
}

console.log(UrlOfMessangers(messangers));
