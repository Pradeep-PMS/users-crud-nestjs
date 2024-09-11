import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://pmzp2001:pradeep123@cluster0.irvck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/mydb122"),
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
