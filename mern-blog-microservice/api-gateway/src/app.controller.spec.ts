// app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return data from the "stories" microservice', async () => {
      const requestBody = { /* your actual request body here */ };
      const result = await appController.getHello({ body: requestBody });
      // Modify the expectation based on the structure of the response from the "stories" microservice
      expect(result).toBeDefined();
      expect(result.someProperty).toEqual('expectedValue');
    });
  });
});
