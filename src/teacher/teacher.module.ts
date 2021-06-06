import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    controllers: [TeacherController, StudentTeacherController],
    providers: [TeacherService],
})
export class TeacherModule {}
