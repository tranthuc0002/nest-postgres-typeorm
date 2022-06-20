import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedService } from '../services/feed.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService) { }

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost>{
        return this.feedService.createPost(post);
    }

    @Get()
    findAll(): Observable<FeedPost[]> { 
        return this.feedService.findAllPost();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() feedPost: FeedPost): Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> { 
        return this.feedService.deletePost(id);
    }
}
