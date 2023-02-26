import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { Simulation } from './schemas/simulation.schema';

@Injectable()
export class SimulationService {
  constructor(@InjectModel(Simulation.name) private simulationModel: Model<Simulation>){}
  // 处理向数据库中添加胶片类型
  async create(createSimulationDto: CreateSimulationDto) {
    let { simulation_id } = createSimulationDto;
    let simulation = await this.simulationModel.findOne({simulation_id});
    if(simulation){
      throw new HttpException('该胶片模拟已存在', HttpStatus.BAD_REQUEST);
    }
    let newSimulation = new this.simulationModel(createSimulationDto);
    return newSimulation.save();
  }

  async findAll(): Promise<Simulation[]> {
    return await this.simulationModel.find().exec();
  }

  async findOne(simulation_id: string): Promise<Simulation> {
    return await this.simulationModel.findOne({simulation_id});
  }

  update(simulation_id: string, updateSimulationDto: UpdateSimulationDto) {
    return `This action updates a simulation`;
  }

  remove(id: string) {
    return `This action removes a simulation`;
  }
}
