import { HttpException, HttpStatus } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
    CreateStudentDto,
    FindStudentResponseDto,
    StudentResponseDto,
    UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentResponseDto[] {
        // return this.studentService.getStudents();
        throw new HttpException(
            { status: 'hehehe', cahnge: 'sdfsdfs', error: 'sdfsdfss' },
            HttpStatus.FORBIDDEN,
        );
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string,
    ): FindStudentResponseDto {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto,
    ): StudentResponseDto {
        return this.studentService.updateStudent(studentId, body);
    }
}
