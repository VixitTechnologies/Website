import { useEffect, useRef, useState } from "react";

type Message = {
  text: string;
  sender: "bot" | "user";
};

const welcomeMessage: Message = {
  text: "Hi! Welcome to Vixit Technologies. I'm here to help you with basic questions. What would you like to know?",
  sender: "bot",
};

const faqAnswers: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["service", "services", "offer", "what do you do"],
    answer:
      "Vixit Technologies offers web development, software development, application development and other digital solutions. Visit our Services page to explore more.",
  },
  {
    keywords: ["technology", "technologies", "tools", "stack"],
    answer:
      "We work with modern technologies and tools to build digital solutions. Please visit our Technologies section to learn more.",
  },
  {
    keywords: ["project", "portfolio", "work", "projects"],
    answer:
      "We work on real-world projects and continuously expand our portfolio as we complete more projects. Visit our Work page to learn more.",
  },
  {
    keywords: ["contact", "email", "reach", "phone"],
    answer:
      "You can connect with our team using the Get a Quote button in the navigation. Share your requirements and our team will be happy to assist you.",
  },
  {
    keywords: ["quote", "price", "pricing", "cost", "budget"],
    answer:
      "Project pricing depends on your requirements, features and scope. Click Get a Quote on our website to share your project details.",
  },
  {
    keywords: ["about", "company", "vixit", "who are you"],
    answer:
      "Vixit Technologies focuses on building digital solutions that help businesses improve their online presence and operations. Visit our About page to know more.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello! Welcome to Vixit Technologies. How can I help you today?",
  },
];

const suggestedQuestions = [
  "What services do you offer?",
  "Which technologies do you use?",
  "How can I get a project quote?",
  "How can I contact you?",
];

const HelpChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [pendingResponse, setPendingResponse] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const greetingText = "How can I help you today?";
  const [typedGreeting, setTypedGreeting] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (isOpen) return;

    setShowGreeting(true);
    setTypedGreeting("");

    let index = 0;

    const typingInterval = window.setInterval(() => {
      index++;
      setTypedGreeting(greetingText.slice(0, index));

      if (index >= greetingText.length) {
        window.clearInterval(typingInterval);
      }
    }, 65);

    return () => window.clearInterval(typingInterval);
  }, [isOpen]);

  // Automatically scroll to the latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isOpen]);

  // Display the bot response gradually
  useEffect(() => {
    if (!isTyping || pendingResponse === null) return;

    let currentIndex = 0;

    const typingInterval = window.setInterval(() => {
      currentIndex++;

      setMessages((previous) => {
        const updatedMessages = [...previous];
        const lastMessageIndex = updatedMessages.length - 1;

        if (
          lastMessageIndex >= 0 &&
          updatedMessages[lastMessageIndex].sender === "bot"
        ) {
          updatedMessages[lastMessageIndex] = {
            ...updatedMessages[lastMessageIndex],
            text: pendingResponse.slice(0, currentIndex),
          };
        }

        return updatedMessages;
      });

      if (currentIndex >= pendingResponse.length) {
        window.clearInterval(typingInterval);
        setIsTyping(false);
        setPendingResponse(null);
      }
    }, 25);

    return () => window.clearInterval(typingInterval);
  }, [isTyping, pendingResponse]);

  const getBotResponse = (question: string) => {
    const normalizedQuestion = question.toLowerCase();

    const matchedFaq = faqAnswers.find((faq) =>
      faq.keywords.some((keyword) => normalizedQuestion.includes(keyword)),
    );

    return (
      matchedFaq?.answer ||
      "I'm sorry, I couldn't find an answer to that question. Please use the Get a Quote button on our website to connect with our team."
    );
  };

  const sendMessage = (question: string) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isTyping) return;

    const botResponse = getBotResponse(trimmedQuestion);

    setMessages((previous) => [
      ...previous,
      { text: trimmedQuestion, sender: "user" },
      { text: "", sender: "bot" },
    ]);

    setInput("");
    setPendingResponse(botResponse);
    setIsTyping(true);
  };

  const showSuggestions =
    messages.length > 0 &&
    messages[messages.length - 1].sender === "bot" &&
    !isTyping;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="mb-4 flex h-[480px] w-[350px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
          {/* HEADER */}
          <div className="flex items-center justify-between bg-ink px-5 py-4 text-white">
            <div>
              <h3 className="text-sm font-semibold">Vixit Help Assistant</h3>
              <p className="mt-1 text-xs text-slate-300">
                Here to answer your questions
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-full px-2 py-1 text-xl text-white transition hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-brand text-white"
                      : "rounded-bl-sm border border-border bg-white text-ink"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}

            {/* COMPACT SUGGESTIONS */}
            {showSuggestions && (
              <div className="space-y-2 pt-1">
                <p className="text-xs text-ink">
                  Is there anything else I can help you with?
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendMessage(question)}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] leading-4 text-slate-600 transition hover:border-brand hover:bg-brand/5 hover:text-brand"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={
                isTyping ? "Assistant is typing..." : "Type your question..."
              }
              disabled={isTyping}
              className="min-w-0 flex-1 rounded-full border border-border px-4 py-3 text-xs outline-none transition focus:border-brand disabled:bg-slate-100"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* GREETING MESSAGE */}
      {!isOpen && showGreeting && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mb-3 ml-auto block rounded-xl border border-border bg-white px-4 py-3 text-left text-sm text-ink shadow-lg transition hover:shadow-xl"
        >
          <span className="block font-semibold">Hi! 👋</span>
          <span className="mt-1 block text-xs text-muted">
            {typedGreeting}
            <span className="ml-0.5 animate-pulse">|</span>
          </span>
        </button>
      )}

      {/* FLOATING BUTTON */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close help chat" : "Open help chat"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-brand-dark"
        >
          {isOpen ? "×" : "💬"}
        </button>
      </div>
    </div>
  );
};

export default HelpChatbot;
