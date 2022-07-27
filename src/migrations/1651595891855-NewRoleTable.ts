// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class NewRoleTable1651595891855 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
//     await queryRunner.query(`
//                 CREATE TABLE "role" (
//                     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//                     "name" varchar NOT NULL,
//                     "createdAt" timestamp NOT NULL DEFAULT NOW(),
//                     "updatedAt" timestamp NOT NULL DEFAULT NOW()
//                     )`);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE role`);
//   }
// }
