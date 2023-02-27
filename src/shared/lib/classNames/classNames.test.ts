import { classNames } from 'shared/lib/classNames/classNames';

describe('className', () => {
    test('simple one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    })

    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    })

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered selectable';
        expect(classNames('someClass', { hovered: true, selectable: true }, ['class1', 'class2'])).toBe(expected);
    })

    test('with false mode', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, selectable: false }, ['class1', 'class2'])).toBe(expected);
    })

    test('with undefined mode', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, selectable: undefined }, ['class1', 'class2'])).toBe(expected);
    })
});