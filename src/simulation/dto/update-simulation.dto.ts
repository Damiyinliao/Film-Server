import { PartialType } from '@nestjs/swagger';
import { CreateSimulationDto } from './create-simulation.dto';

export class UpdateSimulationDto extends PartialType(CreateSimulationDto) {}
