"use client";
import { ReactNode, useEffect, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Button, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";

export default function AuthGate({ children }: { children: ReactNode }){
  const [user, setUser] = useState<null | { uid: string; email: string | null }>(null);
  const [mode, setMode] = useState<"signin"|"signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> onAuthStateChanged(auth, (u)=> setUser(u ? { uid: u.uid, email: u.email } : null)), []);

  if (!user) {
    return (
      <Card className="max-w-md mx-auto mt-10">
        <CardHeader className="text-center">
          <div className="text-xl font-semibold">Blue–Cloud Cyber Lab</div>
          <div className="text-slate-500">Sign {mode === "signin"?"in":"up"} to save progress</div>
        </CardHeader>
        <CardContent className="space-y-2">
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <div className="flex gap-2">
            <Button onClick={()=> mode==="signin" ? signInWithEmailAndPassword(auth, email, password) : createUserWithEmailAndPassword(auth, email, password)} className="w-full">{mode==="signin"?"Sign In":"Create Account"}</Button>
            <Button variant="secondary" onClick={()=>signInWithPopup(auth, googleProvider)} className="w-full">Google</Button>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <button className="text-sm text-slate-600" onClick={()=>setMode(mode==="signin"?"signup":"signin")}>{mode==="signin"?"Need an account? Sign up":"Have an account? Sign in"}</button>
          <div className="text-xs text-slate-500">Ethical use only.</div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div className="text-sm">Signed in as <span className="font-medium">{user.email}</span></div>
        <Button variant="secondary" onClick={()=>signOut(auth)}>Sign Out</Button>
      </div>
      {children}
    </div>
  );
}
