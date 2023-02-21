import { Module } from '@nestjs/common';
import { SimulationService } from './simulation.service';
import { SimulationController } from './simulation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationEntity } from './entities/simulation.entity';

@Module({
  controllers: [SimulationController],
  providers: [SimulationService],
  imports: [TypeOrmModule.forFeature([SimulationEntity])]
})
export class SimulationModule {}
