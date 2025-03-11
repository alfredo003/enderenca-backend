import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Province } from "./Province";
import { Commune } from "./Commune";

@Entity()
export class Municipality {

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
    
    @ManyToOne(() => Province, province => province.municipalities)
    province: Province;

    @OneToMany(() => Commune, commune => commune.municipality)
    communes: Commune[];
}

