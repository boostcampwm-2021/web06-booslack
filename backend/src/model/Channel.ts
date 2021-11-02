/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';
import { Workspace } from './Workspace';

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

  @ManyToMany(() => User)
  @JoinTable()
  users!: User[];
}
