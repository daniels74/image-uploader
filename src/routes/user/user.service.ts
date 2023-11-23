import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './Model/user.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { UserInterface } from './Model/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  postUserToDatabase(user: UserInterface): Observable<UserInterface> {
    return from(this.userRepo.save(user));
  }

  findOne(id: any): Observable<UserInterface> {
    return from(this.userRepo.findOne(id));
  }

  findAll(): Observable<UserInterface[]> {
    return from(this.userRepo.find());
  }

  deleteOne(id: any): Observable<any> {
    return from(this.userRepo.delete(id));
  }

  updateOne(id: any, user: UserInterface): Observable<any> {
    return from(this.userRepo.update(id, user));
  }
}
