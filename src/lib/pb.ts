import PocketBase from 'pocketbase';
import { PUBLIC_POCKETHOST_URL } from '$env/static/public';

export const pb = new PocketBase(PUBLIC_POCKETHOST_URL);
