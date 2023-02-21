import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entities/card.entity';

@Module({
  controllers: [CardController],
  providers: [CardService],
  // 使用typeorm将FilmEntity导入，会自动映射到mongodb上
  imports:[TypeOrmModule.forFeature([CardEntity])]
})
export class CardModule {}
