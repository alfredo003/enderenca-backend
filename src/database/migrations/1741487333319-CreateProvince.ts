import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProvince1741487333319 implements MigrationInterface {
    name = 'CreateProvince1741487333319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'provinces',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name:'cod',
                    type:'varchar',
                    isUnique:true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],      
    })
);
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('provinces');
    }

}

