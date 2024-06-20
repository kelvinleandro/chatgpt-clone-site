import React from "react";
import IconSunTwentyFour from "./icons/IconSunTwentyFour";
import IconWorld from "./icons/IconWorld";
import IconBrain from "./icons/IconBrain";
import IconRobot from "./icons/IconRobot";

const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="text-4xl font-bold text-center my-8">K-GPT</h3>

      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconWorld width={24} height={24} className="mr-3" />
            Example
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            What is the capital of France?
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Who painted the Mona Lisa?
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            What is the boiling point of water in Celsius?
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconBrain width={24} height={24} className="mr-3" />
            Example
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            How would you design a robot to assist elderly people in their homes?
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Propose three ways to reduce plastic waste in the ocean.
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Create a short story about a futuristic society where humans and robots coexist peacefully.
          </div>
        </div>
        
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconRobot width={24} height={24} className="mr-3" />
            Example
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            How does a neural network function?
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explain the concept of reinforcement learning in AI.
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            What are the advantages of using convolutional neural networks (CNNs) in image recognition?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPlaceholder;
