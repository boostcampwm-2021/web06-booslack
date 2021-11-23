import { Column, OneToMany, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import UserHasWorkspace from './UserHasWorkspace';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  account!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  password!: string;

  @Column({ type: 'tinyint' })
  local!: number;

  @Column('int', { default: 1 })
  theme!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @OneToMany(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.user)
  userHasWorkspaces!: UserHasWorkspace[];
}

export default User;
