import { ArticlesController } from './articles.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';

let articleController: ArticlesController;
const dto = {
  name: 'ceva',
  title: 'titlu',
  context: 'context',
  userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
};
const createArticleMock = jest.fn();

describe('ArticleController', function () {
  const mockArticleService = {
    createArticles: createArticleMock.mockResolvedValue({
      id: 'alex are mere',
      ...dto,
    }),
    updateArticle: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
    getArticle: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
    deleteArticle: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
  };
  beforeEach(async function () {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService],
      controllers: [ArticlesController],
    })
      .overrideProvider(ArticlesService)
      .useValue(mockArticleService)
      .compile();
    articleController = (await module).get(ArticlesController);
  });

  it('should be defined', () => {
    expect(articleController).toBeDefined();
  });
  it('should be create a article', async () => {
    expect(await articleController.createArticle(dto)).toEqual({
      id: 'alex are mere',
      ...dto,
    });
    expect(mockArticleService.createArticles).toHaveBeenCalledWith(dto);
  });

  it('should be update article', async () => {
    expect(await articleController.updateArticle(1, dto.name)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.updateArticle).toHaveBeenCalledWith(1, dto.name);
  });

  it('should be get article by id', async () => {
    expect(await articleController.getArticle(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.getArticle).toHaveBeenCalledWith(1);
  });

  it('should be delete article by id', async () => {
    expect(await articleController.deleteArticle(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.deleteArticle).toHaveBeenCalledWith(1);
  });
});
