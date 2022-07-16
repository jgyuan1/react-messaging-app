import React, { useContext, useState, useEffect } from "react";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const io = require("socket.io-client");
    const newSocket = io("http://localhost:5000", {
      query: { id },
    });

    // const newSocket = io("http://localhost:5000", { query: { id } });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
