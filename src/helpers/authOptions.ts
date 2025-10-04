import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(credentials),
                        credentials: "include",
                    });

                    if (!res.ok) return null;

                    const user = await res.json();
                    if (user?.data?.accessToken) {
                        return {
                            id: user.data.id,
                            email: user.data.email,
                            accessToken: user.data.accessToken,
                        };
                    }
                    return null;
                } catch (err) {
                    console.error("Authorize error:", err);
                    return null;
                }
            },
        }),
    ],

    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.accessToken = token.accessToken as string;
            }
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/login",
    },

    cookies: {
        sessionToken: {
            name: "next-auth.session-token",
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "none",
                path: "/",
            },
        },
    },

    events: {
        error: (message: unknown) => {
            console.error("NextAuth error:", message);
        },
    } as any
};