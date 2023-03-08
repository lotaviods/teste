import venom from 'venom-bot';

export function startClient(callback: (client: any) => void) {
    venom
    .create({
      session: 'session-name', //name of session
      multidevice: true // for version not multidevice use false.(default: true)
    })
    .then((client: any) => start(client))
    .catch((err: any) => {
      console.log(err);
    });
  
  function start(client: any) {
    callback(client)
  }
}