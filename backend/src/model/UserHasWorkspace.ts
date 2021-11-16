/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Workspace } from './Workspace';
import { Thread } from './Thread';

export interface IUserHasWorkspace {
  id: number;

  profile: string;

  name: string;
}

@Entity()
export class UserHasWorkspace implements IUserHasWorkspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  profile!: string;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  workspaceId!: number;

  @Column({ nullable: true })
  userId!: number;

  @ManyToOne(
    () => Workspace,
    (workspace) => workspace.userHasWorkspaces,
    { cascade: ['insert', 'update', 'remove'] },
  )
  workspace!: Workspace;

  @ManyToOne(
    () => User,
    (user) => user.userHasWorkspaces,
    { cascade: ['insert', 'update', 'remove'] },
  )
  user!: User;

  @OneToMany(() => Thread, (thread) => thread.userHasWorkspace)
  threads!: Thread[];
}
