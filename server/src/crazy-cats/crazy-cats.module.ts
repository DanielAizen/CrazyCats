import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrazyCatsController } from './controllers/crazy-cats.controller';
import { CrazyCatsEntity } from './modules/crazy-cats.entity';
import { CrazyCatsService } from './services/crazy-cats.service';

@Module({
  controllers: [CrazyCatsController],
  providers: [CrazyCatsService],
  imports: [TypeOrmModule.forFeature([CrazyCatsEntity])],
})
export class CrazyCatsModule {}
