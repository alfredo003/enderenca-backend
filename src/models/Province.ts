import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Municipality } from "./Municipality";

@Entity()
export class Province {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cod: number;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToMany(() => Municipality, municipality => municipality.province)
    municipalities: Municipality[];
}
