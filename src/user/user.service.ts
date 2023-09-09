import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from './schemas/user.schema';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: mongoose.Model<Profile>,
  ) {}

  async create(profile: Profile, user: User): Promise<Profile> {
    const findProfile = await this.profileModel.findOne({ user: user._id });

    if (findProfile) {
      throw new BadRequestException('Profile already exists.');
    }

    const data = Object.assign(profile, { user: user._id });

    const res = await this.profileModel.create(data);
    return res;
  }

  async get(user: User): Promise<Profile> {
    const profile = await this.profileModel.findOne({ user: user._id });

    if (!profile) {
      throw new NotFoundException('Profile not found.');
    }

    return profile;
  }

  async updateById(profile: Profile, user: User): Promise<Profile> {
    return await this.profileModel.findOneAndUpdate(
      {
        user: user._id,
      },
      profile,
      {
        new: true,
        runValidators: true,
      },
    );
  }
}
