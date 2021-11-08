/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Workspace } from './Workspace';

export interface IUserHasWorkspace {
  id: number;

  profile: string;

  name: string;
}

@Entity()
export class UserHasWorkspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  profile!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  workspaceId!: number;

  @Column({ nullable: true })
  userId!: number;

  @ManyToOne(() => Workspace, (workspace) => workspace.userHasWorkspaces)
  workspace!: Workspace;

  @ManyToOne(() => User, (user) => user.userHasWorkspaces)
  user!: User;
}
