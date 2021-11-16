/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Channel } from './Channel';
import { UserHasWorkspace } from './UserHasWorkspace';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  time!: Date;

  @Column()
  message!: string;

  @Column()
  channelId!: number;

  @Column()
  userHasWorkspaceId!: number;

  @ManyToOne(() => Channel, (channel) => channel.workspace)
  channel!: Channel;

  @ManyToOne(() => UserHasWorkspace)
  @JoinColumn()
  userHasWorkspace!: UserHasWorkspace;
}
