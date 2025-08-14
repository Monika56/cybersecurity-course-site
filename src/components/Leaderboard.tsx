// =========================================================
// FILE: src/components/Leaderboard.tsx
// =========================================================
"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader } from "@/components/ui";

export default function Leaderboard(){
  const [rows, setRows] = useState<{ uid: string; streak: number }[]>([]);
  useEffect(()=>{
    (async()=>{
      const q = query(collection(db, "leaderboard"), orderBy("streak", "desc"));
      const snap = await getDocs(q);
      const list: { uid: string; streak: number }[] = [];
      snap.forEach(d=> list.push(d.data() as unknown));
      setRows(list.slice(0,20));
    })();
  },[]);

  return (
    <Card className="mt-4">
      <CardHeader>
        <div className="text-lg font-semibold">Leaderboard (Top Streaks)</div>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {rows.map((r,i)=> (
            <li key={r.uid} className="flex items-center justify-between border rounded-xl px-3 py-2">
              <span className="text-sm">#{i+1} — {r.uid.slice(0,6)}…</span>
              <span className="text-sm font-semibold">🔥 {r.streak}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
