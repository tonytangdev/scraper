import { Job } from '../../../../../scraping/core/entities/job.entity';
import { Article } from '../../../../../article/core/entities/article.entity';
import { ArticleSelector } from '../interfaces/article-selector.interface';
import * as cheerio from 'cheerio';

export class YCombinatorArticleSelector implements ArticleSelector {
  selectArticles(html: string, jobId: Job['id']): Article[] {
    const $ = cheerio.load(html);

    const articles: Article[] = [];
    $('tr.athing').map((_, element) => {
      try {
        const title = $(element).find('a').eq(1).text();
        const url = $(element).find('a').eq(1).attr('href');
        const publishedAt = $(element)
          .next()
          .find('.age')
          .attr('title')
          ?.split(' ')[0];

        const article = new Article({
          title,
          url: url ? url : '',
          source: 'YCombinator',
          publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
          jobId,
        });

        articles.push(article);
      } catch (error) {
        console.warn(error);
      }
    });

    return articles;
  }
}
