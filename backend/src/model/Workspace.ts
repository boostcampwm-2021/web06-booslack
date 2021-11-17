/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Channel } from './Channel';
import { UserHasWorkspace } from './UserHasWorkspace';

export interface IWorkspace {
  id: number;

  profile: string;

  name: string;
}

@Entity()
export class Workspace implements IWorkspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  profile!: string;

  @Column()
  name!: string;

  @Column()
  code!: string;

  @OneToMany(() => Channel, (channel) => channel.workspace)
  channels!: Channel[];

  @OneToMany(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.workspace)
  userHasWorkspaces!: UserHasWorkspace[];
}
