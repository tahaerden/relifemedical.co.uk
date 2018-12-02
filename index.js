/* globals Config:true */
// var $ = require('./plugins/jquery/jquery-1.12.0.min.js')
var $ = require('jquery')
window.jQuery = $
window.$ = $

require('angular')
require('angular-route')
require('angular-animate')
require('angular-aria')
require('angular-sanitize')
require('angular-messages')
require('angular-cookies')
require('angular-translate')
require('angular-translate-loader-static-files')
require('angular-translate-storage-cookie')
require('angular-translate-storage-local')

require('angular-toastr')
require('bootstrap')

require('./build/app/controllers.js')
require('./build/app/components.js')
require('./build/app/routes.js')
