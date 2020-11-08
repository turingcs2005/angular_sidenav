export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Chemistry', 'chemistry', 'chemistry class material', 'science'),
    new MenuItem('Biology', 'biology', 'biology class material', 'biotech'),
    new MenuItem('Mathematics', 'mathematics', 'mathematics class material', 'calculate'),
    new MenuItem('Physics', 'physics', 'physics class material', 'flash_on')
];