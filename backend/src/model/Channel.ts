/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable, OneToMany,
} from 'typeorm';
import { Thread } from '@daos/Thread';
import { UserHasWorkspace } from './UserHasWorkspace';
import { Workspace } from './Workspace';

export interface IChannel {
  id: number;

  name: string;

  type: string;

  description: string;
}

@Entity()
export class Channel implements IChannel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @Column()
  topic!: string;

  @Column()
  createdBy!: string;

  @Column({ nullable: true })
  workspaceId!: number;

  @OneToMany(() => Thread, (thread) => thread.channel)
  threads!: Thread[];

  @ManyToOne(() => Workspace, (workspace) => workspace.channels)
  workspace!: Workspace;

  @ManyToMany(() => UserHasWorkspace)
  @JoinTable()
  userHasWorkspaces!: UserHasWorkspace[];
}
