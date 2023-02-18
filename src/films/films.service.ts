import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmEntity } from './entities/film.entity';

@Injectable()
export class FilmsService {
  // 使用依赖注入将Entity导入到这个service
  constructor(@InjectRepository(FilmEntity)private FilmRepo: Repository<FilmEntity>){}

  async create(createFilmDto: CreateFilmDto) {
    const Film = new FilmEntity();
    Film = createFilmDto;
    return 'This action adds a new film';
  }

  findAll() {
    return `This action returns all films`;
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return `This action updates a #${id} film`;
  }

  remove(id: number) {
    return `This action removes a #${id} film`;
  }
}
