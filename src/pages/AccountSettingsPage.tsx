import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SettingsSubPageAppBar from "@/components/settings/SettingsSubPageAppBar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useData } from "@/context/DataContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AccountSettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const { currentUser, refreshUser } = useData();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      await refreshUser();
      navigate("/login");
      toast.success("Başarıyla çıkış yapıldı.");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Çıkış yapılırken bir hata oluştu.");
    }
  };

  const handleDeleteAccount = async () => {
    if (currentUser.id === "guest") {
      toast.error("Misafir hesabı silinemez. Lütfen giriş yapın.");
      return;
    }

    setIsLoading(true);
    try {
      // 1. Delete profile (cascades to other tables)
      const { error: deleteError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', currentUser.id);

      if (deleteError) throw deleteError;

      // 2. Sign out
      await supabase.auth.signOut();
      await refreshUser();

      navigate("/");
      toast.success("Hesabınız başarıyla silindi.");
    } catch (error: any) {
      console.error("Delete account error:", error);
      toast.error("Hesap silinirken bir hata oluştu: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col overflow-x-hidden font-display">
      <SettingsSubPageAppBar title="Ayarlar" />
      <main className="flex-1 px-4 py-2 pb-24">
        {/* Kullanıcı Profil Özeti Kartı */}
        <section className="mb-6">
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-card shadow-sm">
            <img
              src={currentUser.avatarSrc || "https://placehold.co/150"}
              alt={`${currentUser.name}'s profile picture`}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary-app/20"
            />
            <h2 className="text-xl font-bold text-foreground mt-4">{currentUser.name}</h2>
            <p className="text-muted-foreground mt-1">{currentUser.handle}</p>
          </div>
        </section>

        {/* Tercihler ve Ayarlar Bölümü */}
        <section className="mb-6">
          <h2 className="px-4 pb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Tercihler ve Ayarlar</h2>
          <div className="flex flex-col overflow-hidden rounded-lg bg-card shadow-sm">
            <div className="flex items-center gap-4 p-4 min-h-14">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">dark_mode</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Karanlık Mod</p>
              <div className="shrink-0">
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
              </div>
            </div>
            <hr className="border-border ml-14" />
            <div className="flex items-center gap-4 p-4 min-h-14">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Bildirimler</p>
              <div className="shrink-0">
                <Switch defaultChecked={true} />
              </div>
            </div>
            <hr className="border-border ml-14" />
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-accent/10" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Gizlilik ve Güvenlik</p>
              <span className="material-symbols-outlined text-muted-foreground shrink-0">chevron_right</span>
            </Link>
            <hr className="border-border ml-14" />
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-accent/10" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Film ve Kitap Listem</p>
              <span className="material-symbols-outlined text-muted-foreground shrink-0">chevron_right</span>
            </Link>
          </div>
        </section>
        {/* Uygulama Bilgileri ve Destek Bölümü */}
        <section className="mb-6">
          <h2 className="px-4 pb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Destek</h2>
          <div className="flex flex-col overflow-hidden rounded-lg bg-card shadow-sm">
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-accent/10" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">help</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Yardım ve Destek</p>
              <span className="material-symbols-outlined text-muted-foreground shrink-0">chevron_right</span>
            </Link>
            <hr className="border-border ml-14" />
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-accent/10" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">info</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-foreground">Hakkında</p>
              <span className="material-symbols-outlined text-muted-foreground shrink-0">chevron_right</span>
            </Link>
          </div>
        </section>
        {/* Oturum Yönetimi */}
        <section className="mt-8 mb-4 space-y-4">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-primary-app/20 px-6 py-3 text-base font-bold text-primary-app transition-colors hover:bg-primary-app/30"
          >
            Çıkış Yap
          </button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full rounded-lg px-6 py-3 text-base font-medium text-destructive transition-colors hover:bg-destructive/10">
                Hesabı Sil
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Hesabınızı silmek istediğinize emin misiniz?</AlertDialogTitle>
                <AlertDialogDescription>
                  Bu işlem geri alınamaz. Hesabınız ve ilgili tüm verileriniz (paylaşımlar, favoriler, yorumlar) kalıcı olarak silinecektir.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>İptal</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  {isLoading ? "Siliniyor..." : "Evet, Hesabımı Sil"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </main>
    </div>
  );
};

export default AccountSettingsPage;