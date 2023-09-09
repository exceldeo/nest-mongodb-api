import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';
import { User } from '../schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The name of a user',
    example: 'John Doe',
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The birthday of a user',
    example: '1990-01-01',
  })
  readonly birthday: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The height of a user in centimeters',
    example: 170,
  })
  readonly height: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The weight of a user in kilograms',
    example: 70,
  })
  readonly weight: number;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Interests of a user',
    example: ['football', 'basketball'],
  })
  readonly interests: Array<string>;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
