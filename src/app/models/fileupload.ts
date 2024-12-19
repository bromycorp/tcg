export class FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;

  constructor(key: string, name: string, url: string, file: File) {
    this.key = key;
    this.name = name;
    this.url = url;
    this.file = file;
  }
}
