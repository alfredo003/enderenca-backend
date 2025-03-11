import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Municipality } from "./Municipality";

@Entity()
export class Commune {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cod: string;
    
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Municipality, municipality => municipality.communes)
    municipality: Municipality;
}
