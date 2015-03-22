/**
 * @author Thomas Scheinecker, Catalysts GmbH.
 */

requirejs.config({
    paths: {
        'cat-angular': webjars.path('cat-angular', 'js/cat-angular'),
        'cat-angular-templates': webjars.path('angular-ui-bootstrap', 'js/cat-angular.tpl')
    },
    shim: {
        'cat-angular': ['angular', 'lodash', 'jquery', 'ui-bootstrap-tpl'],
        'cat-angular-templates': ['angular']
    }
});