const add = (a,b) => a + b;

test('should add two numbers', () => {
    expect(add(3,4)).toBe(7);
});

const generateGreeting = (name = 'Anonymous') => `hello ${name}!`;

test ('Should display correct name', ()=>{
    expect(generateGreeting('Francis')).toBe('hello Francis!');
});

test ('Should generate no name', ()=>{
    expect(generateGreeting()).toBe('hello Anonymous!');
});