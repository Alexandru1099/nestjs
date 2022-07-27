// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class foreignKeyUsers1654623866687 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`

//                             ALTER TABLE "users"
//                             ADD CONSTRAINT "fk_users_role" FOREIGN KEY (rol_id) REFERENCES "role" (id);
//                                              `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP CONSTRAINT fk_artciles_user`);
//   }
// }
