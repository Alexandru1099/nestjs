// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class addGenderAgeFields1653160778462 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                             ALTER TABLE "users"
//                             ADD COLUMN "gender" VARCHAR  NOT NULL
//                          `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE user`);
//   }
// }
