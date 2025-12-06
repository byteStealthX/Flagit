import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

/**
 * Smart chatbot widget with keyword-based responses
 * Fixed position bottom-right corner
 */
export function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hi there! 👋 Welcome to FlagIt! How can I assist you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Bot responses based on keywords
    const getBotResponse = (userMessage: string): string => {
        const msg = userMessage.toLowerCase();

        if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
            return "Hi there! Welcome to FlagIt! How can I assist you today?";
        }

        if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost')) {
            return "We offer flexible pricing:\n• Free Trial: ₹0 for 30 days\n• Starter: ₹8,299/month\n• Pro: ₹41,499/month\n\nCheck our pricing page for full details!";
        }

        if (msg.includes('feature') || msg.includes('what can') || msg.includes('capabilities')) {
            return "FlagIt helps you combat misinformation with:\n✅ AI-powered fact checking\n✅ Real-time verification\n✅ Evidence extraction\n✅ Source credibility scoring\n✅ Automated reports\n\nWant to know more about a specific feature?";
        }

        if (msg.includes('support') || msg.includes('help') || msg.includes('contact')) {
            return "We're here to help! 🙋‍♂️\n\n📧 Email: support@flagit.com\n💬 Live chat (you're here!)\n📞 Phone: +91-XXXX-XXXXX\n\nSupport hours: 24/7";
        }

        if (msg.includes('demo') || msg.includes('try') || msg.includes('test')) {
            return "Great! We'd love to show you FlagIt in action! 🎯\n\nPlease share your email, and our team will set up a personalized demo for you within 24 hours.";
        }

        if (msg.includes('trial') || msg.includes('free')) {
            return "Yes! We offer a 14-day FREE trial with full access to all features! 🎉\n\nNo credit card required. Start verifying content immediately!";
        }

        if (msg.includes('integration') || msg.includes('api') || msg.includes('integrate')) {
            return "FlagIt integrates with 100+ tools including:\n• Slack\n• Microsoft Teams\n• Zapier\n• Custom APIs\n• Webhooks\n\nOur REST API makes integration seamless!";
        }

        if (msg.includes('security') || msg.includes('safe') || msg.includes('secure')) {
            return "Security is our top priority! 🔒\n\n✅ 256-bit SSL encryption\n✅ GDPR compliant\n✅ SOC 2 certified\n✅ HIPAA compliant\n✅ Regular security audits\n\nYour data is safe with us!";
        }

        if (msg.includes('how') || msg.includes('work')) {
            return "FlagIt works in 3 simple steps:\n\n1️⃣ Submit content for verification\n2️⃣ AI analyzes sources & credibility\n3️⃣ Get detailed report with evidence\n\nTypically takes 30-60 seconds!";
        }

        // Default response
        return "Thanks for your question! I'm here to help with:\n• Pricing & Plans\n• Features & Capabilities\n• Technical Support\n• Demos & Trials\n• Integrations\n• Security\n\nWhat would you like to know?";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Show typing indicator
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(input),
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);

            // If chat is closed, increment unread
            if (!isOpen) {
                setUnreadCount((prev) => prev + 1);
            }
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setUnreadCount(0);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl flex items-center justify-center"
            >
                <MessageCircle className="w-7 h-7" />
                {unreadCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold"
                    >
                        {unreadCount}
                    </motion.span>
                )}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
                        style={{ height: '500px', maxHeight: 'calc(100vh - 8rem)' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    💬
                                </div>
                                <div>
                                    <h3 className="font-semibold">FlagIt Assistant</h3>
                                    <p className="text-xs opacity-90">Online • Instant replies</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                                                : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                                        <p
                                            className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                                                }`}
                                        >
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-200">
                                        <div className="flex gap-1">
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                                className="w-2 h-2 bg-gray-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                                className="w-2 h-2 bg-gray-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                                className="w-2 h-2 bg-gray-400 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
