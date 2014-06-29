exports.validate = function (logger, config, cli) {
    if (cli.argv.quantity) {
        if (!/^\d+$/.test(cli.argv.quantity)) {
            logger.banner();
            logger.error('quantity must be an integer\n');
            process.exit(1);
        }
    }
};

exports.run = function (logger, config, cli, finished) {
    var i = 0;

    while (i < cli.argv.quantity) {
        console.log('ponies are flying!');
        i++;
    }
};
