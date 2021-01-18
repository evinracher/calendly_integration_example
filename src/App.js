import React, { useEffect } from 'react';
import './App.css';
import { TOKEN } from './utils/constants'
import { InlineWidget } from "react-calendly";

function App() {
  const fetchUser = async () => {
    const res = await fetch("https://api.calendly.com/users/me", {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <header>
        <InlineWidget url="https://calendly.com/eevinley/post-vaccine-appt?hide_event_type_details=1&hide_gdpr_banner=1" />
      </header>
    </div>)
}

export default App;
