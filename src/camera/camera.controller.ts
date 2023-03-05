import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CameraService } from './camera.service';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';

@Controller('camera')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Post()
  create(@Body() createCameraDto: CreateCameraDto) {
    return this.cameraService.addCamera(createCameraDto);
  }

  @Get()
  findAll() {
    return this.cameraService.findAllCameras();
  }

  @Get(':name')
  findOneCamera(@Param('name') name: string) {
    return this.cameraService.findOneCamera(name);
  }

  @Patch(':id')
  update(@Param('id') name: string, @Body() updateCameraDto: UpdateCameraDto) {
    return this.cameraService.addCameraInfo(name, updateCameraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return id;
  }
}
