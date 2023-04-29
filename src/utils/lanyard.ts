import { readable } from "svelte/store";
import { LanyardData, LanyardPayload } from "../types/lanyard";

const WS_HEARTBEAT_INTERVAL = 30000;

export function subscribeToLanyard(id: string) {
  return readable<LanyardData>(null, (set) => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: id,
          },
        })
      );

      setInterval(() => {
        socket.send(
          JSON.stringify({
            op: 3,
          })
        );
      }, WS_HEARTBEAT_INTERVAL);
    });

    socket.addEventListener("message", (event) => {
      const data: LanyardPayload = JSON.parse(event.data);

      if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
        set(data.d);
      }
    });
  });
}
