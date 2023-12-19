export const chats = Array.from({ length: 100 }, (_, index) => ({
  name: `ChatName${index + 1}`,
  id: index + 1,
}))
