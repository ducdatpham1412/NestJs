import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
    CreateStudentDto,
    FindStudentResponseDto,
    StudentResponseDto,
    UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find((item) => {
            return item.id === studentId;
        });
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        const newStudent = {
            id: uuid(),
            ...payload,
        };

        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(
        studentId: string,
        payload: UpdateStudentDto,
    ): StudentResponseDto {
        let updateStudent: StudentResponseDto;
        this.students.forEach((item, index) => {
            if (item.id === studentId) {
                this.students[index] = {
                    ...item,
                    ...payload,
                };
                updateStudent = this.students[index];
            }
        });
        return updateStudent;
    }
}
