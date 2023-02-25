import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Put, Req } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { Profile } from '../modules/profile.interface';
import { CrazyCatsService } from '../services/crazy-cats.service';
import { Request } from 'express';

@Controller('crazy-cats')
export class CrazyCatsController {
  constructor(private crazyCatsService: CrazyCatsService) {}

  @Post()
  create(@Body() cat: Profile) {
    return this.crazyCatsService.createCat(cat);
  }
  @Get('all')
  findCats(): Observable<Profile[]> {
    return this.crazyCatsService.findAllCats();
  }
  @Get('id/:id')
  findCatId(@Param('id', ParseIntPipe) id: number) {
    return this.crazyCatsService.findCatById(id);
  }

  @Get('name/:name')
  findCatsName(@Param('name') name: string) {
    return this.crazyCatsService.findCatsByName(name);
  }

  @Get('landing')
  findTopFiveCats(): Observable<Profile[]> {
    return this.crazyCatsService.topCats();
  }

  @Put('likes/:id')
  updateCatLikes(
    @Param('id') id: number,
    @Req() req: Request,
  ): Observable<UpdateResult> {
    return this.crazyCatsService.updateLikes(id, req.body['likes']);
  }
}
