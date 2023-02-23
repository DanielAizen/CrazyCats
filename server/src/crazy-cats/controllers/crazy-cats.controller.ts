import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Profile } from '../modules/profile.interface';
import { CrazyCatsService } from '../services/crazy-cats.service';

@Controller('crazy-cats')
export class CrazyCatsController {
  constructor(private crazyCatsService: CrazyCatsService) {}

  @Post()
  create(@Body() cat: Profile) {
    return this.crazyCatsService.createCat(cat)
  }
  @Get('all')
  findCats(): Observable<Profile[]> {
    return this.crazyCatsService.findAllCats()
  }
  @Get('id/:id')
  findCatId(@Param('id', ParseIntPipe) id: number) {
    return this.crazyCatsService.findCatById(id);
  }

  @Get('name/:name')
  findCatName(@Param('name') name: string) {
    return this.crazyCatsService.findCatByName(name);
  }

  @Get('landing')
  findTopFiveCats(): Observable<Profile[]>{
    return this.crazyCatsService.topCats();
  }
}
