async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3001);
  }
  bootstrap();
  