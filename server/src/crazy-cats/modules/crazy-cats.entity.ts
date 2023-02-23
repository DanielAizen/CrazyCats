import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'profile', schema:'crazy_cats'})
export class CrazyCatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  dob: Date;

  @Column()
  location: string;

  @Column()
  fav_food: string;

  @Column()
  fur_color: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  avatar: string;

  @Column()
  likes: number;
}
