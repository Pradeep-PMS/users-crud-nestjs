import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schemas';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private model: Model<Users>) {}
  async create(createUserDto: CreateUserDto) {
    // console.log(createUserDto);
    return await this.model.create(createUserDto);
  }

  async findAll() {
    return await this.model.find({},{},{lean:true});
  }

  async findOne(id: string) {
    const user = await this.model.findById(id,{},{lean:true});
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.model.findByIdAndUpdate(
      new Types.ObjectId(id),
      updateUserDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
