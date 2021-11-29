import { Column, ManyToOne, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import Thread from './Thread';
import Reply from './Reply';
import UserHasWorkspace from './UserHasWorkspace';

@Entity()
class Reaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  threadId!: number;

  @Column({ nullable: true })
  emoji!: string;

  @Column({ nullable: true })
  userHasWorkspaceId!: number;

  @Column({ nullable: true })
  replyId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @ManyToOne(() => Thread, (thread) => thread.reactions, { onDelete: 'CASCADE' })
  thread!: Thread;

  @ManyToOne(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.reactions)
  userHasWorkspace!: UserHasWorkspace;

  @ManyToOne(() => Reply, (reply) => reply.reactions, { onDelete: 'CASCADE' })
  reply!: Reply;
}

export default Reaction;
