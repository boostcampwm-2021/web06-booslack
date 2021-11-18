import {
  Column,
  ManyToOne,
  Entity,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import UserHasWorkspace from './UserHasWorkspace';
import Thread from './Thread';
import Reaction from './Reaction';
import File from './File';

@Entity()
class Reply {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  message!: string;

  @Column({ nullable: true })
  threadId!: number;

  @Column({ nullable: true })
  userHasWorkspaceId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt!: Date

  @OneToMany(() => Reaction, (reaction) => reaction.reply)
  reactions!: Reaction[];

  @OneToMany(() => File, (file) => file.reply)
  files!: File[];

  @ManyToOne(() => Thread, (thread) => thread.replys)
  thread!: Thread;

  @ManyToOne(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.replys)
  userHasWorkspace!: UserHasWorkspace;
}

export default Reply;
