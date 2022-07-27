// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class newArticleTabe1653511597293 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                         CREATE TABLE "article" (
//                             id uuid DEFAULT uuid_generate_v4() NOT NULL,
//                             "name" varchar NOT NULL,
//                             "title" varchar NOT NULL,
//                             "context" varchar NOT NULL,
//                             "createdAt" timestamp NOT NULL DEFAULT NOW(),
//                             "updatedAt" timestamp NOT NULL DEFAULT NOW()
//                              )`);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE article`);
//   }
// }
