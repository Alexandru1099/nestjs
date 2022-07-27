// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class addAgeColumn1653161143872 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                                 ALTER TABLE "user"
//                                 ADD COLUMN "age" VARCHAR SET NOT NULL
//                              `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE user`);
//   }
// }
