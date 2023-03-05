import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';
import { Camera, CameraDocument } from './schemas/camera.card';

@Injectable()
export class CameraService {
  constructor(@InjectModel(Camera.name) private readonly cameraModel: Model<CameraDocument>) { }
  // 添加相机
  addCamera(createCameraDto: CreateCameraDto) {
    const createCamera = new this.cameraModel(createCameraDto);
    return createCamera.save();
  }
  //查询当前所有相机数据
  async findAllCameras() {
    return await this.cameraModel.find().exec();
  }
  // 查找某一个相机信息
  async findOneCamera(name: string) {

    return await this.cameraModel.findOne({ full_name: name });
  }
  // 添加相机的相关信息
  async addCameraInfo(name: string, updateCameraDto: UpdateCameraDto) {
    
    return await this.cameraModel.findOneAndUpdate(
      { full_name: name },
      { $push: { intro_card_id: updateCameraDto.intro_card_id } },
      { new: true, useFindAndModify: false }
    )
  }
}
