import { User } from './User';
export class Video {
    public id: number;
    public userId: number;
    public title: string;
    public description: string;
    public url: string;
    public status: string;
    public createdAT: Date;
    public updatedAT: Date;
    public user: User;

    constructor(userID: number, ) {
        this.id = null;
        this.userId = userID;
        this.title = '';
        this.description = '';
        this.url = '';
        this.status = '';
        this.createdAT = null;
        this.updatedAT = null;
        this.user = null;

    }
}