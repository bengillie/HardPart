import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserdataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'student1', password: 'password', usertype: 0 },
      { id: 2, username: 'student2', password: 'password', usertype: 0 },
      { id: 3, username: 'parent1', password: 'password', usertype: 1 },
      { id: 4, username: 'parent2', password: 'password', usertype: 1 },
    ];
    return {users};
  }
}
