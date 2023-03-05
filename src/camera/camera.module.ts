import { Module } from '@nestjs/common';
import { CameraService } from './camera.service';
import { CameraController } from './camera.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Camera, CameraSchema } from './schemas/camera.card';

@Module({
  controllers: [CameraController],
  providers: [CameraService],
  imports:[MongooseModule.forFeature([{name:Camera.name,schema:CameraSchema}])]
})
export class CameraModule {}
