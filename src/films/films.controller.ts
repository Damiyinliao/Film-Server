import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}
  // 添加某一种胶片类型
  @Post()
  create(@Body() createFilmDto) {
    // 如果请求的数据为空就不进行相关操作
    if(createFilmDto.film_id == null) return {msg:'请求为空，不执行操作'};
    // 将前台传过来的post请求中的film_id转换为int类型
    createFilmDto.film_iso = parseInt(createFilmDto.film_iso);
    return this.filmsService.create(createFilmDto);
  }
  // 获取所有胶片类型数据
  @Get()
  findAll() {
    return this.filmsService.findAll();
  }
  // 获取某一个胶片类型数据
  @Get(':id')
  findOne(@Param('id') id: string) {    
    return this.filmsService.findOne(id);
  }
  // 更新某一个胶片类型数据
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto:UpdateFilmDto) {
    return this.filmsService.update(id, updateFilmDto);
  }
  // 删除某一种胶片类型
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}
