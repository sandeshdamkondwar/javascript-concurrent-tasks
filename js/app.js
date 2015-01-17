require.config({
    paths: {
        'jQuery': 'libs/jquery',
        'underscore': 'libs/underscore'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(["main"]);