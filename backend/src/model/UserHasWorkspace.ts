import {
  Column,
  ManyToOne,
  OneToMany,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import User from './User';
import Workspace from './Workspace';
import Thread from './Thread';
import Reply from './Reply';
import Reaction from './Reaction';

@Entity()
class UserHasWorkspace {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  nickname!: string;

  @Column({ nullable: true })
  description!: string;

  @Column('int', { default: 1 })
  theme!: number;

  @Column({ nullable: true })
  workspaceId!: number;

  @Column({ nullable: true })
  userId!: number;

  @Column({ nullable: true })
  fileId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @OneToMany(() => Reply, (reply) => reply.userHasWorkspace)
  replys!: Reply[];

  @OneToMany(() => Thread, (thread) => thread.userHasWorkspace)
  threads!: Thread[];

  @OneToMany(() => Reaction, (reaction) => reaction.userHasWorkspace)
  reactions!: Reaction[];

  @ManyToOne(() => Workspace, (workspace) => workspace.userHasWorkspaces)
  workspace!: Workspace;

  @ManyToOne(() => User, (user) => user.userHasWorkspaces)
  user!: User;
}

export default UserHasWorkspace;
