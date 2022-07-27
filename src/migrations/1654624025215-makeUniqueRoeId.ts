import { MigrationInterface, QueryRunner } from 'typeorm';

export class makeUniqueRoeId1654624025215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                                ALTER TABLE "role" ADD UNIQUE (id)   
                                             `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE role`);
  }
}
