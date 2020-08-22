import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GroupModule } from './groups/group.module';
import { RequestModule } from './requests/request.module';

@Module({
  imports: [GroupModule, RequestModule],
  controllers: [AppController],
})
export class AppModule {}
