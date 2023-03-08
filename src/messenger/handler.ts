import wa from '@open-wa/wa-automate';

export function startClient(callback: (client: wa.Client) => void) {
    wa.create({
        sessionId: "WP_HELPER",
        multiDevice: true, //required to enable multiDevice support
        authTimeout: 120, //wait only 60 seconds to get a connection with the host account device
        blockCrashLogs: true,
        disableSpins: true,
        headless: true,
        logConsole: false,
        popup: true,
        qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
    })
    .then((waClient) => {
        callback(waClient)
    })
    .catch((err) => new Error(err))
}