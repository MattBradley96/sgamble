import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";

interface CardProps {
  isOpen: boolean;
  close: () => void;
}

export function Card({ isOpen, close }: CardProps) {
  return (
    <Panel title="💕 Happy Anniversary! 💕" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Dear Iz,
        </div>
        <div><h2 style={{textAlign: "center"}}>Happy Anniversary!! </h2></div>
        <div>
         Thank you so much for the most wonderful time over the last four years.
         I feel so lucky to have met you, and every day has been such a dream.
         </div>
         <div>
         From the top of Mount Vesuvius to late night nugs at Charlie's Fish Bar, I hope this little game reminds you of some of the amazing times we have had over the years.
        </div>
        <div>
        I can't wait to make so many more memories over the years until this game becomes impossible to win!
        </div>
        <div>
        All my love,
        </div>
        <div>
        Matt x x x
        </div>
      </div>
    </Panel>
  );
}
