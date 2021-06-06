export interface FindStudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}

export interface StudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}

export interface CreateStudentDto {
    name: string;
    teacher: string;
}

export interface UpdateStudentDto {
    name: string;
    teacher: string;
}
