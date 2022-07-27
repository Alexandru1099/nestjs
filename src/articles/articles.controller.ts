import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateArticlesDto } from './articles.dto';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

@Controller('article')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get(':id')
  async getArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Get()
  async getAllArticles(): Promise<Article> {
    return this.articleService.getAllArticle();
  }

  @Post()
  async createArticle(@Body() body: CreateArticlesDto): Promise<Article> {
    return this.articleService.createArticles(body);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: number): Promise<void> {
    return this.articleService.deleteArticle(id);
  }

  @Patch(':id/name')
  async updateArticle(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Article> {
    return this.articleService.updateArticle(id, name);
  }
}
