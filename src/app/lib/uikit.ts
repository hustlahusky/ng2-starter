// Load jQuery
import './jquery';
let UIkit = require('uikit/dist/js/uikit');
(<any>window).UIkit = UIkit;
require('uikit/dist/js/uikit-icons');
export default (<any>window).UIkit;
