import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { client } from "./db";
import { libsql } from "@lucia-auth/adapter-sqlite";

export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
  adapter: libsql(client, {
		user: "user",
		key: "user_key",
		session: "user_session"
	}) 
});

export type Auth = typeof auth;