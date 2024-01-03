import {Card, Metric} from "@tremor/react";

function WelcomeMessage(){

    const now = new Date();
  
    const hours = now.getHours(); // 24 hours
  
    const dayMessage = (hours > 5 && hours < 12) ? "🌞 Good morning! ⚡ Start your day with a burst of energy. Remember, every workout brings you one step closer to your goals. 💪 Let's make today amazing!"
    : (hours >= 12 && hours < 16) ? "🌞 Good afternoon! ⚡ It's the perfect time to re-energize your day. Your fitness journey is a marathon, not a sprint. ✊ Keep pushing forward! 💪"
    : "🌙 Good evening! ⚡ Unwind and rejuvenate with a rewarding workout. You're not just building muscles, you're building a stronger you. 💪 Let's end the day on a high note! 🔥🔥🔥";
  
    return (
      <div className="griddy">
        <Card id="welcome">
          <Metric>{dayMessage}</Metric>
        </Card>
      </div>
    )
    }
export default WelcomeMessage;

