import { Message } from '@gitmono/types'

export const isMessageOptimistic = (message: Message): message is Message & { optimistic_id: string } =>
  message.optimistic_id === message.id
