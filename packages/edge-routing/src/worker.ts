import axios from 'axios';
import type { Request, Response } from 'express';


export async function handleRequest(req: Request, res: Response) {
    try {
        // 
        const response = await axios.get('http://localhost:3033');
        console.log('获取到的 HTML', response.data);
        
        res.send(response.data);
    } catch (error) {
        console.error('请求出错:', error);
        res.status(500).send('请求出错');
    }
}