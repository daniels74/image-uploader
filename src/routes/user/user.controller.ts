import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './Model/user.interface';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('postItem')
  uploadAnItem(@Body() user: UserInterface) {
    return this.userService.postUserToDatabase(user);
  }

  @Get(':id')
  findOne(@Param() params): Observable<UserInterface> {
    return this.userService.findOne(params.id);
  }

  @Get()
  findAll(): Observable<UserInterface[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.userService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: UserInterface) {
    return this.userService.updateOne(Number(id), user);
  }
}
