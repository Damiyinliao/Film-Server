import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }
  // 获取所有Card
  @Get()
  findAll() {
    return this.cardService.findAll();
  }
  // 获取单个Card信息
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCardDto) {
    return this.cardService.update(id, UpdateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(id);
  }
}
