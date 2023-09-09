import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Profile } from './schemas/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getProfile')
  @ApiBearerAuth(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMyZDQzZjk1YmU5NGFhMDdmNWYzZCIsImlhdCI6MTY5NDI0ODI1OSwiZXhwIjoxNjk0NTA3NDU5fQ.48AuPUd5X9WSCmb53UGZCj_HTlMwfM-BK19LlFx7-II',
  )
  @ApiNotFoundResponse({
    description: 'Bad Request',
    schema: {
      type: 'object',
      example: {
        message: 'Profile not found.',
        error: 'Not Found',
        statusCode: 404,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      type: 'object',
      example: {
        _id: '64fc304c99c61232976689cb',
        name: 'John Doe',
        birthday: '1990-01-01',
        height: 170,
        weight: 70,
        interests: ['football', 'basketball'],
        user: '64fc27a7f529c9601ecd2655',
        createdAt: '2023-09-09T08:43:56.986Z',
        updatedAt: '2023-09-09T08:45:30.508Z',
        __v: 0,
      },
    },
  })
  @UseGuards(AuthGuard())
  async getProfile(@Req() req): Promise<Profile> {
    return this.userService.get(req.user);
  }

  @Post('createProfile')
  @UseGuards(AuthGuard())
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiBearerAuth(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMyZDQzZjk1YmU5NGFhMDdmNWYzZCIsImlhdCI6MTY5NDI0ODI1OSwiZXhwIjoxNjk0NTA3NDU5fQ.48AuPUd5X9WSCmb53UGZCj_HTlMwfM-BK19LlFx7-II',
  )
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      type: 'object',
      example: {
        _id: '64fc304c99c61232976689cb',
        name: 'John Doe',
        birthday: '1990-01-01',
        height: 170,
        weight: 70,
        interests: ['football', 'basketball'],
        user: '64fc27a7f529c9601ecd2655',
        createdAt: '2023-09-09T08:43:56.986Z',
        updatedAt: '2023-09-09T08:45:30.508Z',
        __v: 0,
      },
    },
  })
  async createProfile(
    @Body()
    profile: CreateProfileDto,
    @Req() req,
  ): Promise<Profile> {
    return this.userService.create(profile, req.user);
  }

  @Put('updateProfile')
  @UseGuards(AuthGuard())
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'object',
      example: {
        message: 'Profile not found.',
        error: 'Not Found',
        statusCode: 404,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiBearerAuth(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMyZDQzZjk1YmU5NGFhMDdmNWYzZCIsImlhdCI6MTY5NDI0ODI1OSwiZXhwIjoxNjk0NTA3NDU5fQ.48AuPUd5X9WSCmb53UGZCj_HTlMwfM-BK19LlFx7-II',
  )
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      type: 'object',
      example: {
        _id: '64fc304c99c61232976689cb',
        name: 'John Doe',
        birthday: '1990-01-01',
        height: 170,
        weight: 70,
        interests: ['football', 'basketball'],
        user: '64fc27a7f529c9601ecd2655',
        createdAt: '2023-09-09T08:43:56.986Z',
        updatedAt: '2023-09-09T08:45:30.508Z',
        __v: 0,
      },
    },
  })
  async updateProfile(
    @Body()
    profile: UpdateProfileDto,
    @Req() req,
  ): Promise<Profile> {
    return this.userService.updateById(profile, req.user);
  }
}
