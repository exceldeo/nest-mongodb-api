import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      type: 'object',
      example: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMyZDQzZjk1YmU5NGFhMDdmNWYzZCIsImlhdCI6MTY5NDI0ODI1OSwiZXhwIjoxNjk0NTA3NDU5fQ.48AuPUd5X9WSCmb53UGZCj_HTlMwfM-BK19LlFx7-II',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'object',
      example: {
        message: 'Duplicate Email Entered',
        error: 'Conflict',
        statusCode: 409,
      },
    },
  })
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      type: 'object',
      example: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMyZDQzZjk1YmU5NGFhMDdmNWYzZCIsImlhdCI6MTY5NDI0ODI1OSwiZXhwIjoxNjk0NTA3NDU5fQ.48AuPUd5X9WSCmb53UGZCj_HTlMwfM-BK19LlFx7-II',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'object',
      example: {
        message: 'Invalid email or password',
        error: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
