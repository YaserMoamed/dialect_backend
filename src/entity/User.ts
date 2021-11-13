import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    screenName: String;

    @Column()
    imgUrl: String;

    @Column()
    backgroundImageUrl: String;

    @Column()
    birthdate: String;

    @Column()
    bio: String;

    @Column()
    location: String;

    @Column()
    followersCount: Number;    
    
    @Column()
    followingCount: Number;
    
    @Column()
    website: String;

}