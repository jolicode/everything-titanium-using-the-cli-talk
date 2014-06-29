exports.cliVersion = '>=3.2';
exports.name = 'pony:fly';
exports.desc = 'makes ponies fly';

exports.config = function(logger, config, cli) {
    return {
        noAuth: true,
        skipBanner: true,
        options: {
            quantity: {
                abbr: 'qty',
                default: 1,
                desc: 'number of ponies flying'
            }
        }
    };
};
