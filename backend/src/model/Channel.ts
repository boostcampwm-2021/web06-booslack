/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserHasWorkspace } from './UserHasWorkspace';
import { Workspace } from './Workspace';

export interface IChannel {
  id: number;

  name: string;

  type: string;

  description: string;
}

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.channels)
  workspace!: Workspace;

  @ManyToMany(() => UserHasWorkspace)
  @JoinTable()
  userHasWorkspaces!: UserHasWorkspace[];
}
