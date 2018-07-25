export class Link {
  url: string;
  title: string;
  description: string;
  urlToImage: string;
  urlToFav: string;
  starred: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
