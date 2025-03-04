export abstract class Scrapper {
  abstract fetchArticles(url: string): Promise<void>; // TODO: should return an array of articles
}
