import { EntityRepository, Repository } from 'typeorm';
import File from '../model/File';

@EntityRepository(File)
export default class FileRepository extends Repository<File> {}
