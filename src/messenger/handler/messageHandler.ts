import wa from '@open-wa/wa-automate';

export async function handleMessage(client: wa.Client, message: wa.Message) {
    console.log(`${client}, Author: ${message.author} - ${message}`)
}