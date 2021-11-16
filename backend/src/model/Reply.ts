/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Thread } from './Thread';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  time!: Date;

  @Column()
  message!: string;

  @ManyToOne(() => Thread, (thread) => thread.replys)
  thread!: Thread;
}
