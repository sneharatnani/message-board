import axios from "axios";

export default function useMessage(setMessages, setTotalDocs) {
  async function getMessages() {
    try {
      const response = await axios.get("http://localhost:3500/", {
        params: {
          skip: 0,
          limit: 2,
        },
      });
      await setMessages(response.data.allMessages);
      await setTotalDocs(response.data.numberOfDocs);
    } catch (err) {
      console.error(err);
    }
  }

  async function loadMoreMessages(limit, skip) {
    try {
      const response = await axios.get("http://localhost:3500/", {
        params: {
          limit,
          skip,
        },
      });
      await setMessages((prevMsg) => [
        ...prevMsg,
        ...response.data.allMessages,
      ]);
      await setTotalDocs(response.data.numberOfDocs);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    getMessages,
    loadMoreMessages,
  };
}
