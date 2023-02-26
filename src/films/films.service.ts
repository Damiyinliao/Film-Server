import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './schemas/film.schema';
@Injectable()
export class FilmsService {
  // 使用依赖注入将Entity导入到这个service
  constructor(@InjectModel(Film.name)private filmModel: Model<Film>){}

  async create(createFilmDto: CreateFilmDto): Promise<Film> {
    let { film_id } = createFilmDto;
    let exist = await this.filmModel.findOne({film_id})
    if(exist){
      throw new HttpException('该胶片类型已经存在', HttpStatus.BAD_REQUEST);
    }
    let newFilm = new this.filmModel(createFilmDto);
    return newFilm.save();
  }
  // 查找全部的胶片类型
  async findAll() {
    return await this.filmModel.find();
  }
  // 查找某一种胶片类型
  async findOne(id: string) {
    return await this.filmModel.findOne({where:{film_id:id}});
  }
  // 更新某个胶片类型的信息
  async update(film_id: string, updateFilmDto):Promise<any> {
    return await this.filmModel.updateOne(
      {film_id},
      {film_id:updateFilmDto.film_id}
    )
  }
  // 删除某一个胶片类型
  async remove(film_id: string): Promise<any> {
    return await this.filmModel.deleteOne({film_id})
  }
}
