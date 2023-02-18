import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
