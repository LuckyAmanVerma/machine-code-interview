# Chatbox RAG Integration - Design Changes

## Overview
The chatbox has been completely redesigned from a static tag-based question system to a **ChatGPT/Copilot-style conversational interface** with live RAG (Retrieval-Augmented Generation) integration.

---

## What's New

### ✨ UI/UX Updates
- **Conversational Layout**: Messages now appear one after another (like ChatGPT)
- **User vs Assistant Messages**: 
  - User messages appear on the right with primary color background
  - Assistant messages appear on the left with neutral background
- **Typing Indicator**: Loading state shows animated dots while waiting for response
- **Welcome Message**: Clean greeting when chatbox is empty
- **Smooth Animations**: Messages slide in with fade-in effect

### 🔒 Input Validation
- **Minimum 4 Characters**: Users must type at least 4 characters to send
- **Real-time Error Display**: 
  - Error message appears above input box in red
  - Dynamically cleared when user types enough characters
- **Button State Management**: Send button is disabled until validation passes

### 🤖 RAG Integration
- **Live API Integration**: 
  - Connected to: `https://aman-portfolio-ai-server.onrender.com/api/chat`
  - Sends user query to backend RAG system
  - Receives context-aware responses from Gemini AI
  
- **Scope-Limited Responses**: 
  - Only answers about Aman's experience, skills, and projects
  - Blocks out-of-scope questions with helpful message

### 📱 Responsive Design
- Desktop: 28vw width with full height chatbox
- Mobile: 90vw width, adapts to smaller screens
- Touch-friendly buttons and inputs

---

## Component Structure

### [types.ts](types.ts)
```typescript
interface Message {
  id: string;
  role: "user" | "assistant";  // New: conversation structure
  content: string;
  timestamp: Date;
}
```

### [index.tsx](index.tsx)
**Key Features:**
- `useState` for: messages, inputValue, isLoading, validationError
- `validateInput()`: Checks minimum 4 character requirement
- `handleSendMessage()`: 
  - Validates input
  - Calls RAG API endpoint
  - Handles loading state and errors
  - Auto-scrolls to latest message
- `useEffect`: Auto-scrolls to bottom when messages update

### [index.module.css](index.module.css)
**New Styles:**
- `.messagesContainer`: Scrollable chat area with flexbox layout
- `.messageWrapper`: User/assistant message containers
- `.userMessage` / `.assistantMessage`: Different styling for each role
- `.loadingDots`: Animated loading indicator
- `.errorMessage`: Red error notification above input
- `.inputForm`: Flex layout for input + send button
- Animations: `slideIn`, `fadeInUp`, `bounce`

---

## Usage Flow

1. **User clicks 💬 button** → Chatbox opens with welcome message
2. **User types message** (min 4 characters):
   - Real-time validation
   - Error message clears if valid
3. **User clicks send or presses Enter**:
   - User message appears on right (blue)
   - Typing indicator shows on left
   - API call to RAG backend
4. **Assistant responds**:
   - Message appears on left (gray)
   - Supports tags, links, lists from knowledge base
5. **Conversation continues** → Messages stack naturally

---

## API Reference

### Request Format
```json
{
  "message": "What is your React experience?"
}
```

### Response Format
```json
{
  "success": true,
  "message": "I have 7+ years of React experience...",
  "retrievedChunks": 3
}
```

### Supported Questions (Examples)
✅ "Tell me about your backend skills"
✅ "What projects have you worked on?"
✅ "Describe your experience at Accenture"
❌ "What is the tax rate?" (out of scope)

---

## Technical Details

### Removed Components
- ❌ Static data.json tags (data still exists but unused)
- ❌ Tag-based question selection UI
- ❌ Direct HTML answer insertion with dangerouslySetInnerHTML

### New Dependencies
- None! Uses built-in React hooks and fetch API

### Browser Support
- Modern browsers with ES6 support
- Fetch API (no polyfills needed)
- CSS Grid/Flexbox for layout

---

## Styling Features

### Colors Used
- Primary: `var(--color-primary)` - Blue (user messages, buttons)
- Background: `var(--color-bg-secondary)` - Chat container
- Text: `var(--color-text-primary)` - Main text color

### Animations
- Message entry: 300ms slide-in with fade
- Bounce loading dots: 1.4s infinite animation
- Button hover: Scale + shadow effects

### Accessibility
- Proper ARIA labels on buttons
- Semantic HTML (form, input, button)
- Focus states with box-shadow
- Error messages with color and icon

---

## Future Enhancements

- [ ] Message history persistence (localStorage)
- [ ] Voice input/output
- [ ] Code syntax highlighting for technical responses
- [ ] Message copying/sharing
- [ ] Regenerate response button
- [ ] Typing animation for AI responses
- [ ] Document source attribution

---

## Testing Checklist

- [x] Validation works (< 4 chars shows error)
- [x] API integration connected
- [x] Messages display correctly (user/assistant)
- [x] Loading indicator animates
- [x] Error messages styled properly
- [x] Responsive on mobile
- [x] Auto-scroll to latest message
- [x] Close button functionality

---

**Version**: 2.0 (ChatGPT-style RAG)
**Date**: February 2026
**Backend**: Google Gemini 2.5 Flash via RAG API
