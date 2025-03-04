import { Job } from 'src/scraping/core/entities/job.entity';
import { BBCArticleSelector } from '../article-selectors/bbc.article-selector';
import { YCombinatorArticleSelector } from '../article-selectors/ycombinator.article-selector';
import { ArticleSelector } from '../interfaces/article-selector.interface';

export class SelectArticlesStrategy {
  private articleSelector: ArticleSelector;

  constructor(url: string) {
    if (url.includes('ycombinator')) {
      this.articleSelector = new YCombinatorArticleSelector();
    } else if (url.includes('bbc')) {
      this.articleSelector = new BBCArticleSelector();
    }

    if (!this.articleSelector) {
      throw new Error('The URL is not supported');
    }
  }

  selectArticles(html: string, jobId: Job['id']) {
    return this.articleSelector.selectArticles(html, jobId);
  }
}
