import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTypeUserIdInArticleUUID1653584680210
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE article
            ALTER COLUMN user_id TYPE uuid USING user_id::uuid;
                                         `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE article`);
  }
}
