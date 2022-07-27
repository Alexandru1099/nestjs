import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTypeRolIdInUUID1653765462472 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                ALTER TABLE "user"
                ALTER COLUMN rol_id TYPE uuid USING rol_id::uuid
                                             `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
