import PocketBase, { type AuthModel } from 'pocketbase';
import { PUBLIC_POCKETHOST_URL } from '$env/static/public';
import { writable } from 'svelte/store';

export const pb = new PocketBase(PUBLIC_POCKETHOST_URL);

export const currentUser = writable<AuthModel>(pb.authStore.model);

pb.authStore.onChange((_, model) => currentUser.set(model));
