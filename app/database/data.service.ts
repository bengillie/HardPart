import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'student1', password: 'password', birthdate: '01/02/1998', usertype: 0 },
      { id: 2, username: 'student2', password: 'password', birthdate: '02/03/2001', usertype: 0 },
      { id: 3, username: 'parent1', password: 'password', birthdate: '03/03/1978', usertype: 1 },
      { id: 4, username: 'parent2', password: 'password', birthdate: '04/05/1975', usertype: 1 }
    ];
    return {users};
  }
}
