import { defineHandler } from 'nitro';

export default defineHandler(() => ({ connected: Boolean(process.env.NVIDIA_API_KEY) }));
