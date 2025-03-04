import { Article } from '../../../../../article/core/entities/article.entity';
import { ArticleSelector } from '../interfaces/article-selector.interface';
import * as cheerio from 'cheerio';

export class YCombinatorArticleSelector implements ArticleSelector {
  selectArticles(html: string): Article[] {
    const $ = cheerio.load(html);

    const articles: Article[] = [];
    $('tr.athing').map((_, element) => {
      try {
        const title = $(element).find('a').eq(1).text();
        const url = $(element).find('a').eq(1).attr('href');
        const publicationDate = $(element).next().find('.age').attr('title');

        const article = new Article({
          title,
          url: url ? url : '',
          source: 'YCombinator',
          publicationDate: publicationDate
            ? new Date(publicationDate)
            : new Date(),
        });

        articles.push(article);
      } catch (error) {
        console.warn(error);
      }
    });

    return articles;
  }
}
