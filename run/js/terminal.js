(function($) {
    $.fn.terminal = function() {
        var socket = io.connect();
        var terms = [];
        var _this = this;

        socket.on('connect', function() {
            _this.each(function() {
                var rows = $(this).data('rows') || 26;
                var term = new Terminal({
                    cols: 104,
                    rows: rows,
                    screenKeys: true,
                    termName: 'ticonf-2014'
                });

                term.on('data', function(data) {
                    socket.emit('data', data);
                });

                term.on('title', function(title) {
                    document.title = title;
                });

                $(this).siblings('a[data-role="term-command"]').click(function(e) {
                    socket.emit('data', $(e.target).data('command') + "\n");
                    e.preventDefault();
                    e.cancelBubble();
                });

                term.open(this);
                term.write('ticonf-2014$ ');
                terms.push(term);
            });
        });

        socket.on('data', function(data) {
            $.each(terms, function(rank, term) {
                term.write(data);
            });
        });

        socket.on('disconnect', function() {
            $.each(terms, function(rank, term) {
                term.destroy();
            });
        });
    }
}(jQuery));
