'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { getCurrentUser, getUsers, getCars, getMessagesForUsers, sendMessage, type Message } from '@/lib/norcal-data';

export default function MessagesPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [otherUser, setOtherUser] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const user = getCurrentUser();
    const users = getUsers();
    const other = users.find((item) => item.id !== user?.id) || users[0];
    setCurrentUser(user);
    setOtherUser(other);
    setMessages(getMessagesForUsers(user?.id || '', other?.id || ''));
  }, []);

  const send = () => {
    if (!currentUser || !otherUser || !message.trim()) return;
    sendMessage({ from: currentUser.id, to: otherUser.id, text: message.trim() });
    setMessages((prev) => [...prev, { id: Date.now().toString(), senderId: currentUser.id, receiverId: otherUser.id, text: message.trim(), createdAt: new Date().toISOString() }]);
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white shadow-soft overflow-hidden">
        <div className="border-b border-slate-200 p-5 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-green-700">Messages</div>
            <h1 className="mt-2 text-3xl font-black">Chat with sellers and buyers</h1>
          </div>
          <Link href="/listings" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Browse cars
          </Link>
        </div>
        <div className="grid lg:grid-cols-[280px_1fr] min-h-[640px]">
          <aside className="border-r border-slate-200 bg-slate-50 p-4">
            <div className="text-lg font-bold">Conversations</div>
            <div className="mt-5 space-y-3">
              {getUsers().slice(0, 5).map((userItem) => (
                <button
                  key={userItem.id}
                  onClick={() => {
                    setOtherUser(userItem);
                    setMessages(getMessagesForUsers(currentUser?.id || '', userItem.id));
                  }}
                  className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-left hover:border-slate-300"
                >
                  <div className="font-semibold">{userItem.name}</div>
                  <div className="text-xs text-slate-500">{userItem.role}</div>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex flex-col">
            <div className="border-b border-slate-200 p-4 flex items-center gap-3">
              <img src={otherUser?.avatar} alt={otherUser?.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-bold">{otherUser?.name || 'No user selected'}</div>
                <div className="text-sm text-slate-500">{otherUser?.role || 'Marketplace user'}</div>
              </div>
            </div>

            <div className="flex-1 space-y-4 bg-white p-5 overflow-y-auto">
              {messages.map((msg) => {
                const isMine = msg.senderId === currentUser?.id;
                return (
                  <div key={msg.id} className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-md rounded-2xl px-4 py-3 text-sm ${isMine ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'}`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-slate-200 p-4 flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
              />
              <button onClick={send} className="rounded-2xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-500">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
