"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

const DEVELOPER_UID = "84c8d4a8-3163-4980-b81b-5a9bf4b6aec8";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;

    async function verifyDeveloper() {
      const { data, error } = await supabase.auth.getUser();

      if (!active) return;

      if (error || !data.user || data.user.id !== DEVELOPER_UID) {
        await supabase.auth.signOut();

        if (active) {
          router.replace("/admin/login");
        }

        return;
      }

      setAuthorized(true);
      setLoading(false);
    }

    verifyDeveloper();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (loading || !authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f3]">
        <p className="text-sm text-[#77736b]">
          Verifying developer access...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <header className="border-b border-[#e8e2d6] bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-[0.2em] text-[#28251f]">
              DIVOK
            </p>
            <p className="mt-1 text-xs text-[#77736b]">
              Developer Administration
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-[#ded8cd] px-4 py-2 text-sm font-medium text-[#28251f] hover:bg-[#faf8f3]"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a18a5c]">
          Administration
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-[#28251f]">
          Welcome to DIVOK
        </h1>

        <p className="mt-3 text-[#77736b]">
          Your developer administration dashboard is ready.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Products",
              description: "Manage the DIVOK product catalogue.",
            },
            {
              title: "Categories",
              description: "Organize and manage product categories.",
            },
            {
              title: "Product Images",
              description: "Manage product images and storage.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#e8e2d6] bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-[#28251f]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-[#77736b]">
                {item.description}
              </p>
              <p className="mt-5 text-xs text-[#a18a5c]">
                Coming in the next development stage
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
