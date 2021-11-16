/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne, OneToMany,
} from 'typeorm';
import { Channel } from './Channel';
import { UserHasWorkspace } from './UserHasWorkspace';
import { Reply } from './Reply';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'date' })
  time!: Date;

  @Column()
  message!: string;

  @Column({ nullable: true })
  channelId!: number;

  @Column({ nullable: true })
  userHasWorkspaceId!: number;

  @ManyToOne(() => Channel, (channel) => channel.threads)
  channel!: Channel;

  @ManyToOne(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.threads)
  userHasWorkspace!: UserHasWorkspace;

  @OneToMany(() => Reply, (reply) => reply.thread)
  replys!: Reply[];
}
