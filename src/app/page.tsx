"use client";
import ChatArea from "@/components/ChatArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>("");
  const [chatActive, setChatActive] = useState<Chat>();
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {
    if (aiLoading) return;
    setChatActiveId("");
    setChatList([]);
  };

  const handleNewChat = () => {
    if (aiLoading) return;
    setChatActiveId("");
    closeSidebar();
  };

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      // creating new chat
      let newChatId = uuid();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuid(), author: "me", body: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatId);
    } else {
      // updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      chatListClone[chatIndex].messages.push({
        id: uuid(),
        author: "me",
        body: message,
      });
      setChatList(chatListClone);
    }

    setAiLoading(true);
  };

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
        <Header
          openSidebarClick={openSidebar}
          title={`A new chat`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer disabled={aiLoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
};

export default Page;
