import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 100 })
  public email: string;

  @Column({ type: 'varchar', length: 2000 })
  public message: string;

  @Column({ type: 'varchar', length: 100 })
  public fullname: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
}
