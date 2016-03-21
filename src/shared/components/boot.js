import config from '../../../data/__config.json';

const theme = require(`./themes/${config.currentTheme}/boot.js`);

export default theme.default;
