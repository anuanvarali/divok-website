"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

const DEVELOPER_UID = "84c8d4a8-3163-4980-b81b-5a9bf4b6aec8";

export default function DeveloperLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        setError("Invalid email or password.");
        return;
      }

      if (data.user?.id !== DEVELOPER_UID) {
        await supabase.auth.signOut();
        setError("You are not authorized to access DIVOK administration.");
        return;
      }

      router.replace("/admin");
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#faf8f3] px-5 py-12">
      <section className="w-full max-w-md rounded-2xl border border-[#e8e2d6] bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-3xl font-bold tracking-[0.25em] text-[#28251f]">
            DIVOK
          </p>
          <div className="mx-auto mt-3 h-px w-16 bg-[#b69b65]" />
          <h1 className="mt-6 text-2xl font-semibold text-[#28251f]">
            Developer Login
          </h1>
          <p className="mt-2 text-sm text-[#77736b]">
            Authorized access only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#28251f]"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Developer email"
              className="w-full rounded-lg border border-[#ded8cd] px-4 py-3 text-sm outline-none focus:border-[#b69b65]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#28251f]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#ded8cd] px-4 py-3 text-sm outline-none focus:border-[#b69b65]"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#28251f] px-4 py-3 font-medium text-white transition hover:bg-[#403a30] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in securely"}
          </button>
        </form>

        <p className="mt-7 text-center text-xs text-[#89847a]">
          DIVOK Developer Administration
        </p>
      </section>
    </main>
  );
}
