/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Workspace } from './Workspace';

@Entity()
export class UserHasWorkspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  profile!: string;

  @Column()
  name!: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.userHasWorkspaces)
  workspace!: Workspace;

  @ManyToOne(() => User, (user) => user.userHasWorkspaces)
  user!: User;
}
