import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Province {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    cod: string

}
