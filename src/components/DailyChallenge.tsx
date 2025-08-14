"use client";
import { useEffect, useMemo, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { baseChallenges, dailyIndex, Challenge } from "@/lib/data";
import { Button, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { Flame } from "lucide-react";

export default function DailyChallenge({ uid }: { uid: string }){
  const [custom, setCustom] = useState<Challenge[]>([]);
  const [completedDates, setCompletedDates] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);

  const all = useMemo(()=> [...baseChallenges, ...custom], [custom]);
  const today = new Date();
  const todayKey = today.toISOString().slice(0,10);
  const challenge = all[dailyIndex(all.length, today)];
  useEffect(()=>{
    (async()=>{
      const uref = doc(db, "users", uid);
      const snap = await getDoc(uref);
      if (snap.exists()){
        const data = snap.data() as unknown;
        setCustom(data.customChallenges || []);
        setCompletedDates(data.completedDates || []);
        setStreak(data.streak || 0);
      } else {
        await setDoc(uref, { customChallenges: [], completedDates: [], streak: 0, progress: [] });
      }
    })();
  },[uid]);

  const doneToday = completedDates.includes(todayKey);

  async function markDone(){
    if (doneToday) return;
    const y = new Date(today); y.setDate(today.getDate()-1);
    const yKey = y.toISOString().slice(0,10);
    const newStreak = completedDates.includes(yKey) ? streak + 1 : 1;
    const newDates = [...completedDates, todayKey];
    setStreak(newStreak); setCompletedDates(newDates);
    await setDoc(doc(db, "users", uid), { streak: newStreak, completedDates: newDates }, { merge: true });
    // update leaderboard
    await setDoc(doc(db, "leaderboard", uid), { uid, streak: newStreak, updatedAt: Date.now() }, { merge: true });
  }

  async function addCustomChallenge(title: string, category = "Custom", difficulty: "Easy"|"Medium"|"Hard" = "Medium"){
    const item = { title, category, difficulty } as Challenge;
    const next = [...custom, item];
    setCustom(next);
    await setDoc(doc(db, "users", uid), { customChallenges: next }, { merge: true });
  }

  return (
    <Card id="daily" className="mt-4">
      <CardHeader>
        <div className="font-semibold text-lg flex items-center gap-2"><Flame className="w-5 h-5"/> Daily Challenge</div>
        <div className="text-sm text-slate-600">Streak: <span className="font-semibold">{streak}</span></div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-base font-medium">{challenge?.title}</div>
        <div className="text-sm text-slate-600">{challenge?.category} • {challenge?.difficulty}</div>
        <p className="text-sm">Guidance: Use your GCP VM for anything needing network access; use Colab for parsing/analysis. Upload artifacts to your portfolio.</p>
        <form className="flex gap-2" onSubmit={async(e)=>{e.preventDefault(); const fd=new FormData(e.currentTarget as HTMLFormElement); const t=String(fd.get("t")||"").trim(); if(t) await addCustomChallenge(t); (e.currentTarget as HTMLFormElement).reset();}}>
          <input name="t" placeholder="Add your own challenge" className="flex-1 border rounded-2xl px-3 py-2" />
          <Button type="submit" variant="secondary">Add</Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={markDone} disabled={doneToday}>{doneToday?"Completed":"Mark Complete"}</Button>
      </CardFooter>
    </Card>
  );
}