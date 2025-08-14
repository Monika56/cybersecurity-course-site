"use client";
import { useEffect, useState } from "react";
import { weeks } from "@/lib/data";
import { Button, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Curriculum({ uid }: { uid: string }){
  const [progress, setProgress] = useState<number[]>([]);

  useEffect(()=>{
    (async()=>{
      const ref = doc(db, "users", uid);
      const snap = await getDoc(ref);
      if (snap.exists()){
        const data = snap.data() as any;
        setProgress(data.progress || []);
      } else {
        await setDoc(ref, { progress: [] }, { merge: true });
      }
    })();
  },[uid]);

  const total = weeks.length;
  const pct = Math.round((progress.length/total)*100);

  async function toggle(id: number){
    const next = progress.includes(id) ? progress.filter(x=>x!==id) : [...progress, id];
    setProgress(next);
    await setDoc(doc(db, "users", uid), { progress: next }, { merge: true });
  }

  return (
    <Card id="curriculum" className="mt-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">20‑Week Curriculum</div>
          <div className="text-sm text-slate-600">{progress.length}/{total} • {pct}%</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {weeks.map(w=> (
            <Card key={w.id} className={progress.includes(w.id)?"border-green-500":""}>
              <CardHeader className="pb-2">
                <div className="font-medium">Week {w.id}: {w.title}</div>
                <div className="text-xs text-slate-500">Track: {w.track}</div>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex flex-wrap gap-1">{w.outcomes.map(o=> <span key={o} className="text-xs px-2 py-1 rounded-full border">{o}</span>)}</div>
                <div><span className="font-semibold">Lab:</span> {w.lab}</div>
                <div><span className="font-semibold">Deliverable:</span> {w.deliverable}</div>
              </CardContent>
              <CardFooter>
                <Button variant={progress.includes(w.id)?"secondary":"default"} onClick={()=>toggle(w.id)}>
                  {progress.includes(w.id)?"Mark Incomplete":"Mark Complete"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}