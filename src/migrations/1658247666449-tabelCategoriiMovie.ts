import { MigrationInterface, QueryRunner } from 'typeorm';

export class tabelCategoriiMovie1658247666449 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                        CREATE TABLE "category-movie" (
                            id uuid DEFAULT uuid_generate_v4() NOT NULL,
                            "article_id" uuid NOT NULL,
                            "createdAt" timestamp NOT NULL DEFAULT NOW(),
                            "updatedAt" timestamp NOT NULL DEFAULT NOW()
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE category-movie`);
  }
}
