import {greet} from './greet';

describe('greet', ()=> {
    it('should include the <name> in the message ', ()=> {
        expect(greet('radagast666')).toContain('radagast666');
    })
} )

describe('greet', ()=> {
    it('should include the "Hi" in the message ', ()=> {
        expect(greet('radagast666')).toContain('Hi');
    })
} )