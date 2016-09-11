require('shelljs/global');

process.on('message', function(params) {
    if (test('-f', '~/.profile')) {
        echo(params[0]).toEnd('~/.profile');
    } else {
        echo(params[0]).toEnd('~/.bash_profile');
    }
});