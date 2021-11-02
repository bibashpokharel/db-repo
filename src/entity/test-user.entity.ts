import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
