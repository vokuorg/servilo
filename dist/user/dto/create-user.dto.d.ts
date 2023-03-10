export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    salt: string;
    names: string;
    last_names: string;
    gender: string;
    nationality: string;
    esperanto_level: string;
    birthday: string;
    age: number;
    registration_date: number;
    last_connection: number;
    profile_picture: string | undefined;
    biography: string | undefined;
    interests: string | undefined;
    native_language: string | undefined;
    spoken_languages: string[] | undefined;
}
