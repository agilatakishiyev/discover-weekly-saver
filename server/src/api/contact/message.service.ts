import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './message.dto';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  @InjectRepository(Message)
  private readonly repository: Repository<Message>;

  public createMessage(body: CreateMessageDto): Promise<Message> {
    const message: Message = new Message();

    message.email = body.email;
    message.fullname = body.fullname;
    message.message = body.message;

    return this.repository.save(message);
  }
}
