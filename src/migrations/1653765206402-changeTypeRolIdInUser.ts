// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class changeTypeRolIdInUser1653765206402 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//         ALTER TABLE "user"
//         ALTER COLUMN "rol_id" TYPE VARCHAR
//                                      `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE user`);
//   }
// }
