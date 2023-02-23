import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    let { film_id } = createFilmDto;
    let exist = await this.FilmRepo.findOne({where: {film_id}})
    if(exist){
      throw new HttpException('该胶片类型已经存在', HttpStatus.BAD_REQUEST);
    }
  //   const Film = new FilmEntity();
  //   Film.film_id = createFilmDto.film_id;
  //   Film.film_name = createFilmDto.film_name;
  //   Film.film_ename = createFilmDto.film_ename;
  //   Film.film_type = createFilmDto.film_type;
  //   Film.film_icon = createFilmDto.film_icon;
  //   Film.film_brand = createFilmDto.film_brand;
  //   Film.film_iso = createFilmDto.film_iso;
  //   Film.film_country = createFilmDto.film_country;
  //   Film.film_formats = createFilmDto.film_formats;
  //   Film.film_process = createFilmDto.film_process;
  //   Film.film_grain = createFilmDto.film_grain;
  //   Film.film_contrast = createFilmDto.film_contrast;
  //   Film.film_color_tone = createFilmDto.film_color_tone;
  //   Film.film_use_case = createFilmDto.film_use_case;
  //   Film.film_desc = createFilmDto.film_desc;
    let newFilm = this.FilmRepo.create(createFilmDto);
    return await this.FilmRepo.save(newFilm);
  }
  // 查找全部的胶片类型
  async findAll() {
    return await this.FilmRepo.find();
  }
  // 查找某一种胶片类型
  async findOne(id: string) {
    return await this.FilmRepo.findOne({where:{film_id:id}});
  }
  // 更新某个胶片类型的信息
  async update(id: string, updateFilmDto) {
    return await this.FilmRepo.update(
      {film_id:id},
      {film_id:updateFilmDto.film_id}
    )
  }
  // 删除某一个胶片类型
  async remove(id: string) {
    return await this.FilmRepo.delete({film_id:id})
  }
}
