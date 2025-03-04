export class Url {
  private readonly url: string;

  constructor(url: string) {
    const isValid = this.validateUrl(url);
    if (!isValid) {
      throw new Error('Invalid URL');
    }

    this.url = url;
  }

  private validateUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  getUrl(): string {
    return this.url;
  }
}
