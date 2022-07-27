// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class makeUniqueUserId1653580194450 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//                             ALTER TABLE "user" ADD UNIQUE (id)
//                                          `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE user`);
//   }
// }
