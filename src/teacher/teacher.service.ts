import { Injectable } from '@nestjs/common';
import { students, teachers } from 'src/db';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;
    private students = students;

    getTeachers(): FindTeacherResponseDto[] {
        return this.teachers;
    }

    getTeacherById(teacherId: string): FindTeacherResponseDto {
        return this.teachers.find((item) => {
            return item.id === teacherId;
        });
    }

    getStudents(teacherId: string): FindStudentResponseDto[] {
        const result: Array<FindStudentResponseDto> = [];
        this.students.forEach((item) => {
            if (item.teacher === teacherId) result.push(item);
        });

        return result;
    }
}
