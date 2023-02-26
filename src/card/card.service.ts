import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card, CardDocument } from './schemas/card.schema';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>){}
  // 新增card
  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createCard = new this.cardModel(createCardDto);
    return createCard.save();
  }
  // 查找所有card
  async findAll(): Promise<Card[]>{
    return this.cardModel.find().exec();
  }
  // 查找某一个card
  async findOne(id: string): Promise<Card> {
    return this.cardModel.findOne( {id} );
  }
  // 更新card
  async update(id: string, updateCardDto: UpdateCardDto): Promise<any>{    
    console.log(id,updateCardDto);
    let result =  this.cardModel.findOneAndUpdate({_id: id}, updateCardDto,{ new: true }).exec();
    return result;    
  }

  async remove(id: string): Promise<any> {
    return this.cardModel.deleteOne({_id: id});
  }
}
