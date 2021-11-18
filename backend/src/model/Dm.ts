import {
  Entity, Column,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';
import Thread from './Thread';
import Workspace from './Workspace';

@Entity()
class Dm {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  topic!: string;

  @Column({ nullable: true })
  workspaceId!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @OneToMany(() => Thread, (thread) => thread.dm)
  threads!: Thread[];

  @ManyToOne(() => Workspace, (workspace) => workspace.dms)
  workspace!: Workspace;
}

export default Dm;
