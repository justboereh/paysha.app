// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type;
	}

	export {};
	declare global {
		DatabaseSessionAttributes = {};
	}
}
