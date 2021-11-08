/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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

  @ManyToOne(() => Channel, (channel) => channel.workspace)
  channel!: Channel;

  @OneToOne(() => UserHasWorkspace)
  @JoinColumn()
  userHasWorkspace!: UserHasWorkspace;
}
