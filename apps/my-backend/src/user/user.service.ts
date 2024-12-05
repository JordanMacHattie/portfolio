import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Create a user
  async createUser(name: string, email: string, avatar: string, title: string): Promise<User> {
    const user = this.userRepository.create({ name, email, avatar, title });
    return this.userRepository.save(user);
  }
}
