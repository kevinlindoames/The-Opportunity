import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user/create-user';
import { UserDocument } from 'src/users/entities/user/user';
import { UsersRepository } from 'src/users/repositories/users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findByUsername(username: string): Promise<UserDocument> {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const existingUsername = await this.usersRepository.findByUsername(
      createUserDto.username,
    );
    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    const existingEmail = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    return this.usersRepository.create(createUserDto);
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.usersRepository.updateLastLogin(userId);
  }
}
