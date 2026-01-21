import { supabase } from './supabaseClient.js';

const emailInput = document.getElementById('email');
const sendButton = document.getElementById('send-login-link');

sendButton.addEventListener('click', async () => {
  const email = emailInput.value;

  if (!email) {
    alert('メールアドレスを入力してください');
    return;
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin
    }
  });

  if (error) {
    alert('送信エラー: ' + error.message);
  } else {
    alert('ログインリンクを送信しました。メールを確認してください');
  }
});
