export async function handleMessage(message: any) {
    console.log(`Author: ${message.notifyName} - ${message.body}`)
}