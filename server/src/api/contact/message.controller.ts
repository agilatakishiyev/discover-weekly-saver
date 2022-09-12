import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateMessageDto } from './message.dto';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  @Inject(MessageService)
  private readonly service: MessageService;

  @Post()
  public createMessage(@Body() body: CreateMessageDto): Promise<Message> {
    return this.service.createMessage(body);
  }
}
