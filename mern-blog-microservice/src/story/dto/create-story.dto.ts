
export class CreateStoryDto {
    
    title: string;
    content: string;
    author: string;
    image: string;
    readtime: number;
  }
export class UpdateStoryDto {
    title?: string;
    content?: string;
    image?: string;
  }
  