import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

enum Plan {
  BASIC = 'basic',
  PREMIUM = 'premium',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public code!: string;

  @Column({ type: 'varchar' })
  public access_token: string;

  @Column({ type: 'varchar' })
  public refresh_token: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @UpdateDateColumn({ type: 'enum', enum: Plan, default: Plan.BASIC })
  public plan!: Plan;
}
