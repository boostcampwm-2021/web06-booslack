import {
  Column,
  ManyToOne,
  Entity,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import Thread from './Thread';
import Reply from './Reply';
import Emotion from './Emotion';
import UserHasWorkspace from './UserHasWorkspace';

@Entity()
class Reaction {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: true })
  threadId!: number;

  @Column({ nullable: true })
  emotionId!: number;

  @Column({ nullable: true })
  userHasWorkspaceId!: number;

  @Column({ nullable: true })
  replyId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt!: Date

  @OneToOne(() => Emotion, (emotion) => emotion.reaction)
  emotion!: Emotion

  @ManyToOne(() => Thread, (thread) => thread.reactions)
  thread!: Thread;

  @ManyToOne(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.reactions)
  userHasWorkspace!: UserHasWorkspace;

  @ManyToOne(() => Reply, (reply) => reply.reactions)
  reply!: Reply;
}

export default Reaction;
