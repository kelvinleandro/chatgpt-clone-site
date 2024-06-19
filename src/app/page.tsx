/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ChatArea from "@/components/ChatArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarChatButton from "@/components/SidebarChatButton";
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

  useEffect(() => {
    if (aiLoading) {
      getAiResponse();
    }
  }, [aiLoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const getAiResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuid(),
          author: "ai",
          body: "AI answer placeholder",
        });
      }
      setChatList(chatListClone);
      setAiLoading(false);
    }, 2000);
  };

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

  const handleSelectChat = (id: string) => {
    if (aiLoading) return;

    let item = chatList.find((item) => item.id === id);
    if (item) {
      setChatActiveId(id);
    }
    closeSidebar();
  };

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
  };

  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex((item) => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  };

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>
      
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : "New chat"}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} loading={aiLoading} />

        <Footer disabled={aiLoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
};

export default Page;
