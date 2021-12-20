const del = require('del');
const fs = require('fs');

function fix()
{
    setInterval(async function(){
        if(fs.existsSync('./.cache'))
        {
          await del('./.cache');
        }
    }, 1000);
}

module.exports = fix;