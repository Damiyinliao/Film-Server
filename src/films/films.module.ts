import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmEntity } from './entities/film.entity';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  // 使用typeorm将FilmEntity导入
  imports:[TypeOrmModule.forFeature([FilmEntity])]
})
export class FilmsModule {}
