import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { ID, SimulationEntity } from './entities/simulation.entity';

@Injectable()
export class SimulationService {
  constructor(@InjectRepository(SimulationEntity) private SimulationRepo: Repository<SimulationEntity>){}
  // 处理向数据库中添加胶片类型
  async create(createSimulationDto: CreateSimulationDto) {

    
    console.log("createSimulation", createSimulationDto);
    
    const Simulation = new SimulationEntity();
    Simulation.simulation_id = createSimulationDto.simulation_id;
    Simulation.sim_cname = createSimulationDto.sim_cname;
    Simulation.sim_ename = createSimulationDto.sim_ename;
    Simulation.sim_img_url = createSimulationDto.sim_img_url;
    Simulation.sim_desc = createSimulationDto.sim_desc;

    let id1 = createSimulationDto.example_card_ids[0].card_id;
    let id2 = createSimulationDto.example_card_ids[1].card_id;
    let id3 = createSimulationDto.example_card_ids[2].card_id;
    let id4 = createSimulationDto.example_card_ids[3].card_id;
    let id5 = createSimulationDto.example_card_ids[4].card_id;
    let id6 = createSimulationDto.example_card_ids[5].card_id;
    
    Simulation.example_card_ids = [
      new ID(id1),
      new ID(id2),
      new ID(id3),
      new ID(id4),
      new ID(id5),
      new ID(id6)
    ]
    
    console.log("Simulation", Simulation);
    
    return await this.SimulationRepo.save(Simulation);
  }

  findAll() {
    return `This action returns all simulation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} simulation`;
  }

  update(id: number, updateSimulationDto: UpdateSimulationDto) {
    return `This action updates a #${id} simulation`;
  }

  remove(id: number) {
    return `This action removes a #${id} simulation`;
  }
}
