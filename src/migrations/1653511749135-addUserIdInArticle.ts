// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class addUserIdInArticle1653511749135 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                                     ALTER TABLE "article" 
//                                     ADD COLUMN "user_id" INT NOT NULL
//                                  `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE article`);
//   }
// }
