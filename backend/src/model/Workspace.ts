import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import Channel from './Channel';
import UserHasWorkspace from './UserHasWorkspace';
import Dm from './Dm';

@Entity()
class Workspace {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string;

  @Column({ nullable: true })
  code!: string;

  @Column({ nullable: true })
  fileId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @OneToMany(() => UserHasWorkspace, (userHasWorkspace) => userHasWorkspace.workspace)
  userHasWorkspaces!: UserHasWorkspace[];

  @OneToMany(() => Channel, (channel) => channel.workspace)
  channels!: Channel[];

  @OneToMany(() => Dm, (dm) => dm.workspace)
  dms!: Dm[];
}

export default Workspace;
