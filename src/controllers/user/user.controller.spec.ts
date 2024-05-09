import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ServiceModule } from '../../services/service.module';
import { RepositoryModule } from '../../repository/repository.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ormConfig } from '../../orm/ormConfig';
import { UserRegisterRequest } from './dto/requests/userRegister.request';
import { BadRequestException } from '@nestjs/common';
import { HashService } from '../../services/hash.service';
import * as bcrypt from 'bcrypt';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let hashService: HashService;
  let mockUserRegisterDto: UserRegisterRequest = {
    userEmail: 'ivan1@gmail.com',
    userName: 'test',
    userPassword: 'test123',
  };
  const mockHashService = {
    hash: jest.fn(async (input: string): Promise<string> => {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(input, saltOrRounds);
      return hash;
    }),
  };
  const mockOrderService = {
    userRegister: jest.fn(async (newUserDetails: UserRegisterRequest): Promise<any> => {
      if (newUserDetails.userEmail === 'ivan@gmail.com') {
        return new BadRequestException('User is exist!');
      }
      const result = await mockHashService.hash(newUserDetails.userPassword);
      newUserDetails.userPassword = result;
      return {
        id: Math.random(),
        ...newUserDetails,
      };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockOrderService,
        },
        {
          provide: HashService,
          useValue: mockHashService,
        },
      ],
      imports: [
        ServiceModule,
        RepositoryModule,
        TypeOrmModule.forRootAsync({
          useFactory: async () =>
            Object.assign(ormConfig, {
              autoLoadEntities: true,
            }) as TypeOrmModuleOptions,
        }),
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    hashService = module.get<HashService>(HashService);
  });

  it('User successfully registered!', async () => {
    const expectedOutput = await controller.userRegister(mockUserRegisterDto);
    expect({
      id: expect.any(Number),
      ...mockUserRegisterDto,
    }).toEqual(expectedOutput);
  });

  it('Throw error user is exist!', async () => {
    mockUserRegisterDto.userEmail = 'ivan@gmail.com';
    const expectedOutput = await controller.userRegister(mockUserRegisterDto);
    expect(new BadRequestException('User is exist!')).toEqual(expectedOutput);
  });

  it('Hashed password', async () => {
    const expectedOutput = await hashService.hash(
      mockUserRegisterDto.userPassword,
    );
    expect(expect.any(String)).toEqual(expectedOutput);
  });
});
