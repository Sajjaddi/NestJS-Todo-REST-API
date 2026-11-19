import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TodosService } from './todos.service.js';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';
import { PaginationQueryDto } from './dto/pagination-query.dto.js';
import { AuthGuard } from '../auth/auth.guard.js';

@Controller('todos')
@UseGuards(AuthGuard)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @Req() request: any) {
    return this.todosService.create(createTodoDto, request.user.id);
  }

  @Get()
  findAll(@Req() request: any, @Query() paginationQuery: PaginationQueryDto) {
    return this.todosService.findAll(request.user.id, paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: any) {
    return this.todosService.findOne(+id, request.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
    @Req() request: any,
  ) {
    return this.todosService.update(+id, updateTodoDto, request.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: any) {
    return this.todosService.remove(+id, request.user.id);
  }
}
