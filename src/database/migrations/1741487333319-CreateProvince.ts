import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProvince1741487333319 implements MigrationInterface {
    name = 'CreateProvince1741487333319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'province',
            columns: [
                {
                    name: 'id',
                    type: 'uuid', 
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name:'cod',
                    type:'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },]
                
    }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('province');
    }

}

