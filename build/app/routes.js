var Routes = angular.module('app.routes', ['ngRoute'])
Routes.config([ '$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'home'
    })
    .when(' ', {
      templateUrl: 'views/home.html',
      controller: 'home'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'home'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contact'
    })
    // hair
    .when('/hair-transplantation', {
      templateUrl: 'views/hair-transplantation.html'
    })
    .when('/beard-cultivation-with-implanter-pen', {
      templateUrl: 'views/beard-cultivation-with-implanter-pen.html'
    })
    .when('/female-hair-transplantation-with-implanter-pen', {
      templateUrl: 'views/female-hair-transplantation-with-implanter-pen.html'
    })
    .when('/implanter-pen-method-eyebrow-treatment', {
      templateUrl: 'views/implanter-pen-method-eyebrow-treatment.html'
    })
    .when('/hair-from-beard', {
      templateUrl: 'views/hair-from-beard.html'
    })
    .when('/hair-tightening', {
      templateUrl: 'views/hair-tightening.html'
    })
    // asthetical
    .when('/asthetical-operations', {
      templateUrl: 'views/asthetical-operations.html'
    })
    // non-surgical asthetical operations
    .when('/botox', {
      templateUrl: 'views/botox.html'
    })
    .when('/prp-and-stem-cell', {
      templateUrl: 'views/prp-and-stem-cell.html'
    })
    .when('/face-lift-hifu', {
      templateUrl: 'views/face-lift-hifu.html'
    })
    .when('/thulium-laser', {
      templateUrl: 'views/thulium-laser.html'
    })
    // surgical asthetical operations
          // Mammoplasty
    .when('/breast-augmentation', {
      templateUrl: 'views/breast-augmentation.html'
    })
    .when('/breast-reduction', {
      templateUrl: 'views/breast-reduction.html'
    })
    .when('/breast-lifting', {
      templateUrl: 'views/breast-lifting.html'
    })
    .when('/breast-reduction-for-men', {
      templateUrl: 'views/breast-reduction-for-men.html'
    })
    // single menu
    .when('/rhinoplasty', {
      templateUrl: 'views/rhinoplasty.html'
    })
    // Face and Neck Aesthetics
    .when('/face-lifting', {
      templateUrl: 'views/face-lifting.html'
    })
    .when('/lip-aesthetics', {
      templateUrl: 'views/lip-aesthetics.html'
    })
    .when('/prominent-ear-surgery', {
      templateUrl: 'views/prominent-ear-surgery.html'
    })
    .when('/chin-aesthetics', {
      templateUrl: 'views/chin-aesthetics.html'
    })
    .when('/neck-lift-surgery', {
      templateUrl: 'views/neck-lift-surgery.html'
    })
    .when('/eye-lid-surgery', {
      templateUrl: 'views/eye-lid-surgery.html'
    })
    .when('/eyebrow-lift', {
      templateUrl: 'views/eyebrow-lift.html'
    })
    // Body Aesthetics:
    .when('/arm-lift-surgery', {
      templateUrl: 'views/arm-lift-surgery.html'
    })
    .when('/tummy-tuck-surgery', {
      templateUrl: 'views/tummy-tuck-surgery.html'
    })
    .when('/genital-surgery', {
      templateUrl: 'views/genital-surgery.html'
    })
    .when('/liposuction', {
      templateUrl: 'views/liposuction.html'
    })
    .when('/lipomatic', {
      templateUrl: 'views/lipomatic.html'
    })
    .when('/nevus', {
      templateUrl: 'views/nevus.html'
    })
    .when('/scar-treatment', {
      templateUrl: 'views/scar-treatment.html'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    })
}])
