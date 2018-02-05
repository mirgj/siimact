export const AllowedColor = ['navy', 'green', 'teal', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'grey'];
export const DefaultColor = 'navy';
export const AllowedSize = ['small', 'medium', 'large', 'fluid'];
export const DefaultSize = 'large';
export const AllowedTag = ['div', 'span'];
export const DefaultTag = 'span';
export const AllowedHeadingSize = [1, 2, 3, 4, 5, 6];
export const HeadingDefaultSize = 1;
export const AllowedSpinnerSize = ['small', 'large'];
export const AllowedTipType = ['heart', 'exclamation', 'question'];
export const AllowedColSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const ColDefaultSize = 12;

let lastId = 0;
export function getId(prefix='id') {
    return `${prefix}${++lastId}`;
}