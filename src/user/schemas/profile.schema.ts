import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop()
  @ApiProperty({
    description: 'The name of a user',
    example: 'John Doe',
  })
  name: string;

  @Prop()
  @ApiProperty({
    description: 'The birthday of a user',
    example: '1990-01-01',
  })
  birthday: string;

  @Prop()
  @ApiProperty({
    description: 'The height of a user in centimeters',
    example: 170,
  })
  height: number;

  @Prop()
  @ApiProperty({
    description: 'The weight of a user in kilograms',
    example: 70,
  })
  weight: number;

  @Prop()
  @ApiProperty({
    description: 'Interests of a user',
    example: ['football', 'basketball'],
  })
  interests: Array<string>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
