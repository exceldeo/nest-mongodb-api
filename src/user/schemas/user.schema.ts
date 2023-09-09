import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: 'The username of a user',
    example: 'JohnDoe',
  })
  username: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  @ApiProperty({
    description: 'The email of a user',
    example: 'test@gmail.com',
  })
  email: string;

  @Prop()
  @ApiProperty({
    description: 'The password of a user',
    example: '123456',
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
