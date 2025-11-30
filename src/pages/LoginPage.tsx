import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Lütfen e-posta ve şifrenizi girin.");
            return;
        }

        try {
            console.log("LoginPage: Attempting login with", email);
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            console.log("LoginPage: Result", { data, error });

            if (error) throw error;

            toast.success("Giriş başarılı!");
            navigate("/explore");
        } catch (error: any) {
            console.error("Login error:", error);
            toast.error(error.message || "Giriş yapılırken bir hata oluştu.");
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 font-display text-foreground">
            <div className="w-full max-w-md space-y-8 py-8 mt-10">
                {/* Logo and Slogan */}
                <div className="text-center">
                    <Link to="/" className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary-app text-5xl">movie</span>
                        <h1 className="text-2xl font-bold tracking-tight mt-2 text-foreground">StoryLink</h1>
                    </Link>
                    <p className="text-muted-foreground mt-1">Tekrar hoş geldin!</p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight text-center">Giriş Yap</h2>

                    {/* Social Login Buttons */}
                    <div className="flex flex-col items-stretch gap-3">
                        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-12 px-5 bg-card text-foreground text-base font-bold leading-normal tracking-[0.015em] w-full border border-border shadow-sm hover:bg-card/90">
                            <svg className="w-5 h-5" viewBox="0 0 48 48">
                                <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                                <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                                <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                                <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.41,44,30.668,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                            </svg>
                            <span className="truncate">Google ile Giriş Yap</span>
                        </Button>
                        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-12 px-5 bg-card text-foreground text-base font-bold leading-normal tracking-[0.015em] w-full border border-border shadow-sm hover:bg-card/90">
                            <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.222,12.02c0.05-0.71,0.28-2.5-1.9-2.5c-1.78,0-2.88,1.07-3.64,1.07c-0.78,0-1.57-1.05-3.12-1.05c-2.14,0-3.64,2.02-3.64,4.72c0,3.42,2.5,7.72,4.92,7.72c0.71,0,1.21-0.36,2.21-0.36c1.02,0,1.41,0.36,2.23,0.36c2.45,0,4.7-4.25,4.7-7.96Zm-5.832,7.06c-0.02,0-0.03,0-0.05,0c-0.91,0.02-1.9-0.62-2.21-1.74c-0.69-2.5,0.91-4.27,2.14-4.27c0.16,0,0.3,0.02,0.43,0.04c-0.14,1.04,0.39,2.83,0.73,3.71c-0.45,0.88-1.02,2.24-1.04,2.26Zm4.43-5.26c-0.52-0.04-1.55-0.18-2.3-1.09c0.71-0.81,1.71-1.21,2.41-1.21c0.11,0,0.21,0,0.3,0.02c-0.14,0.73-0.23,1.52-0.41,2.28Z"></path>
                            </svg>
                            <span className="truncate">Apple ile Giriş Yap</span>
                        </Button>
                    </div>

                    <p className="text-muted-foreground text-sm font-normal leading-normal text-center">Veya e-posta ile devam et</p>

                    {/* Email/Password Form */}
                    <div className="space-y-4">
                        <Label className="flex flex-col flex-1">
                            <p className="text-foreground text-base font-medium leading-normal pb-2">E-posta</p>
                            <Input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-foreground focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border bg-card h-14 placeholder:text-muted-foreground p-[15px] text-base font-normal leading-normal"
                                placeholder="E-posta adresinizi girin"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Label>
                        <Label className="flex flex-col flex-1">
                            <div className="flex justify-between items-center pb-2">
                                <p className="text-foreground text-base font-medium leading-normal">Şifre</p>
                                <Link to="#" className="text-primary-app text-sm font-medium hover:underline">Şifremi Unuttum</Link>
                            </div>
                            <div className="flex w-full flex-1 items-stretch rounded-xl">
                                <Input
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-foreground focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border bg-card h-14 placeholder:text-muted-foreground p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                                    placeholder="Şifrenizi girin"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    className="text-muted-foreground flex border border-border bg-card items-center justify-center pr-[15px] rounded-r-xl border-l-0 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined">{showPassword ? "visibility" : "visibility_off"}</span>
                                </div>
                            </div>
                        </Label>
                    </div>

                    <Button onClick={handleLogin} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
                        <span className="truncate">Giriş Yap</span>
                    </Button>

                    <div className="text-center mt-4">
                        <p className="text-muted-foreground text-sm">
                            Hesabın yok mu?{" "}
                            <Link to="/register" className="text-primary-app font-bold hover:underline">
                                Kayıt Ol
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
