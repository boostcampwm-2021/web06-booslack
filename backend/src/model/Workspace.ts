/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Channel } from './Channel';
import { UserHasWorkspace } from './UserHasWorkspace';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  profile!: string;

  @Column()
  name!: string;

  @OneToMany(() => Channel, (channel) => channel.workspace)
  channels!: Channel[];

  @OneToMany(
    () => UserHasWorkspace,
    (userHasWorkspace) => userHasWorkspace.workspace
  )
  userHasWorkspaces!: UserHasWorkspace[];
}
