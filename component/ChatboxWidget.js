import React, { useEffect } from 'react';

const ChatboxWidget = ({ botId }) => {
  useEffect(() => {
    const loadChatboxScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://app.chat360.io/widget/chatbox/common_scripts/script.js';
      script.onload = () => {
        window.loadChat360Bot(botId);
      };
      script.onerror = (err) => {
        console.error(err);
      };
      document.body.appendChild(script);
    };

    loadChatboxScript();

    // Cleanup function
    return () => {
      // Remove the script if the component is unmounted
      const scriptElement = document.querySelector('script[src="https://app.chat360.io/widget/chatbox/common_scripts/script.js"]');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, [botId]);

  return <div>{/* Your component JSX here */}</div>;
};

export default ChatboxWidget;
