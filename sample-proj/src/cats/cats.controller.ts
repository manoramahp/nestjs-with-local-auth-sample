import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll():string {
        return "This returns all the cats.\n"
    }

    @Post()
    async createCat(@Body() body: Body){
        console.log(body);
    }
}
