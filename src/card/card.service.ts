import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card, CardDocument } from './schemas/card.schema';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card.name) private cardModel: Model<CardDocument>,
    private readonly userService:UserService
  ){}
  // 新增card
  async create(createCardDto: CreateCardDto): Promise<any> {
    const createCard = new this.cardModel(createCardDto);
    let result1 = createCard.save();
    // 用户创建Card后，将Card的id存储到用户的RecipesId[]中
    let _id = (await result1).id;
    let username = (await result1).username
    let value = {
      dis:'recipe',
      RecipesId:[
        {_id},
      ]
    }
    let result2 = await this.userService.update(username, value);
    let result = Object.assign(result1, result2);
    return result;
  }
  // 查找所有card
  async findAll(): Promise<Card[]>{
    return this.cardModel.find().exec();
  }
  // 查找某一个card
  async findOne(id: string): Promise<Card> {
    return this.cardModel.findOne( {_id:id} );
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
