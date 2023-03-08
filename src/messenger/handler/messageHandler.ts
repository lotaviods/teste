import wa from '@open-wa/wa-automate';

export async function handleMessage(client: wa.Client, message: wa.Message) {
    console.log(`Author: ${message.sender.name} - ${message.body}`)
}