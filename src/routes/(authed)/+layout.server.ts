import { pb } from '$lib/pb';
import { redirect } from '@sveltejs/kit';

export function load() {
	if (!pb.authStore.isValid) return redirect(300, '/signin');
}
