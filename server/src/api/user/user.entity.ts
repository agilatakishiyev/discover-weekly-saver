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

  @Column({ type: 'enum', enum: Plan, default: null })
  public plan: Plan;

  @Column({ type: 'boolean', default: false })
  public isSubscribed: boolean;
}
