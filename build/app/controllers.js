/*  eslint no-unused-vars: ["error", { "vars": "local" }] */
var app = angular
  .module('myApp', ['app.routes', 'app.components', 'ngRoute', 'ngAnimate', 'ngAria', 'ngSanitize', 'ngMessages', 'toastr', 'pascalprecht.translate', 'ngCookies'])

  .controller('global', ['$scope', '$translate', '$rootScope', function ($scope, $translate, $rootScope) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey)
      $rootScope.lang = langKey
      $scope.currentLang = $translate.use() || $translate.storage().get($translate.storageKey()) || $translate.preferredLanguage()
    }
    $scope.$on('$routeChangeSuccess', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000)
    })
    $scope.openModal = function (id) {
      $('#' + id).modal('show')
    }
    $('.carousel').carousel()
    $('.collapse').collapse()
  }])
  .controller('home', ['$scope', function () {

  }])
  .controller('contact', ['$scope', '$translate', 'toastr', function ($scope, $translate, toastr) {
    $scope.sendMessage = function () {
      $.ajax({
        url: '/mailform/form_iletisim.php',
        data: {
          email: $scope.conctactFormObj.email,
          name: $scope.conctactFormObj.name,
          message: $scope.conctactFormObj.message
        },
        type: 'POST'
      }).done(function (res) {
        if (res === 1 || res === '1') {
          toastr.success('Your message is sent successfully.')
          $('#contactForm')[0].reset()
        } else {
          toastr.error(res)
        }
      }).fail(function (jqXHR, textStatus, errorThrown) {
        toastr.error(errorThrown)
      })
    }
  }])

//  Toastr Config
app.config(['toastrConfig', function (toastrConfig) {
  angular.extend(toastrConfig, {
    progressBar: true
  })
}])

//  Language Translate Config
app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'components/translations/locale-',
    suffix: '.json'
  })
    .preferredLanguage('en')
    //  .useLocalStorage()
    .useCookieStorage()
    .useSanitizeValueStrategy(null)
}])
