import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrazyCatsEntity } from '../modules/crazy-cats.entity';
import { from, Observable} from 'rxjs'
import { Profile } from '../modules/profile.interface';

@Injectable()
export class CrazyCatsService {
  constructor(
    @InjectRepository(CrazyCatsEntity)
    private readonly crazyCatsRepository: Repository<CrazyCatsEntity>,
  ) {}

  createCat(cat: Profile): Observable<Profile> {
    return from(this.crazyCatsRepository.save(cat));
  }
  findAllCats(): Observable<Profile[]> {
    return from(this.crazyCatsRepository.find())
  }
  findCatById(id: number) {
    return this.crazyCatsRepository.findOneBy({ id: id });
  }
  findCatByName(name: string) {
    return this.crazyCatsRepository.findOneBy({ name: name });
  }
}
