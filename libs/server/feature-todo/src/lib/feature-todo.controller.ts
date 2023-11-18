import { Controller } from '@nestjs/common';
import { FeatureTodoService } from './feature-todo.service';

@Controller('feature-todo')
export class FeatureTodoController {
  constructor(private featureTodoService: FeatureTodoService) {}
}
