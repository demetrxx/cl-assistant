import { AccountStatus, Role, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  roles: Role[];

  @ApiProperty()
  accountStatus: AccountStatus;

  @ApiProperty()
  registeredAt: Date;

  @ApiProperty()
  lastVisitedAt: Date;
}
