const cmd = require('node-cmd');
cmd.get(
  `ssh root@bothost "cd /env/toutiao && git pull --rebase && yarn"
  rsync -a ./dist root@bothost:/env/toutiao/`,
  (err, data, stderr) => {
    if (stderr) {
      console.error(stderr);
    } else if (err) {
      console.warn(err);
    } else if (data) {
      console.info(data);
    }
});