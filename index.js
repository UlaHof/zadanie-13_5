var OSinfo = require('./modules/OSinfo');

OSinfo.print();

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting App!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write(process.version);
                break;
            case '/getOSinfo':
                getOSinfo();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});
