import {
  Column,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import Dm from './Dm';
import Channel from './Channel';
import UserHasWorkspace from './UserHasWorkspace';
import Reply from './Reply';
import File from './File';
import Reaction from './Reaction';

@Entity()
class Thread {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  message!: string;

  @Column({ nullable: true })
  channelId!: number;

  @Column({ nullable: true })
  dmId!: number;

  @Column({ nullable: true })
  userHasWorkspaceId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt!: Date

  @OneToMany(() => Reply, (reply) => reply.thread)
  replys!: Reply[];

  @OneToMany(() => File, (file) => file.thread)
  files!: File[];

  @OneToMany(() => Reaction, (reaction) => reaction.thread)
  reactions!: Reaction[];

  @ManyToOne(() => Channel, (channel) => channel.threads)
  channel!: Channel;

  @ManyToOne(() => Dm, (dm) => dm.threads)
  dm!: Dm;

  @ManyToOne(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.threads)
  userHasWorkspace!: UserHasWorkspace;
}

export default Thread;
