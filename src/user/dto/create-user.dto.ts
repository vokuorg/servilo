import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    salt: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    nationality: string;

    @ApiProperty()
    esperanto_level: string;

    @ApiProperty()
    birthday: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    registration_date: number;

    @ApiProperty()
    last_connection: number;

    @ApiProperty()
    profile_picture: string | undefined;

    @ApiProperty()
    biography: string | undefined;

    @ApiProperty()
    residence: string | undefined;

    @ApiProperty()
    interests: string[] | undefined;

    @ApiProperty()
    native_language: string | undefined;

    @ApiProperty()
    spoken_languages: string[] | undefined;

    @ApiProperty()
    contact: JSON | undefined;

    @ApiProperty()
    status: string | undefined;
}
