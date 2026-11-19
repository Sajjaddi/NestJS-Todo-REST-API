import { Module } from '@nestjs/common';
import { TodosService } from './todos.service.js';
import { TodosController } from './todos.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), AuthModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
