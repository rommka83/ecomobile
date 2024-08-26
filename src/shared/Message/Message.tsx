/**
 * A functional component that renders a message with a fade-out effect.
 *
 * @param type - The type of message, either 'error' or 'info'.
 * @param message - The content of the message.
 *
 * @returns A JSX element representing the message with fade-out effect.
 *          If the `view` state is false, the component returns null.
 */

import { useEffect, useState } from 'react';
import { IMessage } from './Message.types.ts';
export function Message({ type, message }: IMessage) {
  const [view, setView] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setView((view) => (view = !view));
    }, 2000);
    return () => clearTimeout(id);
  });

  return view ? (
    <article
      className={`"w-fit rounded border border-black px-3 py-2 ${type == 'error' ? 'bg-gradient-to-r from-red-500' : 'bg-gradient-to-r from-indigo-500'}`}
    >
      <span className="">{message}</span>
      <div className="relative h-2 w-full rounded border border-black bg-white">
        <div className="absolute h-full animate-expand bg-blue-400"></div>
      </div>
      <div className=""></div>
    </article>
  ) : null;
}
