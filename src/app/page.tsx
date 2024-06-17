"use client";
import ChatArea from "@/components/ChatArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import React, { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();
  const [aiLoading, setAiLoading] = useState(false);
  
  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {};

  const handleNewChat = () => {};

  const handleSendMessage = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header openSidebarClick={openSidebar} title={`A new chat`} newChatClick={handleNewChat} />

        <ChatArea chat={chatActive} />

        <Footer disabled={aiLoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
};

export default Page;
