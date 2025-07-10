"use client";

import Link from "next/link";
import Image from "next/image";
import CollapsibleBanner from './CollapsibleBanner';
import Card from './Card';
import { useState, useEffect, useRef } from 'react';

// Base conversation component
interface MessageInstance {
  id: string;
  text: string;
  sender: 'participant' | 'ai';
  color: string;
  position: any;
  isFading: boolean;
}

// Array of participant colors for randomization
const participantColors = [
  'bg-indigo-500 text-indigo-50',
  'bg-pink-500 text-indigo-50',
  'bg-yellow-400 text-indigo-900',
  'bg-green-500 text-white',
  'bg-purple-500 text-white',
  'bg-emerald-500 text-white',
  'bg-orange-500 text-white',
  'bg-red-500 text-white',
  'bg-teal-500 text-white',
  'bg-amber-500 text-white',
  'bg-cyan-500 text-white',
  'bg-lime-500 text-white',
  'bg-violet-500 text-white',
  'bg-rose-500 text-white',
  'bg-sky-500 text-white',
];

interface ConversationMessage {
  text: string;
  sender: 'participant' | 'ai';
  color?: string;
  position?: { top: string; left: string };
}

interface ConversationOverlayProps {
  conversation: ConversationMessage[];
  getAIPosition: () => { top: string; left: string };
  startDelay?: number; // Delay in milliseconds before starting the conversation
}

function ConversationOverlay({ conversation, getAIPosition, startDelay = 0 }: ConversationOverlayProps) {
  const [activeMessages, setActiveMessages] = useState<MessageInstance[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const messageIdCounter = useRef(0);

  // Add CSS for entrance animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes messageEntrance {
        0% {
          opacity: 0;
          transform: scale(0.8) translateY(10px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Start the conversation when component mounts with optional delay
  useEffect(() => {
    if (conversation.length === 0) return;
    
    const timer = setTimeout(() => {
      setIsPlaying(true);
      setCurrentMessageIndex(0);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [conversation.length, startDelay]);

  // Handle showing messages
  useEffect(() => {
    console.log(`useEffect triggered - isPlaying: ${isPlaying}, messages: ${conversation.length}`);
    if (!isPlaying) return;
    
    if (conversation.length === 0) return;
    
    const showNextMessage = () => {
      const message = conversation[currentMessageIndex];
      const messageId = `msg-${messageIdCounter.current++}`;
      
      console.log(`Showing message ${currentMessageIndex}: ${message.text}`);
      
      // Create new message instance
      const newMessage: MessageInstance = {
        id: messageId,
        text: message.text,
        sender: message.sender as 'participant' | 'ai',
        color: message.sender === 'ai' 
          ? 'bg-blue-500 text-white' 
          : (message.color || participantColors[Math.floor(Math.random() * participantColors.length)]),
        position: message.sender === 'ai' ? getAIPosition() : (message.position || { top: '50%', left: '50%' }),
        isFading: false
      };

      // Add message to active list
      setActiveMessages(prev => {
        console.log(`Adding message ${messageId}, current active: ${prev.length}`);
        return [...prev, newMessage];
      });

      // Start fade after 5 seconds (2 seconds after next message appears)
      setTimeout(() => {
        console.log(`Starting fade for message ${messageId}`);
        setActiveMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, isFading: true }
              : msg
          )
        );

        // Remove message after fade animation (1000ms)
        setTimeout(() => {
          console.log(`Removing message ${messageId}`);
          setActiveMessages(prev => prev.filter(msg => msg.id !== messageId));
        }, 1000);
      }, 5000);

      // Move to next message after 3 seconds
      setTimeout(() => {
        setCurrentMessageIndex(prev => {
          const next = (prev + 1) % conversation.length;
          console.log(`Moving to message index ${next}`);
          return next;
        });
      }, 3000);
    };

    // Show the current message
    showNextMessage();
  }, [currentMessageIndex, isPlaying, conversation, getAIPosition]);

  return (
    <>
      {activeMessages.map((message) => {
        // Determine tail direction based on position
        const getTailDirection = () => {
          const left = parseFloat(message.position.left);
          const top = parseFloat(message.position.top);
          if (left < 30) return 'left';
          if (left > 70) return 'right';
          if (top < 30) return 'top';
          if (top > 70) return 'bottom';
          return 'bottom'; // default
        };
        
        const tailDirection = getTailDirection();
        
        return (
          <div
            key={message.id}
            className={`absolute z-30 rounded-full px-4 py-1 text-xs md:text-sm shadow-2xl backdrop-blur-md border border-indigo-400/30 whitespace-nowrap transition-all duration-700 animate-in ${message.color} ${
              message.isFading 
                ? 'opacity-0 scale-95' 
                : 'opacity-100 scale-100'
            }`}
            style={{
              ...message.position,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.2), 0 10px 15px -3px rgba(0, 0, 0, 0.3)',
              animation: message.isFading ? 'none' : 'messageEntrance 0.5s ease-out'
            }}
          >
            {message.text}
            {/* Speech bubble tail */}
            <div 
              className="absolute w-0 h-0 border-4 border-transparent"
              style={{
                ...(tailDirection === 'left' && {
                  borderRightColor: message.color.includes('bg-indigo') ? '#6366f1' :
                                   message.color.includes('bg-pink') ? '#ec4899' :
                                   message.color.includes('bg-yellow') ? '#facc15' :
                                   message.color.includes('bg-green') ? '#10b981' :
                                   message.color.includes('bg-purple') ? '#8b5cf6' :
                                   message.color.includes('bg-blue') ? '#3b82f6' :
                                   message.color.includes('bg-orange') ? '#f97316' :
                                   message.color.includes('bg-red') ? '#ef4444' :
                                   message.color.includes('bg-teal') ? '#14b8a6' :
                                   message.color.includes('bg-emerald') ? '#10b981' :
                                   message.color.includes('bg-amber') ? '#f59e0b' :
                                   '#6b7280',
                  left: '-8px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }),
                ...(tailDirection === 'right' && {
                  borderLeftColor: message.color.includes('bg-indigo') ? '#6366f1' :
                                  message.color.includes('bg-pink') ? '#ec4899' :
                                  message.color.includes('bg-yellow') ? '#facc15' :
                                  message.color.includes('bg-green') ? '#10b981' :
                                  message.color.includes('bg-purple') ? '#8b5cf6' :
                                  message.color.includes('bg-blue') ? '#3b82f6' :
                                  message.color.includes('bg-orange') ? '#f97316' :
                                  message.color.includes('bg-red') ? '#ef4444' :
                                  message.color.includes('bg-teal') ? '#14b8a6' :
                                  message.color.includes('bg-emerald') ? '#10b981' :
                                  message.color.includes('bg-amber') ? '#f59e0b' :
                                  '#6b7280',
                  right: '-8px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }),
                ...(tailDirection === 'top' && {
                  borderBottomColor: message.color.includes('bg-indigo') ? '#6366f1' :
                                    message.color.includes('bg-pink') ? '#ec4899' :
                                    message.color.includes('bg-yellow') ? '#facc15' :
                                    message.color.includes('bg-green') ? '#10b981' :
                                    message.color.includes('bg-purple') ? '#8b5cf6' :
                                    message.color.includes('bg-blue') ? '#3b82f6' :
                                    message.color.includes('bg-orange') ? '#f97316' :
                                    message.color.includes('bg-red') ? '#ef4444' :
                                    message.color.includes('bg-teal') ? '#14b8a6' :
                                    message.color.includes('bg-emerald') ? '#10b981' :
                                    message.color.includes('bg-amber') ? '#f59e0b' :
                                    '#6b7280',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }),
                ...(tailDirection === 'bottom' && {
                  borderTopColor: message.color.includes('bg-indigo') ? '#6366f1' :
                                 message.color.includes('bg-pink') ? '#ec4899' :
                                 message.color.includes('bg-yellow') ? '#facc15' :
                                 message.color.includes('bg-green') ? '#10b981' :
                                 message.color.includes('bg-purple') ? '#8b5cf6' :
                                 message.color.includes('bg-blue') ? '#3b82f6' :
                                 message.color.includes('bg-orange') ? '#f97316' :
                                 message.color.includes('bg-red') ? '#ef4444' :
                                 message.color.includes('bg-teal') ? '#14b8a6' :
                                 message.color.includes('bg-emerald') ? '#10b981' :
                                 message.color.includes('bg-amber') ? '#f59e0b' :
                                 '#6b7280',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                })
              }}
            />
          </div>
        );
      })}
    </>
  );
}

// Task Management Conversation
const taskManagementConversation: ConversationMessage[] = [
  // Initial setup and task creation
  { text: "We need to finish the Q4 roadmap", sender: 'participant', position: { top: '15%', left: '12%' } },
  { text: "Creating task: Q4 Roadmap Planning", sender: 'ai' },
  { text: "Assign that to Sarah", sender: 'participant', position: { top: '25%', left: '82%' } },
  { text: "Assigned to Sarah, due Dec 15th", sender: 'ai' },
  
  // Follow-up and status updates
  { text: "What's the status on the API integration?", sender: 'participant', position: { top: '45%', left: '8%' } },
  { text: "API integration is 80% complete, blocked by auth", sender: 'ai' },
  { text: "Move it to Mike's queue", sender: 'participant', position: { top: '65%', left: '85%' } },
  { text: "Reassigned to Mike, priority: high", sender: 'ai' },
  
  // Meeting follow-up
  { text: "From our client meeting today...", sender: 'participant', position: { top: '35%', left: '5%' } },
  { text: "Creating 3 follow-up tasks", sender: 'ai' },
  { text: "Schedule demo for next week", sender: 'participant', position: { top: '75%', left: '18%' } },
  { text: "Calendar event created for Tuesday 2pm", sender: 'ai' },
  
  // Project overview
  { text: "Show me the sprint overview", sender: 'participant', position: { top: '20%', left: '78%' } },
  { text: "12 tasks active, 3 due today, 2 blockers", sender: 'ai' },
  { text: "Which ones are at risk?", sender: 'participant', position: { top: '55%', left: '10%' } },
  { text: "Mobile app testing and payment integration", sender: 'ai' },
  
  // Quick actions
  { text: "Mark the design review as complete", sender: 'participant', position: { top: '30%', left: '88%' } },
  { text: "Design review completed, moving to QA", sender: 'ai' },
  { text: "Any dependencies I should know about?", sender: 'participant', position: { top: '70%', left: '15%' } },
  { text: "Waiting on legal approval for terms", sender: 'ai' },
];

// Calendar Conversation
const calendarConversation: ConversationMessage[] = [
  // Initial meeting scheduling
  { text: "We need to schedule the client presentation", sender: 'participant', position: { top: '10%', left: '25%' } },
  { text: "Creating calendar event: Client Presentation", sender: 'ai' },
  { text: "Make it next Tuesday at 2pm", sender: 'participant', position: { top: '20%', left: '70%' } },
  { text: "Event scheduled for Tuesday 2pm, sent invites", sender: 'ai' },
  
  // Calendar conflict resolution
  { text: "I have a conflict at 2pm", sender: 'participant', position: { top: '40%', left: '15%' } },
  { text: "Found alternative: Tuesday 3pm or Wednesday 2pm", sender: 'ai' },
  { text: "Wednesday works better for everyone", sender: 'participant', position: { top: '45%', left: '65%' } },
  { text: "Rescheduled to Wednesday 2pm, updated all invites", sender: 'ai' },
  
  // Follow-up scheduling
  { text: "Don't forget the follow-up meeting", sender: 'participant', position: { top: '30%', left: '8%' } },
  { text: "Creating follow-up: Friday 10am", sender: 'ai' },
  { text: "Add the Q&A session too", sender: 'participant', position: { top: '75%', left: '25%' } },
  { text: "Added Q&A session for Friday 11am", sender: 'ai' },
  
  // Team availability check
  { text: "When is everyone free next week?", sender: 'participant', position: { top: '25%', left: '55%' } },
  { text: "Team availability: Mon 1pm, Wed 3pm, Fri 9am", sender: 'ai' },
  { text: "Book the Monday slot", sender: 'participant', position: { top: '50%', left: '12%' } },
  { text: "Team meeting scheduled for Monday 1pm", sender: 'ai' },
  
  // Calendar insights
  { text: "Show me this week's schedule", sender: 'participant', position: { top: '35%', left: '75%' } },
  { text: "This week: 8 meetings, 3 deadlines, 2 free slots", sender: 'ai' },
  { text: "Any conflicts I should know about?", sender: 'participant', position: { top: '65%', left: '18%' } },
  { text: "Double booking detected: Tuesday 3pm", sender: 'ai' },
];

// Meeting Platforms Conversation
const meetingPlatformsConversation: ConversationMessage[] = [
  // Auto-joining meetings
  { text: "I'm running late to the client call", sender: 'participant', position: { top: '8%', left: '35%' } },
  { text: "Joining the meeting for you", sender: 'ai' },
  { text: "Can you take notes?", sender: 'participant', position: { top: '18%', left: '85%' } },
  { text: "Recording and taking notes", sender: 'ai' },
  
  // Action item capture
  { text: "What were the action items?", sender: 'participant', position: { top: '38%', left: '5%' } },
  { text: "3 action items captured from the meeting", sender: 'ai' },
  { text: "Create tasks for each", sender: 'participant', position: { top: '58%', left: '90%' } },
  { text: "Tasks created and assigned", sender: 'ai' },
  
  // AI participation
  { text: "Ask about the timeline", sender: 'participant', position: { top: '28%', left: '22%' } },
  { text: "Asking about project timeline", sender: 'ai' },
  { text: "Good, now summarize the key points", sender: 'participant', position: { top: '78%', left: '8%' } },
  { text: "Key points summarized and shared", sender: 'ai' },
  
  // Platform support
  { text: "Switch to Zoom for the next call", sender: 'participant', position: { top: '12%', left: '55%' } },
  { text: "Switching to Zoom, link updated", sender: 'ai' },
  { text: "Is everyone connected?", sender: 'participant', position: { top: '48%', left: '88%' } },
  { text: "All participants confirmed connected", sender: 'ai' },
  
  // Meeting insights
  { text: "How was the meeting engagement?", sender: 'participant', position: { top: '68%', left: '12%' } },
  { text: "High engagement, 95% participation rate", sender: 'ai' },
  { text: "Any follow-ups needed?", sender: 'participant', position: { top: '88%', left: '45%' } },
  { text: "2 follow-up meetings scheduled", sender: 'ai' },
];

function getRandomCenterOffset() {
  const topPercent = 40 + Math.random() * 20;
  const leftPercent = 40 + Math.random() * 20;
  
  const containerWidth = 600;
  const containerHeight = 600;
  const messageWidth = 120;
  const messageHeight = 40;
  
  const actualLeft = (leftPercent / 100) * containerWidth - (messageWidth / 2);
  const actualTop = (topPercent / 100) * containerHeight - (messageHeight / 2);
  
  return { 
    top: `${Math.max(10, Math.min(90, (actualTop / containerHeight) * 100))}%`, 
    left: `${Math.max(10, Math.min(90, (actualLeft / containerWidth) * 100))}%` 
  };
}

function getCalendarAIOffset() {
  const topPercent = 70 + Math.random() * 20;
  const leftPercent = 70 + Math.random() * 20;
  
  const containerWidth = 600;
  const containerHeight = 600;
  const messageWidth = 120;
  const messageHeight = 40;
  
  const actualLeft = (leftPercent / 100) * containerWidth - (messageWidth / 2);
  const actualTop = (topPercent / 100) * containerHeight - (messageHeight / 2);
  
  return { 
    top: `${Math.max(60, Math.min(85, (actualTop / containerHeight) * 100))}%`, 
    left: `${Math.max(60, Math.min(85, (actualLeft / containerWidth) * 100))}%` 
  };
}

function getMeetingPlatformsAIOffset() {
  const topPercent = 30 + Math.random() * 20;
  const leftPercent = 60 + Math.random() * 20;
  
  const containerWidth = 600;
  const containerHeight = 600;
  const messageWidth = 120;
  const messageHeight = 40;
  
  const actualLeft = (leftPercent / 100) * containerWidth - (messageWidth / 2);
  const actualTop = (topPercent / 100) * containerHeight - (messageHeight / 2);
  
  return { 
    top: `${Math.max(20, Math.min(50, (actualTop / containerHeight) * 100))}%`, 
    left: `${Math.max(50, Math.min(80, (actualLeft / containerWidth) * 100))}%` 
  };
}

const categories = [
  {
    id: "task-management",
    title: "Task Management",
    description: (
      <>
        <div className="mb-2">Blueprint's AI agent supercharges your team's productivity by:</div>
      </>
    ),
    bullets: [
      {
        title: 'Creating actionable tickets and tasks from meeting discussions',
        description: 'Turn every conversation into real progress! Instantly capture action items and create tasks as you talk, so your team never misses a beat and projects move forward faster.'
      },
      {
        title: 'Automatically updating the status of tasks and tickets as you talk',
        description: 'Experience true automation—Blueprint keeps your project boards up-to-date in real time, letting your team focus on what matters most while the busywork disappears.'
      },
      {
        title: 'Assigning tasks to the right team members based on roles and workload',
        description: 'No more guesswork! Blueprint intelligently assigns tasks to the perfect team member, ensuring balanced workloads and lightning-fast execution.'
      },
      {
        title: 'Providing real-time project overviews and surfacing blockers',
        description: 'Stay ahead of the curve with instant project insights and proactive alerts about blockers—empowering your team to solve problems before they slow you down.'
      },
    ],
    mainImage: {
      src: "/images/task-management-1.png",
      alt: "AI voice assistant at center creating, updating, and assigning tasks to multiple team members."
    },
    learnMore: "/integrations?category=task-management",
  },
  {
    id: "calendars",
    title: "Calendars",
    description: (
      <>
        <div className="mb-2">Blueprint keeps your team's schedule effortlessly organized by:</div>
      </>
    ),
    bullets: [
      {
        title: 'Creating calendar events from meeting discussions and follow-ups',
        description: 'Never miss a meeting again! Blueprint transforms your conversations into calendar events, so every follow-up and commitment is scheduled and shared instantly.'
      },
      {
        title: 'Updating events automatically as plans change',
        description: 'Stay perfectly in sync—Blueprint updates your calendar in real time as plans evolve, eliminating confusion and keeping your team aligned.'
      },
      {
        title: 'Finding optimal meeting times across all connected calendars',
        description: 'Effortlessly find the best time for everyone! Blueprint scans all connected calendars to suggest the perfect meeting slot, making scheduling a breeze.'
      },
      {
        title: 'Providing real-time insights into team availability and scheduling conflicts',
        description: 'Gain instant clarity on team availability and avoid double-bookings—Blueprint highlights conflicts before they happen, so your schedule always works.'
      },
    ],
    mainImage: {
      src: "/images/calendars.png",
      alt: "Calendar support image"
    },
    learnMore: "/integrations?category=calendars",
  },
  {
    id: "meeting-platforms",
    title: "Meeting Platforms",
    description: (
      <>
        <div className="mb-2">Blueprint transforms your team's meetings by:</div>
      </>
    ),
    bullets: [
      {
        title: 'Automatically joining meetings based on your calendar',
        description: 'Step into every meeting on time, every time—Blueprint joins for you, so you\'re always present and ready to contribute.'
      },
      {
        title: 'Listening and understanding context to capture action items',
        description: 'Let Blueprint be your meeting memory—capturing every action item and key point, so your team can focus on the conversation, not the note-taking.'
      },
      {
        title: 'Participating naturally—providing insights, asking questions, and taking action',
        description: 'Experience meetings with a true AI teammate—Blueprint jumps in with insights, asks smart questions, and helps drive decisions in real time.'
      },
      {
        title: 'Supporting Zoom, Google Meet, Microsoft Teams, and more',
        description: 'No matter your platform, Blueprint is there—seamlessly supporting Zoom, Google Meet, Microsoft Teams, and more for a frictionless experience.'
      },
    ],
    mainImage: {
      src: "/images/meeting-platforms.png",
      alt: "Meeting platforms support image"
    },
    learnMore: "/integrations?category=meeting-platforms",
  },
];

export default function IntegrationsCategoriesGrid() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-full px-6 sm:px-10 md:px-0">
        <div className="flex flex-col gap-32">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`flex flex-col-reverse md:flex-row items-start gap-4 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Section */}
              <div className="flex-[2_2_0%] flex flex-col justify-start items-start space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100">{cat.title}</h2>
                <div className="text-base md:text-lg text-indigo-200/80">
                  {cat.description}
                  <div className="flex flex-col gap-2 mt-4">
                    {cat.bullets && cat.bullets.map((bullet, i) => (
                      <CollapsibleBanner key={i} title={bullet.title} description={bullet.description} />
                    ))}
                  </div>
                </div>
                <Link
                  href={cat.learnMore}
                  className="text-indigo-400 hover:text-indigo-200 font-semibold transition-colors border-b border-indigo-400 hover:border-indigo-200 text-sm md:text-base"
                >
                  Learn more &rarr;
                </Link>
              </div>
              {/* Image Section */}
              <div className="flex-[3_3_0%] flex items-center justify-center relative">
                <Card className="w-full max-w-2xl">
                  <div className="relative w-full aspect-square">
                    <Image src={cat.mainImage.src} alt={cat.mainImage.alt} fill style={{objectFit: 'cover'}} className="filter grayscale" />
                    <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
                    <div className="absolute inset-0 bg-indigo-500 opacity-20 pointer-events-none" />
                  </div>
                </Card>
                
                {/* Conversation overlays positioned above the card */}
                {/* Task Management Conversation */}
                {cat.id === 'task-management' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <ConversationOverlay 
                      conversation={taskManagementConversation}
                      getAIPosition={getRandomCenterOffset}
                      startDelay={0}
                    />
                  </div>
                )}
                
                {/* Calendar Conversation */}
                {cat.id === 'calendars' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <ConversationOverlay 
                      conversation={calendarConversation}
                      getAIPosition={getCalendarAIOffset}
                      startDelay={500}
                    />
                  </div>
                )}
                
                {/* Meeting Platforms Conversation - Animation removed */}
                {/* {cat.id === 'meeting-platforms' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <ConversationOverlay 
                      conversation={meetingPlatformsConversation}
                      getAIPosition={getMeetingPlatformsAIOffset}
                      startDelay={1000}
                    />
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 