
// const runCommand = async (command) =>{
//     const cp = require('child_process')
//     cp.spawn(command, {
//         stdio: "inherit",
//         shell: true
//     });
// }
// runCommand('ls')

const {execSync} = require('child_process')
console.info(execSync.toString(), 'execSync')
execSync('ls -l', (error, stdout, stderr) =>{
    if(error){
        console.info(error, 'err')
        return
    }
    console.info('1111')
})