// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class addRolIdInUser1653512128474 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                                         ALTER TABLE "user"
//                                         ADD COLUMN "rol_id" INT
//                                      `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE article`);
//   }
// }
