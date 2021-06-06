import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentTeacherId, TeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getStudents(@Param('teacherId') teacherId: string): TeacherResponseDto[] {
        return this.teacherService.getStudents(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param() params: StudentTeacherId,
        @Body('teacherId') newTeacherId,
    ): string {
        const { studentId, teacherId } = params;
        return newTeacherId;
    }
}
