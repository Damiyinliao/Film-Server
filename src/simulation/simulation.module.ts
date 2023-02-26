import { Module } from '@nestjs/common';
import { SimulationService } from './simulation.service';
import { SimulationController } from './simulation.controller';
import { Simulation, SimulationSchema } from './schemas/simulation.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SimulationController],
  providers: [SimulationService],
  imports: [MongooseModule.forFeature([{name: Simulation.name, schema:SimulationSchema}])]
})
export class SimulationModule {}
