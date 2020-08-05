import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GroupModule } from './group/group.module';

@Module({
  imports: [GroupModule],
  controllers: [AppController],
})
export class AppModule {}
