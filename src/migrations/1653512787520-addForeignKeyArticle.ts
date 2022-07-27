// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class addForeignKeyArticle1653512787520 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`

//                         ALTER TABLE "article"
//                         ADD CONSTRAINT "fk_artciles_user" FOREIGN KEY (user_id) REFERENCES "users" (id);
//                                          `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP CONSTRAINT fk_artciles_user`);
//   }
// }
