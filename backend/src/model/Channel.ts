import {
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import Thread from './Thread';
import UserHasWorkspace from './UserHasWorkspace';
import Workspace from './Workspace';

@Entity()
class Channel {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  topic!: string;

  @Column({ type: 'tinyint' })
  private!: number;

  @Column({ nullable: true })
  workspaceId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @OneToMany(() => Thread, (thread) => thread.channel)
  threads!: Thread[];

  @ManyToOne(() => Workspace, (workspace) => workspace.channels)
  workspace!: Workspace;

  @ManyToMany(() => UserHasWorkspace)
  @JoinTable({
    name: 'user_has_workspace_channel',
  })
  userHasWorkspaces!: UserHasWorkspace[];
}

export default Channel;
