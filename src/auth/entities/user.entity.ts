import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import { Todo } from '../../todos/entities/todo.entity.js';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(4, 20)
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(6, 50)
  password: string;
  
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
