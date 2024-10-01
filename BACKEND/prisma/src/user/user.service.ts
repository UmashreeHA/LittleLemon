import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async findUserById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.prisma.user.delete({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
