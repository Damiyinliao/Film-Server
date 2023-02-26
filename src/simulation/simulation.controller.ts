import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SimulationService } from './simulation.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';

@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}
  // 添加胶片类型
  @Post()
  create(@Body() createSimulationDto: CreateSimulationDto) {
    return this.simulationService.create(createSimulationDto);
  }

  @Get()
  findAll() {
    return this.simulationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simulationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSimulationDto: UpdateSimulationDto) {
    return this.simulationService.update(id, updateSimulationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simulationService.remove(id);
  }
}
