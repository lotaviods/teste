import * as dotenv from 'dotenv'
import { startClient } from "./handler/handler";
import amqplib from 'amqplib/callback_api';
import { handleMessage } from './msgLogger/messageHandler';

dotenv.config()
const queue = process.env.LOTA_WA_CONSUMER_QUEUE
const url = process.env.LOTA_WA_CONSUMER_URL

startClient( (client) => {
    
        console.log('[CLIENT] CLIENT Started!')

    
        // listening on message
        client.onMessage((message: any) => {
            handleMessage(message)
        })

        amqplib.connect(`${url}`, (err: any, conn:amqplib.Connection) => {
        if (err) throw err;

        conn.createChannel((err, ch) => {
            if (err) throw err;
            ch.assertQueue(queue)

            ch.consume(`${queue}`, (msg: amqplib.Message | null) => {
                try {
                    
                    let json = JSON.parse(msg?.content.toString()!!)
                    console.log(`[x] Received %s to ${json.to}@c.us`, `${json.message}`)

                    client.sendText(`${json.to}@c.us`, `${json.message}`)

                    ch.ack(msg!!);
                } catch (err) {
                    console.log(err)
                }
            })
        })
    })
})



