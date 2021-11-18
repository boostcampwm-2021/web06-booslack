import { Entity, Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import Reaction from './Reaction';

@Entity()
class Emotion {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ nullable: true })
  url!: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @OneToOne(() => Reaction, (reaction) => reaction.emotion)
  reaction!: Reaction
}

export default Emotion;
