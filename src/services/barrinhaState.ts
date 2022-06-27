import { Subject } from 'rxjs';

class barrinhaService {
    subject = new Subject();
    // FUNÇÃO DENTRO DE UMA CLASSE NO REACT
    barrinhaOpen () {this.subject.next(true)};
    barrinhaClose () {this.subject.next(false)};
    onBarrinha () {return this.subject.asObservable()};
};



export default new barrinhaService();