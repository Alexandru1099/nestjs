import { MigrationInterface, QueryRunner } from 'typeorm';

export class foreignKeyMovieCategory1658248085717
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

                        ALTER TABLE "category-movie"
                        ADD CONSTRAINT "fk_category_movies" FOREIGN KEY (article_id) REFERENCES "article" (id);
                                         `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP CONSTRAINT fk_category_movies`);
  }
}
