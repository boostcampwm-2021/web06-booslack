/* eslint-disable import/prefer-default-export */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Thread } from './Thread';
import { User } from './User';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  time!: Date;

  @Column()
  message!: string;

  @ManyToOne(() => Thread, (thread) => thread.channel)
  thread!: Thread;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
