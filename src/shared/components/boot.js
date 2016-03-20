import config from '../../../data/__config.json';
var selectedThemeModule = './themes/'+config.currentTheme+'/boot.js';
const Theme = require(selectedThemeModule);
export default Theme.default;
