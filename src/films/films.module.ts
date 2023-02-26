import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { Film, FilmSchema } from './schemas/film.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports:[MongooseModule.forFeature([{name: Film.name, schema:FilmSchema}])]
})
export class FilmsModule {}
