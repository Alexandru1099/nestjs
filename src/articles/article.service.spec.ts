import { ModuleRef } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

const dto = {
  name: 'ceva',
  title: 'titlu',
  context: 'context',
  userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
};
const mockArticleService = {
  createArticles: jest.fn().mockResolvedValue({
    id: 'alex are mere',
    ...dto,
  }),
  findOne: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  getArticle: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  save: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  deleteArticle: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
};

describe('ArticleService', function () {
  beforeEach(async function () {
    const module = Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(ArticlesService),
          useValue: {
            createArticle: jest.fn(() => mockArticleService.createArticles),
          },
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    expect(mockArticleService).toBeDefined();
  });

  it('should create a new article', async () => {
    expect(await mockArticleService.createArticles(dto)).toEqual({
      id: 'alex are mere',
      ...dto,
    });
    expect(mockArticleService.createArticles).toHaveBeenCalledWith(dto);
  });

  it('should be get article by id', async () => {
    expect(await mockArticleService.getArticle(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.getArticle).toHaveBeenCalledWith(1);
  });

  it('should be update article', async () => {
    expect(await mockArticleService.save(1, dto.name)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.save).toHaveBeenCalledWith(1, dto.name);
  });

  it('should be delete article by id', async () => {
    expect(await mockArticleService.deleteArticle(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockArticleService.deleteArticle).toHaveBeenCalledWith(1);
  });
});
